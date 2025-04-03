import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {RootState} from "../../../utils/redux/store";
import {login} from "../../../utils/redux/userSlice";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {changePage} from "../../../utils/redux/appSlice";


const LocalStorageListener = () => {
    const {i18n} = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user)
    const navigate = useNavigate();

    useEffect(() => {
        const checkUserDetails = () => {
            if (localStorage.getItem("email") !== null && !user?.email) {
                dispatch(login(
                    {
                        email: localStorage.getItem("email"),
                        firstName: localStorage.getItem("firstName"),
                        lastName: localStorage.getItem("lastName"),
                        jwt: localStorage.getItem("jwt"),
                    }
                ));
                dispatch(changePage("service"));

                navigate("/service");
            }
            const savedLanguage = localStorage.getItem('userLanguage');
            if (savedLanguage) {
                i18n.changeLanguage(savedLanguage);
            }
        };

        checkUserDetails();

    }, []);

    return null;
};

export default LocalStorageListener;
