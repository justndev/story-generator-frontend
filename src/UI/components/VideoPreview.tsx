import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";

const VideoPreview = ({ src }: { src: string }) => {
    const size = useSelector((state: RootState) => state.app.currentSize);

    const style: React.CSSProperties = {
        height: size === "large" ? 500 : 350,
        borderRadius: "15px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    };

    return (
        <video src={src} style={style} autoPlay loop muted playsInline />
    );
};

export default VideoPreview;
