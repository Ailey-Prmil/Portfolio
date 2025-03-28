import { inter, playwrite, dancingScript } from "../styles/fonts";
import NavBar from "../components/NavBar";
import "@/styles/main.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playwrite.variable} ${dancingScript.variable}`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
