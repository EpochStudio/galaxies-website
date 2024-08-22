import { Raleway } from 'next/font/google'

import "./bootstrap.css";
import "./fontawesome-all.css";
import "./globals.css";

import GoogleScripts from "@/Components/GoogleScripts";
import Navbar from "@/Components/Navbar";
import Preloader from '@/Components/Preloader';

const font = Raleway({
  weight: ['400', '600', '700'],
  subsets: ["latin-ext"],
  style: ["normal", "italic"]
});

export const metadata = {
  title: "Galaxies Discord Bot",
  description: "Galaxies. A multipurpose utility bot dependable to manage events and performs tasks seamlessly.",
  authors: [{ name: 'chrissch_dhil.dev' }],

  metadataBase: new URL('http://localhost:3000/'),
  openGraph: {
    title: 'Galaxies Discord bot',
    description: 'Galaxies. A multipurpose utility bot dependable to manage events and performs tasks seamlessly.',
    url: 'https://galaxies-website.vercel.app/',
    siteName: 'Galaxies bot',
    images: '/images/favicon.png',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className} data-spy="scroll" data-target=".fixed-top">
        <GoogleScripts />

        <Preloader />
        <Navbar />
        {children}


        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery.easing.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/scripts.js"></script>
        <script src="https://epochstudio.statuspage.io/embed/script.js"></script>

        <script>
          statusEmbedTest()
        </script>
      </body>
    </html>
  );
}
