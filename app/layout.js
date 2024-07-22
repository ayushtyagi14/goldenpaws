import { Poppins } from "next/font/google";
import { Platypi } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const platypi = Platypi({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Golden Paws</title>
        <meta name='description' content='Description' />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
