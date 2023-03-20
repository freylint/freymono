import HeaderBar from "@/shared/headerbar";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: "Freyground: Projects",
  description: "Personal projects directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-5"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.min.css"
        />
      </head>
      <body className="font-sans break-words bg-slate-900 white-space:pre-line">
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
