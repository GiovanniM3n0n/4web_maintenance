import React from "react";
import Image from "next/image";
import NavBar from "./navbar";

const Aside: React.FC = () => {
    return (
        <aside className="w-64 bg-[#3589C5] text-white flex flex-col h-screen p-6 shadow-md fixed top-0 left-0 z-20">
            <div className="flex items-center justify-center mb-8">
                <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-[#3589C5]">
                    <Image
                        src="/image/mylogo.png"
                        alt="Logo"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
            </div>
            <NavBar />
        </aside>
    );
}

export default Aside;
