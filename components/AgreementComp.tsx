'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const AgreementComp = () => {
    const [file, setFile] = useState(null);

    // PDF Download Logic
    const handleDownload = () => {
        const pdfUrl = '/agreement.pdf'; // Replace with actual PDF path
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = '/agreement.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Handle File Upload
    const handleUpload = (event: any) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
        console.log('Uploaded File:', uploadedFile);
    };

    const router = useRouter()

    // Simulate Upload Action (e.g., API Call)
    const uploadDocument = async () => {
        if (!file) {
            alert('Please upload a file first.');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://api.hosoptima.com/api/v1/ad-manager/sign/agreement', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('File uploaded successfully');
                router.push("/ad-plan");
            } else {
                alert('File upload failed');
            }
        } catch (error) {
            console.error('Upload error:', error);
            alert('An error occurred during upload.');
        }
    };

    return (
        <div className="md:ml-64 lg:ml-64 mt-1 bg-white w-full h-full rounded pb-8">
            <h3 className="text-black font-bold text-base text-left pt-4 ml-5">
                HOS Assessment Sponsorship Agreement
            </h3>
            <p className="text-black font-normal text-sm w-full text-left pt-4 ml-5">
                This Sponsorship Agreement (&quot;Agreement&quot;) is entered into by and between [HOSoptima Inc.]
                (&quot;HOSoptima&quot;) and [Sponsor Name] (&quot;Sponsor&quot;) as of [Effective Date].
            </p>

            <div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        1.     Sponsorship Details:<br /> <br />
                    </h3>
                    <p className="text-black font-normal text-sm text-left -mt-1 ml-5">
                        HOSoptima agrees to provide sponsorship benefits to Sponsor as outlined in Exhibit A attached hereto (&quot;Sponsorship Benefits&quot;).
                        Sponsor agrees to provide the sponsorship fee of [Amount] (&quot;Sponsorship Fee&quot;) in exchange for the Sponsorship Benefits.
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        2.     Terms:
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        The term of this Agreement shall commence on the Effective Date and continue until the
                        completion of the HOS Assessment Challenge (&quot;Challenge&quot;).
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        3.     Sponsorship Benefits:
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        3.1  The Sponsorship Benefits include, but are not limited to, the following:

                        Logo placement on Challenge promotional materials.
                        Recognition on the HOSoptima website and social media channels.
                        Opportunity to provide branded materials or prizes for Challenge participants.
                        [Other Benefits as Agreed Upon]
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        4.     Sponsorship Fee
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        The Sponsorship Fee shall be paid by Sponsor to HOSoptima in accordance with the payment
                        terms specified in Exhibit A.
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        5.     Representations & Warranties
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        HOSoptima represents and warrants that it has the right to grant the Sponsorship Benefits to Sponsor.
                        Sponsor represents and warrants that it has the authority to enter into this Agreement and fulfill its obligations hereunder.
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        6.     Termination
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        Either party may terminate this Agreement upon written notice to the other party if the
                        other party materially breaches any provision of this Agreement and fails to cure such
                        breach within [number] days of receiving written notice thereof.
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        7.     Confidentiality
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        Each party agrees to keep confidential any proprietary or confidential information
                        disclosed by the other party in connection with this Agreement.
                    </p>
                </div>
                <div>
                    <h3 className="text-black font-semibold text-sm text-left pt-4 ml-5">
                        8.     Governing Law
                    </h3>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        This Agreement shall be governed by and construed in accordance with the laws of the State
                        of [State], without regard to its conflict of law principles.
                    </p>
                </div>
                <div>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.
                    </p>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        [HOSoptima Inc.] By: ____________________________ Name: [Name] Title: [Title]
                    </p>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        [Sponsor Name] By: ____________________________ Name: [Name] Title: [Title]
                    </p>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        <span className="font-semibold">Exhibit A - Sponsorship Benefits:</span> [Detailed Description of Sponsorship Benefits and Payment Terms]
                    </p>
                    <p className="text-black font-normal text-sm text-left mt-4 ml-5">
                        Last updated: [Date]
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 mt-7 ml-5">
                    <button
                        onClick={handleDownload}
                        className="py-2 px-4 font-medium transparent text-sm text-blue-900 border rounded hover:bg-gray-200">
                        Download PDF
                    </button>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleUpload}
                        className='py-2 px-4 border border-gray-300 text-sm rounded cursor-pointer'
                    />
                    <button
                        onClick={uploadDocument}
                        className="py-2 px-4 font-normal bg-blue-950 text-sm text-white border rounded hover:bg-blue-900">
                        Upload Signed Document
                    </button>
                </div>
            </div>
        </div>
    )
}