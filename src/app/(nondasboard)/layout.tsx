"use client";

import React from "react";
import { NAVBAR_HEIGHT } from "../../lib/constants";
import Navbar from "../../components/ui/navbar";
import { useGetAuthUserQuery } from "@/src/state/api";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { data: authUser } = useGetAuthUserQuery(); 
    console.log("authUser", authUser);

    return (
        <div className="h-full w-full">
            <Navbar />
            <main className={`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}px]`}
                style={{ paddingTop: `${NAVBAR_HEIGHT}px`}}
            >
                {children}
            </main>
        </div>
    )
};

export default Layout;
