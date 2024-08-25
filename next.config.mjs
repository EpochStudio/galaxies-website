/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        team: [
            // Developers
            {
                name: "Uthsho", id: "747870498221719592", title: "Founder", type: "developer",
                avatar: "/images/uthsho.gif", aboutMe: ""
            },
            {
                name: "chrissch_dhil.dev", id: "592663451978039298", title: "Lead Developer In-charge", type: "developer",
                avatar: "/images/chrissch.png", aboutMe: ""
            },
            {
                name: "\"Shimeji\" Rin", id: "586913853804249090", title: "Acting Lead Developer", type: "developer",
                avatar: "/images/rin.png", aboutMe: ""
            },
            {
                name: "Aniket", id: "474255126228500480", title: "Bot Developer", type: "developer",
                avatar: "/images/aniket.png", aboutMe: ""
            },
            {
                name: "SyntaxSavior", id: "474529598504304641", title: "Trial Web Developer", type: "developer",
                avatar: "/images/syntaxsavior.png", aboutMe: ""
            },

            // Staff (avatar is not compulsory but keep it just in case discord api fails)
            {
                name: "SyntaxSavior 2", id: "474529598504304641", title: "Server Manager", type: "staff",
                avatar: "/images/syntaxsavior.png", aboutMe: ""
            }
        ]
    }
};

export default nextConfig;
