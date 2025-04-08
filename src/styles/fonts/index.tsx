import { Playwrite_AR, Inter, Dancing_Script } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
}); // Inter - primary font

export const playwrite = Playwrite_AR({
  variable: "--font-playwrite-ar",
}); // Playwrite Arabic - secondary font

export const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
}); // Dancing Script - accent font

export const fonts = [inter, playwrite, dancingScript]; // All fonts
