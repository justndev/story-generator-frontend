import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import * as React from "react";
import TextButton from "./buttons/TextButton";
import LanguageDropdownMenu from "./dropdowns/LanguageDropdownMenu";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../utils/redux/store";
import {changePage} from "../../utils/redux/appSlice";
import { useNavigate } from "react-router-dom";

const isMobile = false

const Header = () => {
    const size = useSelector((state: RootState) => state.app.currentSize);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentPage = useSelector((state:RootState) => state.app.currentPage)

    const headerStyle: any = {
        zIndex: 999,
        position: "absolute",
        padding: '10px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        height: size === 'large' ? 80 : 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'flex-end',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    function handleHome() {
        if (currentPage !== '/') {
            navigate('/home');
            dispatch(changePage("home"));
        }
    }
    function handleAuth() {
        if (currentPage !== 'auth') {
            navigate('/auth');
            dispatch(changePage("auth"));
        }
    }

    return (
        <div style={headerStyle}>
            <TextButton label={"Home"} onClick={handleHome} selected={currentPage === 'home'} />
            <LanguageDropdownMenu open={true}/>
            <TextButton label={"Start Using"} onClick={handleAuth} selected={currentPage === 'auth'}/>
        </div>
    )
}



export default Header;
