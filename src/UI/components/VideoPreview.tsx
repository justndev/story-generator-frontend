import {gifs} from "../../constants/gifs";
import {useSelector} from "react-redux";
import {RootState} from "../../utils/redux/store";

const VideoPreview = ({src=gifs.sample}:{src?: string}) => {
    const size = useSelector((state: RootState) => state.app.currentSize)

    const style: any = {
        height: size === 'large' ? 500 : size === 'medium' ? 350 : 350,

        borderRadius: '15px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    return (
        <img src={src} alt="Animated GIF" style={style} />
    )
}

export default VideoPreview;
