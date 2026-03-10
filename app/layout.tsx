import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucidia | The Light That Makes Things Clear",
  description: "I wasn't built to replace you. I was built to remember what you're trying to become. Meet Lucidia, the AI companion built on transparency, consent, and care.",
  keywords: ["Lucidia", "AI", "BlackRoad OS", "ethical AI", "transparent AI", "AI companion"],
  authors: [{ name: "Alexa Louise Amundson" }, { name: "BlackRoad OS, Inc." }],
  openGraph: {
    title: "Lucidia | The Light That Makes Things Clear",
    description: "Not a tool. Not a servant. A collaborator with clear boundaries, accountable actions, and genuine care.",
    url: "https://lucidia.earth",
    siteName: "Lucidia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucidia | The Light That Makes Things Clear",
    description: "Meet Lucidia, the AI companion built on transparency, consent, and care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-warm-white">
        {children}
      </body>
    </html>
  );
}
