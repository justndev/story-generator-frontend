import React, { useState, useRef, useEffect } from 'react';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CustomIcon from "./CustomIcon";
import {icons} from "../../constants/icons";

interface SlidingCarouselProps {
    children: React.ReactNode[];
    transitionDuration?: number;
}

const SlidingCarousel: React.FC<SlidingCarouselProps> = ({
                                                             children,
                                                             transitionDuration = 300,
                                                         }) => {
    const [activeIndex, setActiveIndex] = useState(Math.floor(children.length / 2));
    const [transitioning, setTransitioning] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState(5)
    const {width} = useWindowDimensions();

    useEffect(()=> {
        if (width > 1500) {
            setVisibleItems(5)
        } else if (width > 800) {
            setVisibleItems(3)
        } else {
            setVisibleItems(1)
        }
    }, [width]);
    // Calculate item width based on visible items
    const itemWidth = 100 / visibleItems;

    // Calculate the translation amount to center the active item
    const getTranslateX = () => {
        const centerPosition = 50 - itemWidth / 2;
        const offset = activeIndex * itemWidth;
        return centerPosition - offset;
    };

    const handlePrev = () => {
        if (transitioning || activeIndex <= 0) return;

        setTransitioning(true);
        setActiveIndex(activeIndex - 1);

        setTimeout(() => {
            setTransitioning(false);
        }, transitionDuration);
    };

    const handleNext = () => {
        if (transitioning || activeIndex >= children.length - 1) return;

        setTransitioning(true);
        setActiveIndex(activeIndex + 1);

        setTimeout(() => {
            setTransitioning(false);
        }, transitionDuration);
    };

    // Styles
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '800px',
        overflow: 'hidden',
        padding: '0 20px',
    };

    const trackStyle: React.CSSProperties = {
        display: 'flex',
        width: '100%',
        height: '100%',
        transform: `translateX(${getTranslateX()}%)`,
        transition: `transform ${transitionDuration}ms ease-in-out`,
    };

    const itemStyle: React.CSSProperties = {
        flex: `0 0 ${itemWidth}%`,
        height: '100%',
        padding: '0 10px',
        boxSizing: 'border-box',
        transition: 'transform 300ms ease, opacity 300ms ease',
    };

    const activeItemStyle: React.CSSProperties = {
        ...itemStyle,
        transform: 'scale(1.2)',
        zIndex: 1,
    };

    const buttonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: '40px',
        height: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    };

    return (
        <div style={containerStyle}>
            <button
                style={{ ...buttonStyle, left: '10px' }}
                onClick={handlePrev}
                disabled={transitioning || activeIndex === 0}
            >
                <CustomIcon icon={icons.arrowLeft} />

            </button>

            <div ref={trackRef} style={trackStyle}>
                {children.map((child, index) => (
                    <div
                        key={index}
                        style={index === activeIndex ? activeItemStyle : itemStyle}
                    >
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: Math.abs(index - activeIndex) > Math.floor(visibleItems / 2) ? 0.3 : 1,
                            }}
                        >
                            {child}
                        </div>
                    </div>
                ))}
            </div>

            <button
                style={{ ...buttonStyle, right: '10px' }}
                onClick={handleNext}
                disabled={transitioning || activeIndex === children.length - 1}
            >
                <CustomIcon icon={icons.arrowRight} />
            </button>
        </div>
    );
};

export default SlidingCarousel;
