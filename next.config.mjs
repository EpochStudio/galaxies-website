/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        team: [
            { name: "Uthsho", detail: "Founder", avatar: "./app/images/uthsho.gif" },
            { name: "chrissch_dhil.dev", detail: "Lead Developer In-charge", avatar: "./app/images/chrissch.png" },
            { name: "\"Shimeji\" Rin", detail: "Acting Lead Developer", avatar: "./app/images/rin.png" },
            { name: "Aniket", detail: "Bot Developer", avatar: "./app/images/aniket.png" }
        ],
    }
};

export default nextConfig;
