import { Fira_Code as FontMono, Inter as FontSans  ,Ubuntu_Sans_Mono as Ubuntu} from "next/font/google";
import localFont from "next/font/local";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontUbuntu = localFont({
  src: "./Ubuntu-Regular.ttf",
  variable: "--font-ubuntu",
});
