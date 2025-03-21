import {gifs} from "../../constants/gifs";

const VideoPreview = () => {
    const style: any = {
        height: '500px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    };

    return (
        <img src={gifs.sample} alt="Animated GIF" style={style} />
    )
}

export default VideoPreview;
