import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {changeSize} from "../../../utils/redux/appSlice";

const ResizeListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(changeSize(window.innerWidth));
        };

        // Initial trigger
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dispatch]);

    return null;
};

export default ResizeListener;
