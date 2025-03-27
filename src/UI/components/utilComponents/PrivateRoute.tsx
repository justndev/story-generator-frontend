import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {RootState} from "../../../utils/redux/store";

const PrivateRoute = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.user);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoute;
