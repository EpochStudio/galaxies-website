/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        team: [
            { name: "Uthsho", detail: "Founder", avatar: "/images/uthsho.gif" },
            { name: "chrissch_dhil.dev", detail: "Lead Developer In-charge", avatar: "/images/chrissch.png" },
            { name: "\"Shimeji\" Rin", detail: "Acting Lead Developer", avatar: "/images/rin.png" },
            { name: "Aniket", detail: "Bot Developer", avatar: "/images/aniket.png" },
            { name: "SyntaxSavior", detail: "Trial Web Developer", avatar: "/images/syntaxsavior.png" }
        ],
    }
};

export default nextConfig;
