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
            const response = await fetch('/api/upload', {
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
        <div className="relative ss:ml-3 ss:mt-3 ss:w-19.5 ss:h-115 sm:ml-3 sm:mt-3 sm:w-21.5 sm:h-107 lg:ml-20 lg:mt-5 bg-white lg:w-62 lg:h-74 rounded">
            <h3 className="relative ss:pt-4 ss:ml-3 sm:pt-4 sm:ml-3 text-dark lg:font-bold text-base lg:text-left lg:pt-4 lg:ml-5">
                HOS Assessment Sponsorship Agreement
            </h3>
            <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                This Sponsorship Agreement (&quot;Agreement&quot;) is entered into by and between [HOSoptima Inc.]
                (&quot;HOSoptima&quot;) and [Sponsor Name] (&quot;Sponsor&quot;) as of [Effective Date].
            </p>

            <div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        1.     Sponsorship Details:<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        HOSoptima agrees to provide sponsorship benefits to Sponsor as outlined in Exhibit A attached hereto (&quot;Sponsorship Benefits&quot;).<br />
                        Sponsor agrees to provide the sponsorship fee of [Amount] (&quot;Sponsorship Fee&quot;) in exchange for the Sponsorship Benefits.
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        2.     Terms:<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        The term of this Agreement shall commence on the Effective Date and continue until the
                        completion of the HOS Assessment Challenge (&quot;Challenge&quot;).
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        3.     Sponsorship Benefits:<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        3.1  The Sponsorship Benefits include, but are not limited to, the following:<br /> <br />

                        Logo placement on Challenge promotional materials.<br />
                        Recognition on the HOSoptima website and social media channels.<br />
                        Opportunity to provide branded materials or prizes for Challenge participants.<br />
                        [Other Benefits as Agreed Upon]
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        4.     Sponsorship Fee<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        The Sponsorship Fee shall be paid by Sponsor to HOSoptima in accordance with the payment
                        terms specified in Exhibit A.
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        5.     Representations & Warranties<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        HOSoptima represents and warrants that it has the right to grant the Sponsorship Benefits to Sponsor.<br />
                        Sponsor represents and warrants that it has the authority to enter into this Agreement and fulfill its obligations hereunder.
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        6.     Termination<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        Either party may terminate this Agreement upon written notice to the other party if the
                        other party materially breaches any provision of this Agreement and fails to cure such
                        breach within [number] days of receiving written notice thereof.
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        7.     Confidentiality<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        Each party agrees to keep confidential any proprietary or confidential information
                        disclosed by the other party in connection with this Agreement.
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:pt-4 ss:ml-3 sm:max-w-20 sm:pt-4 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:pt-4 lg:ml-5">
                        8.     Governing Law<br /> <br />
                    </p>
                    <p className="relative ss:max-w-19.5 ss:-mt-1 ss:ml-3 sm:max-w-20 sm:-mt-1 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:-mt-1 lg:ml-5">
                        This Agreement shall be governed by and construed in accordance with the laws of the State
                        of [State], without regard to its conflict of law principles.
                    </p>
                </div>
                <div>
                    <p className="relative ss:max-w-19.5 ss:mt-3 ss:ml-3 sm:max-w-20 sm:mt-3 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                        IN WITNESS WHEREOF, the parties have executed this Agreement as of the Effective Date.
                    </p>
                    <p className="relative ss:mt-5 ss:ml-3 sm:mt-5 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                        [HOSoptima Inc.] By: ____________________________ Name: [Name] Title: [Title]
                    </p>
                    <p className="relative ss:mt-5 ss:ml-3 sm:mt-5 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                        [Sponsor Name] By: ____________________________ Name: [Name] Title: [Title]
                    </p>
                    <p className="relative ss:mt-5 ss:ml-3 sm:max-w-20 sm:mt-5 sm:ml-3 text-dark lg:font-normal text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                        <span className="font-semibold">Exhibit A - Sponsorship Benefits:</span> [Detailed Description of Sponsorship Benefits and Payment Terms]
                    </p>
                    <p className="relative ss:mt-5 ss:ml-3 sm:mt-5 sm:ml-3 text-dark lg:font-semibold text-sm lg:max-w-55 lg:text-left lg:mt-5 lg:ml-5">
                        Last updated: [Date]
                    </p>
                </div>
                <div className="flex gap-3 ss:ml-3 sm:ml-3 lg:ml-5">
                    <button
                        onClick={handleDownload}
                        className="relative ss:h-6 ss:w-10 ss:mt-3 ss:min-w-12 sm:h-6 sm:w-10 sm:mt-3 sm:min-w-12 lg:h-6 lg:w-19.6 lg:mt-7 font-bold transparent text-sm text-light-blue border rounded hover:bg-gray-light">
                        Download PDF
                    </button>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleUpload}
                        className='relative ss:border ss:w-12.5 sm:border sm:w-15.6 lg:h-6 lg:w-19.6 lg:mt-7 lg:border border-gray-dark lg:text-sm rounded cursor-pointer'
                    />
                    <button
                        onClick={uploadDocument}
                        className="relative ss:-ml-19.29 ss:mt-8 ss:h-7 ss:w-12 sm:-ml-20.41 sm:mt-8 sm:h-7 sm:w-12 lg:h-6 lg:w-19.6 lg:mt-7 lg:ml-0.1 font-bold bg-blue text-sm text-white border rounded hover:bg-light-blue">
                        Upload Signed Document
                    </button>
                </div>
            </div>

        </div>
    )
}