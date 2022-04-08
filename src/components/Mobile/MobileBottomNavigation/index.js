import * as React from "react";
import Router from "next/router";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Icon } from "../../index";

export default function MobileBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const navigation_data = [
    {
      label: "Home",
      icon: "home",
      href: "/",
    },
    {
      label: "Categories",
      href: "/products",
      icon: "category",
    },
    {
      label: "Favorites",
      href: "/",
      icon: "star",
    },
    {
      href: "/cart",
      label: "Cart",
      icon: "cart",
    },
  ];

  function toPage(href) {
    Router.push(href || "");
  }
  return (
    <Box className="flex-center fixed z-50 bg-white w-full bottom-0  ">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navigation_data.map(({ label, icon, href }, index) => (
          <BottomNavigationAction key={index} onClick={() => toPage(href)} label={label} icon={<Icon name={icon} />} />
        ))}
      </BottomNavigation>
    </Box>
  );
}
