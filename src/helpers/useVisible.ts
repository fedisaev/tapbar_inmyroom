import {useEffect, useState} from "react";

export const useVisible = (): boolean => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollTimeout, setScrollTimeout] = useState(1000);

    useEffect(() => {
        const handleScroll = () => {
            const currentPos = window.scrollY;
            if (currentPos >= 200 && currentPos > prevScrollPos) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setPrevScrollPos(currentPos);
            setScrollTimeout(
                setTimeout(() => {
                    setIsVisible(true);
                }, 1000)
            );
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [prevScrollPos, scrollTimeout]);

    return isVisible;
}