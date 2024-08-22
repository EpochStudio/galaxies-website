/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        team: [
            { name: "Uthsho", id: "747870498221719592", detail: "Founder", avatar: "/images/uthsho.gif" },
            { name: "chrissch_dhil.dev", id: "592663451978039298", detail: "Lead Developer In-charge", avatar: "/images/chrissch.png" },
            { name: "\"Shimeji\" Rin", id: "586913853804249090", detail: "Acting Lead Developer", avatar: "/images/rin.png" },
            { name: "Aniket", id: "474255126228500480", detail: "Bot Developer", avatar: "/images/aniket.png" },
            { name: "SyntaxSavior", id: "474529598504304641", detail: "Trial Web Developer", avatar: "/images/syntaxsavior.png" }
        ],
    },
    env: {
        BOT_TOKEN: "NzY4NzEwNjg1NDI4NTQ3NTk1.G--rCx.2gITDKlj12e77bIsbqYbvd4CHpA3O2aiedS4yY"
    }
};

export default nextConfig;
