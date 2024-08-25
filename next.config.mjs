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
                name: "n1nsoka", id: "209490561378418699", title: "Update Direction Affairs Manager", type: "staff",
                avatar: "/images/syntaxsavior.png", aboutMe: ""
            },
            {
                name: "liaisalwayssleepy", id: "1118547483635744768", title: "Update Direction Affairs Manager\nCommunity Manager", type: "staff",
                aboutMe: ""
            },
            {
                name: "commandnikhil", id: "728991780317691934", title: "Community Manager", type: "staff", aboutMe: ""
            },
            {
                name: ".eletric.1", id: "769791662636531743", title: "Moderator", type: "staff", aboutMe: ""
            },
            {
                name: "sujal1048d", id: "668090704601415691", title: "Moderator", type: "staff"
            }
        ]
    }
};

export default nextConfig;
