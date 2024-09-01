/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        team: [
            // Developers
            {
                name: "Uthsho", id: "747870498221719592", title: "Founder", type: "developer",
                avatar: "/images/uthsho.gif", aboutMe: "The Founder of Galaxies."
            },
            {
                name: "chrissch_dhil.dev", id: "592663451978039298", title: "Lead Developer In-charge", type: "developer",
                avatar: "/images/chrissch.png", aboutMe: "Hello! I am Chris, a developer from Hong Kong. Currently still in High School, and currently majors in Biology and Computer Science. I specialize in Javascript, Typescript and Python, and is currently learning Kotlin and Rust!\n\nI am also the Lead-Developer of Galaxies if you haven't realized by now! If you have any suggestions/feedback about Galaxies, please do send me a DM on discord!"
            },
            {
                name: "\"Shimeji\" Rin", id: "586913853804249090", title: "Acting Lead Developer", type: "developer",
                avatar: "/images/rin.png", aboutMe: "experimenting so you (hopefully) don't have to"
            },
            {
                name: "Aniket", id: "474255126228500480", title: "Bot Developer", type: "developer",
                avatar: "/images/aniket.png", aboutMe: ""
            },
            {
                name: "SyntaxSavior", id: "474529598504304641", title: "Web Developer", type: "developer",
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
                name: "commandnikhil", id: "728991780317691934", title: "Community Manager", type: "staff", aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            },
            {
                name: ".eletric.1", id: "769791662636531743", title: "Moderator", type: "staff", aboutMe: ""
            },
            {
                name: "sujal1048d", id: "668090704601415691", title: "Moderator", type: "staff", aboutMe: ""
            }
        ]
    }
};

export default nextConfig;
