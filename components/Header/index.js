import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CustomIconButton } from "..";
import logo from "./logo.png";
export default function Header() {
    return (
        <header className="flex-center gap-4 py-6 mx-auto cursor-pointer sticky top-0 lg:w-11/12 sm:w-full sm:px-6 bg-white z-50">
            <div className="flex-center">
                <Image src={logo} placeholder="blurDataURL" alt="logo" height={80} width={280} />
                <div className="flex-center rounded border-2 p-1 pl-2 ml-2 cursor-pointer">
                    <span className="uppercase font text-sm font-semibold">Category</span>
                    <box-icon name="chevron-down"></box-icon>
                </div>
            </div>

            <div className="search_bar rounded-full border-2 w-full flex items-center px-2">
                <box-icon name="search-alt-2"></box-icon>

                <input className="outline-none border-0 py-2 ml-2 text-sm w-full" type="text" placeholder="Search products" />

                <div className="flex-center rounded-full p-1 bg-secondary-500">
                    <box-icon name="search-alt-2" color="white"></box-icon>
                </div>
            </div>

            <div className="category flex items-center gap-4">
                <>
                    <CustomIconButton name="heart" />
                    <CustomIconButton name="cart" />
                    <CustomIconButton name="bell" />
                </>

                <div className="flex-center rounded border-2 p-1 pl-3 ml-2">
                    <span className="uppercase text-sm font-semibold">Login</span>
                    <box-icon name="chevron-down"></box-icon>
                </div>
            </div>
        </header>
    );
}
