import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = { firstName: "Abhinandan", lastName: "Verma" }

  return (
   <main className="flex h-screen w-full font-inter">

        <Sidebar user={loggedInUser}/>

        <div className="flex size-full flex-col">
            <div className="root-layout">
                <Image
                  src="/icons/logo.svg" 
                  alt="menu icon"
                  width={30}
                  height={30}
                />
                <div>
                  <MobileNav user={loggedInUser}/>
                </div>
            </div>
            {children}
        </div>
   </main>
  );
}
