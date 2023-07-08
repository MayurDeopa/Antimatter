import { useEffect,useState } from "react";

const useScreenWidth=()=> {

    const [windowWidth, setWindowWidth] = useState(null);

    const isWindow = typeof window !== 'undefined';

    const getWidth = () => isWindow ? window.innerWidth : windowWidth;

    const resize = () => setWindowWidth(getWidth());

    const isMobileScreen = windowWidth<480

    useEffect(() => {
        if (isWindow) {
            setWindowWidth(getWidth());
      
            window.addEventListener('resize', resize);
       
            return () => window.removeEventListener('resize', resize);
        }
    //eslint-disable-next-line
    }, [isWindow]);

    return {windowWidth,isMobileScreen};
}

export default useScreenWidth;