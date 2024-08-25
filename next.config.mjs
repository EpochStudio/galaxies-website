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
        BOT_TOKEN: "MTI3NzI4ODk4ODM5ODQ1Mjg0Nw.GkKuWN.NO8phcV7ceLziV_hg9p9J8TeXE8QJ9i1PcMiOo"
    }
};

export default nextConfig;
