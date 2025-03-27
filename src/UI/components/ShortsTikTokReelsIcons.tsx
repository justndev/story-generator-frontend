const ShortsTikTokReelsIcons = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center', padding: '40px'}}>
            <img
                src={'./assets/tiktok.webp'}
                width={120}
                height={120}
            />
            <img
                src={'./assets/shorts.png'}
                width={90}
                height={90}
            />
            <img
                style={{paddingBottom: '10px', marginLeft: '7px'}}
                src={'./assets/reels.png'}
                width={110}
                height={110}
            />
        </div>)
}

export default ShortsTikTokReelsIcons;
