import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CustomIconButton } from "..";
import CustomLink from "../CustomLink";
import logo from "@/assets/logo.png";
import ToolTipWithButton from "../ToolTipWithButton";
import { Tooltip } from "@mui/material";
import OutlineButton from "../OutlineButton";
import Icon from "../Icon";
import { ScreenContext } from "../../contexts";
import SearchBox from "./SearchBox";
import { Menu, Skeleton } from "antd";
import { useClickOutside } from "../../hooks";
import categoryMenus from "../../utils/data/categories";

export default function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { mobileScreen } = useContext(ScreenContext);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();
  useClickOutside(ref, () => setIsOpen(false));
  const { SubMenu } = Menu;

  return (
    <div className="w-full sticky top-0 bg-white fixed-top ">
      <header
        className={`container py-4 md:py-2 xl:py-0 flex-center gap-4 mx-auto cursor-pointer sticky top-0 lg:w-11/12 sm:w-full  bg-white z-auto`}
      >
        {/* category */}
        <div className="flex-center">
          {!mobileScreen && (
            <CustomLink href="/">
              <ToolTipWithButton title="Shippr">
                <Image src={logo} placeholder="blurDataURL" alt="logo" height={180} width={220} className="object-contain " />
              </ToolTipWithButton>
            </CustomLink>
          )}
          <div className="relative">
            {!mobileScreen && <OutlineButton isOpen={isOpen} label={"Category"} onClick={() => setIsOpen((pre) => !pre)} />}

            {/* category menu */}
            <div className={`absolute mt-4 w-80 bg-white rounded-lg p-2 border-2 border-grey-900 ${isOpen ? "visible" : "invisible"}`}>
              <ul ref={ref}>
                {categoryMenus.map(({ name, id, slug }) => (
                  <CustomLink href="/" key={id}>
                    <li className="flex  gap-2 p-2 rounded-md border-bottom-2 font-bold hover:text-primary-50 hover:bg-primary-400">
                      <box-icon name="badge" />
                      <span dangerouslySetInnerHTML={{ __html: name }} />
                    </li>
                  </CustomLink>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Search */}
        <SearchBox />

        {/* Buttons - favourite, cart and notification*/}
        {!mobileScreen && (
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

            {/* Login */}

            <OutlineButton label={"Login"} />
          </div>
        )}
      </header>
    </div>
  );
}
