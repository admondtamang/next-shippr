import Image from "next/image";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CustomIconButton } from "..";
import CustomLink from "../CustomLink";
import logo from "./logo.png";
import ToolTipWithButton from "../ToolTipWithButton";
import { Tooltip } from "@mui/material";
import OutlineButton from "../OutlineButton";
import Icon from "../Icon";
import { ScreenContext } from "../../contexts";
import SearchBox from "./SearchBox";
export default function Header() {
  const { cartItems } = useSelector((state) => state.cart);
  const { mobileScreen } = useContext(ScreenContext);

  return (
    <div className="w-full bg-white">
      <header className="container flex-center gap-4 py-6 mx-auto cursor-pointer sticky top-0 lg:w-11/12 sm:w-full sm:px-6 bg-white z-auto">
        {/* category */}
        <div className="flex-center">
          <CustomLink href="/">
            <ToolTipWithButton title="Shippr">
              <Image
                src={logo}
                placeholder="blurDataURL"
                alt="logo"
                height={80}
                width={280}
              />
            </ToolTipWithButton>
          </CustomLink>
          {!mobileScreen && <OutlineButton label={"Category"} />}
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
