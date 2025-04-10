import React from "react";

interface AmountInputProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  width?: string;
  readOnly?: boolean;
  max?: string;
  min?: string;
  onChange: (value: string) => void;
}

function AmountInput({
  value,
  onChange,
  width,
  label,
  placeholder,
  name,
  readOnly,
  // min,
  // max,
}: AmountInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatAmount(inputValue);
    onChange(formattedValue);
  };

  const defaultWidth = "100%";

  const formatAmount = (input: string): string => {
    const noCommas = input.replace(/,/g, "");
    const regex = /^\d+(\.\d{0,2})?$/;
    if (noCommas === "" || regex.test(noCommas)) {
      const [wholeRaw, decimal] = noCommas.split(".");
      const whole = wholeRaw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return decimal !== undefined ? `${whole}.${decimal}` : whole;
    }
    return value;
  };

  return (
    <div>
      {label && (
        <label className="block text-black dark:text-white font-bold">
          {label}
        </label>
      )}
      {
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="relative text-body z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent py-3 px-5 outline-none transition dark:border-form-strokedark dark:bg-form-input"
          style={{ width: width ?? defaultWidth }}
          disabled={readOnly}
        />
      }
    </div>
  );
}

export default AmountInput;