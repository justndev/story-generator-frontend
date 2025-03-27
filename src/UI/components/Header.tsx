import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import * as React from "react";
import TextButton from "./buttons/TextButton";
import LanguageDropdownMenu from "./dropdowns/LanguageDropdownMenu";

const isMobile = false

const Header = () => {
    return (
        <div style={headerStyle}>
           <TextButton label={"Home"}/>
            <LanguageDropdownMenu open={true}/>
            <TextButton label={"Start Using"}/>
        </div>
    )
}

const headerStyle: any = {
    padding: '10px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: isMobile ? 'center' : 'flex-end',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
};

export default Header;
