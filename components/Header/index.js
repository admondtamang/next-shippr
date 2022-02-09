import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { CustomIconButton } from "..";
import CustomLink from "../CustomLink";
import logo from "./logo.png";
import ToolTipWithButton from "../ToolTipWithButton";
import { Tooltip } from "@mui/material";
export default function Header() {
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <div className="header-container w-full bg-white">
            <header className="flex-center gap-4 py-6 mx-auto cursor-pointer sticky top-0 lg:w-11/12 sm:w-full sm:px-6 bg-white z-auto">
                <div className="flex-center">
                    <CustomLink href="/">
                        <ToolTipWithButton title="Shippr">
                            <Image src={logo} placeholder="blurDataURL" alt="logo" height={80} width={280} />
                        </ToolTipWithButton>
                    </CustomLink>
                    <ToolTipWithButton title="Category">
                        <div className="flex-center rounded border-2 p-1 pl-2 ml-2 cursor-pointer">
                            <span className="uppercase font text-black text-sm font-semibold">Category</span>
                            <box-icon name="chevron-down"></box-icon>
                        </div>
                    </ToolTipWithButton>
                </div>

                <form className="search_bar rounded-full border-2 w-full flex items-center px-2">
                    <box-icon name="search-alt-2"></box-icon>

                    <input className="outline-none border-0 py-2 ml-2 text-sm w-full" type="text" placeholder="Search products" />

                    <Tooltip title="Search">
                        <div className="flex-center rounded-full p-1 bg-secondary-500">
                            <box-icon name="search-alt-2" color="white"></box-icon>
                        </div>
                    </Tooltip>
                </form>

                <div className="category flex items-center gap-4">
                    <>
                        <CustomLink href="/">
                            <CustomIconButton name="heart" tooltip="Favourite" />
                        </CustomLink>
                        <div className="relative">
                            <CustomLink href="/cart">
                                <CustomIconButton name="cart" tooltip="Cart" />
                            </CustomLink>

                            <span className="absolute top-6 left-5 bg-primary-400 text-secondary-800 text-xs font-semibold px-2 py-0.5 rounded-full dark:bg-yellow-200 dark:text-yellow-900">
                                {cartItems?.length}
                            </span>
                            {/* <p className="absolute top-6 right-3 p-1 px-3 text-xs rounded-full bg-primary-400 ">{cartItems.length}</p> */}
                        </div>

                        <CustomLink href="/">
                            <CustomIconButton name="bell" tooltip="Notification" />
                        </CustomLink>
                    </>
                    <ToolTipWithButton title="Login">
                        <div className="flex-center rounded border-2 p-1 pl-3 ml-2">
                            <span className="uppercase text-sm font-semibold">Login</span>
                            <box-icon name="chevron-down"></box-icon>
                        </div>
                    </ToolTipWithButton>
                </div>
            </header>
        </div>
    );
}
