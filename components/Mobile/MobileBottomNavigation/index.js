import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Icon } from "../../index";

export default function MobileBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box className="flex-center fixed z-50 bg-white w-full bottom-0">
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<Icon name="home" />}
                />
                <BottomNavigationAction
                    label="Categories"
                    icon={<Icon name="category" />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    icon={<Icon name="user" />}
                />
                <BottomNavigationAction
                    label="Cart"
                    icon={<Icon name="cart" />}
                />
            </BottomNavigation>
        </Box>
    );
}
