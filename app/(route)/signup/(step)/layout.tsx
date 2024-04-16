"use client";

import LineProgress from "@/app/components/Transitions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <LineProgress />
          {children}
        </div>
      </body>
    </html>
  );
}
