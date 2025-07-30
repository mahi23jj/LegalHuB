const sampleDocuments = [
    {
        title: "Permanent Residential Certificate (PRC) in Rural Areas",
        description:
            "Application process for obtaining a PRC for tribal and non-tribal citizens in rural areas.",
        downloadLink:
            "https://drive.google.com/file/d/1b9UxqPQtAUF-JeWnrxZg6KENmLf-6Khb/view",
        applyLink:
            "https://sewasetu.assam.gov.in/site/service-apply/permanent-residential-certificate-prc-in-rural-areas-nchac",
        state: "Assam",
        department: "Revenue & Disaster Management",
        guidelines: [
            "Register on the portal before applying.",
            "Login and select the service you want to apply for.",
            "Fill up the form and upload required documents.",
            "After submission, track your application using the reference number.",
            "If any rectification is required, a query is sent via SMS & Email.",
            "A physical inspection may be scheduled for verification.",
            "After successful verification, visit the NCHAC office to pay the fee.",
            "Download the PRC from the ARTPS Portal after payment.",
        ],
        requiredDocuments: [
            "Land Khajna up-to-date receipt (Mandatory)",
            "PRC of parent’s if exists, else No Objection Certificate from Gaon Burha (Mandatory)",
            "Certified copy of council’s electoral roll (Mandatory)",
            "Birth certificate (for minors) (Mandatory)",
            "Recent passport size photo (Mandatory)",
        ],
    },
    {
        title: "Income Certificate",
        description:
            "Application process for obtaining an income certificate for various purposes.",
        downloadLink:
            "https://sivasagar.assam.gov.in/sites/default/files/public_utility/INCOME.pdf",
        applyLink:
            "http://sewasetu.assam.gov.in/site/service-apply/application-for-income-certificate",
        state: "Assam",
        department: "Revenue & Disaster Management",
        guidelines: [
            "Register on the portal before applying.",
            "Login and select the service you want to apply for.",
            "Fill up the form and upload required documents.",
            "After submission, track your application using the reference number.",
            "After successful verification, download the certificate from the ARTPS portal.",
        ],
        requiredDocuments: [
            "Address Proof (Mandatory)",
            "Identity Proof (Mandatory)",
            "Land Revenue Receipt (Mandatory)",
            "Salary Slip (Optional)",
            "Any other supporting document (Optional)",
        ],
    },
];

module.exports = { data: sampleDocuments };
