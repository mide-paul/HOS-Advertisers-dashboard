"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";

const AdvertisingAgreement = () => {
  const [isChecked, setIsChecked] = useState(false);
  const currentUser = useAuthStore((state) => state.user); // Get current user

  return (
    <div className="main-padding py-8 lg:py-12">
      <h1 className="text-3xl font-bold mb-4">
        HOSoptima Advertising Agreement
      </h1>
      <p className="text-gray-500 mb-8">
        This Advertising Agreement (the &quot;Agreement&quot;) is entered into
        by and between the Advertiser (the &quot;Advertiser&quot;) and HOSoptima
        Inc, a premier platform dedicated to providing quality content and
        resources for the hours of service and trucking industry (the
        &quot;Company&quot;), collectively referred to as the
        &quot;Parties.&quot;
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Purpose of the Agreement
        </h2>
        <p className="text-gray-700">
          The purpose of this Agreement is to set forth the terms and conditions
          under which the Advertiser may place advertisements (&quot;Ads&quot;)
          on the Company&apos;s website and associated platforms (collectively,
          the &quot;Platform&quot;), directly related to hours of service,
          trucking, and associated industries.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. Ad Content and Restrictions
        </h2>
        <ol className="list-decimal list-inside space-y-4 ml-4">
          <li className="text-gray-700">
            The Advertiser agrees to ensure that all Ads submitted for
            publication on the Platform are truthful, comply with all applicable
            laws and regulations, and are in no way misleading or deceptive.
          </li>
          <li className="text-gray-700">
            The Advertiser warrants that the Ads will not contain:
            <ol className="list-disc list-inside space-y-2 ml-4">
              <li>
                Any form of nudity, pornography, or sexually explicit content.
              </li>
              <li>
                Content promoting hate speech, discrimination, or violence
                against any individual or group.
              </li>
              <li>False, deceptive, or misleading content.</li>
              <li>Content related to illegal activities or substances.</li>
              <li>
                Ads for industries considered as high risk or shady, including
                but not limited to, gambling, pharmaceuticals, and financial
                services not directly related to the trucking or hours of
                service industries.
              </li>
            </ol>
          </li>
          <li className="text-gray-700">
            The Company reserves the right to reject or remove any Ad that, in
            its sole discretion, violates these content guidelines or is
            otherwise harmful to the Company&apos;s brand or its users.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Payment and Ad Placement
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>
            The Advertiser agrees to pay the Company the agreed-upon rates for
            Ad placement on the Platform.
          </li>
          <li>
            The placement of Ads shall be subject to availability and shall be
            determined in accordance with the Company&apos;s then-current
            advertising policies and procedures.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. Intellectual Property Rights
        </h2>
        <p className="text-gray-700">
          The Advertiser grants the Company a non-exclusive, worldwide,
          royalty-free license to use, reproduce, display, and distribute the
          Ads (and any trademarks, service marks, or logos contained therein) in
          connection with the Platform.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Indemnification</h2>
        <p className="text-gray-700">
          The Advertiser agrees to indemnify, defend, and hold harmless the
          Company and its directors, officers, employees, and agents from and
          against any and all claims, damages, liabilities, costs, and expenses
          (including reasonable attorneys&apos; fees) arising out of or related
          to the Advertiser&apos;s Ads, breach of this Agreement, or violation
          of any law or the rights of a third party.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-700">
          The Company shall not be liable for any direct, indirect, incidental,
          special, consequential, or exemplary damages, including but not
          limited to, damages for loss of profits, goodwill, use, data, or other
          intangible losses (even if the Company has been advised of the
          possibility of such damages), resulting from the Advertiser&apos;s use
          of the Platform to place Ads.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Duration and Termination
        </h2>
        <p className="text-gray-700">
          This Agreement shall commence on the Effective Date and shall continue
          in full force and effect until terminated by either party with thirty
          (30) days written notice.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Miscellaneous</h2>
        <p className="text-gray-700">
          This Agreement constitutes the entire agreement between the Parties
          regarding its subject matter and supersedes all prior or
          contemporaneous understandings, agreements, negotiations,
          representations, and warranties, both written and oral, regarding such
          subject matter.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
        <p className="text-gray-700">
          This Agreement shall be governed by and construed in accordance with
          the laws of the jurisdiction in which the Company is headquartered,
          without giving effect to any choice or conflict of law provision or
          rule.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">10. Signature</h2>
        <p className="text-gray-700">
          IN WITNESS WHEREOF, the Parties have executed this Advertising
          Agreement as of the last date written below:
        </p>
        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-6">
            <Checkbox
              id="terms"
              checked={isChecked}
              onCheckedChange={(checked) => {
                setIsChecked(Boolean(checked));
              }}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree with all the terms and conditions written above.
            </label>
          </div>
          <Link
            href={
              isChecked || !currentUser ? "/advertise-with-us/upload-ad" : "#"
            }
          >
            <Button
              className={`h-12 !px-5 rounded-lg ${
                isChecked || !currentUser
                  ? "bg-blue-950"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!isChecked || !currentUser}
            >
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingAgreement;