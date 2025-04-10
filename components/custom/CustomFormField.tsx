"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import AmountInputField from "./AmountInputField";
import { RadioGroup } from "../ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calender";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { formatDateToDefaultFormat } from "../utils/formatDate";
import { Check, ChevronsUpDown, EyeIcon, EyeOffIcon } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Dropzone from "./forms/Dropzone";

export enum FormFieldType {
  FILE_INPUT = "fileInput",
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  SELECT = "select",
  CHECKBOX = "checkbox",
  RADIO = "radio",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
  SWITCH = "switch",
  AMOUNT_INPUT = "amountInput",
  COMBO_BOX = "comboBox",
}

interface CustomFormFieldProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  readonly?: boolean;
  dateFormat?: string;
  maxFileLength?: number;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  options?: any[]; // Array of dynamic option objects
  labelKey?: keyof any; // The key used for the display label in each option
  valueKey?: keyof any; // The key used for the value in each option
  saveObjectForComboBox?: boolean;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
  // eslint-disable-next-line @typescript-eslint/promise-function-async
}) => {
  const {
    fieldType,
    iconSrc,
    iconAlt,
    placeholder,
    disabled,
    readonly,
    defaultValue,
    type = "text",
    renderSkeleton,
    saveObjectForComboBox = false,
  } = props;

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex items-center rounded-lg border border-[#d8d8d8] px-2.5">
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt ?? "icon"}
              className={cn(iconSrc && "ml-2 text-gray-500")}
            />
          )}
          <FormControl className="flex-1">
            <Input
              {...field}
              onChange={(value) => {
                field.onChange(value);
              }}
              placeholder={placeholder ?? ""}
              className={cn(
                "shad-input border-0",
                type === "file" && "pt-2 md:pt-3 -ml-2"
              )}
              type={type === "password" && showPassword ? "text" : type}
              disabled={disabled}
              readOnly={readonly}
            />
          </FormControl>
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 text-gray-500 focus:outline-none"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            {...field}
            placeholder={placeholder ?? ""}
            value={formatPhoneNumber(field.value)} // Format the value
            onChange={(value) => {
              console.log(formatPhoneNumber(value ?? ""), "FROM PHONE INPUT");
              field.onChange(formatPhoneNumber(value ?? ""));
            }}
            defaultCountry="US"
            countries={["US"]}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-lg border border-[#d8d8d8]">
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  disabled={disabled}
                  variant={"ghost"}
                  className={cn(
                    "shad-input border-0 w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 dark:bg-black" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={(event) => {
                  const stringDate = formatDateToDefaultFormat(event!);
                  field.onChange(stringDate);
                  setIsPopoverOpen(false);
                }}
                disabled={(date) => date < new Date("1900-01-01")}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            defaultValue={field.value}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger className="shad-select-trigger px-4 border-[#d8d8d8] dark:border-gray rounded-lg">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              {props.children}
            </SelectContent>
          </Select>
        </FormControl>
      );
    case FormFieldType.COMBO_BOX:
      // eslint-disable-next-line no-case-declarations
      const selectedOptionLabel = () => {
        if (!field.value) {
          return props.placeholder ?? "Select an option";
        }

        const selectedOption = saveObjectForComboBox
          ? props.options?.find(
              (option: any) =>
                option[props.valueKey!] === field.value?.[props.valueKey!]
            )
          : props.options?.find(
              (option: any) => option[props.valueKey!] === field.value
            );

        return (
          selectedOption?.[props.labelKey!] ||
          props.placeholder ||
          "Select an option"
        );
      };
      return (
        <div className="flex rounded-lg border border-[#d8d8d8]">
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  disabled={disabled}
                  className={cn(
                    "w-full justify-between shad-input border-0 dark:!bg-transparent",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {String(selectedOptionLabel())}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 md:!min-w-[200px]" align="start">
              <Command className="!w-full">
                <CommandInput placeholder={props.placeholder ?? "Search..."} />
                <CommandList className="!w-full">
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {props.options?.map((option: any) => (
                      <CommandItem
                        key={option[props.valueKey!]}
                        value={option[props.labelKey!]}
                        onSelect={() => {
                          console.log("FROM COMBO BOX", option);

                          if (saveObjectForComboBox) {
                            field.onChange(option);
                          } else {
                            field.onChange(option[props.valueKey!]);
                          }

                          setIsPopoverOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            field.value === option[props.valueKey!]
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option[props.labelKey!]}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      );

    case FormFieldType.RADIO:
      return (
        // <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={defaultValue}
          value={field.value}
          className="flex flex-col space-y-1"
        >
          {props.children}
        </RadioGroup>
        // </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            {...field}
            placeholder={placeholder}
            className="shad-textArea border-[#d2d2d2] dark:border-gray"
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
            <FormLabel className="!text-left">{props.label}</FormLabel>
          </div>
        </FormControl>
      );
    case FormFieldType.SWITCH:
      return (
        <FormControl>
          <div className="flex items-center space-x-2">
            <Switch
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <Label htmlFor={props.name} className="text-sm">
              {props.label}
            </Label>
          </div>
        </FormControl>
      );
    case FormFieldType.AMOUNT_INPUT: // New case for AmountInput
      return (
        <FormControl>
          <AmountInputField
            {...field} // Spread the field props
            placeholder={placeholder ?? ""}
            onChange={field.onChange}
            readOnly={readonly}
          />
        </FormControl>
      );
    case FormFieldType.FILE_INPUT:
      return (
        <FormControl>
          <Dropzone
            onChange={field.onChange}
            files={field.value}
            placeholder={placeholder}
            maxFileLength={props.maxFileLength ?? 1}
          />
        </FormControl>
      );

    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;

    default:
      break;
  }
};
const CustomFormField = (props: CustomFormFieldProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX &&
            fieldType !== FormFieldType.SWITCH &&
            fieldType !== FormFieldType.RADIO &&
            label && (
              <FormLabel className="!text-left">
                {/* Remove the asterisk from the label if it exists */}
                {label.replace(/\*$/, "")}
                {/* Render the red asterisk separately if it was present */}
                {label.endsWith("*") && (
                  <span className="text-noor-red">*</span> // Adjust class as needed for your styling
                )}
              </FormLabel>
            )}
          <RenderField field={field} props={props} />
          <FormMessage className="text-red-500 dark:text-orange-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;