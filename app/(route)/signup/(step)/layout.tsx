"use client";

import LineProgress from "@/app/components/Transitions";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  function progress() {
    if (pathname === "/signup/step1") {
      return 33;
    } else if (pathname === "/signup/step2") {
      return 66;
    } else {
      return 100;
    }
  }
  return (
    <section>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <LineProgress progress={progress()} />
        {children}
      </div>
    </section>
  );
}
