import { useState, useEffect } from 'react';
import {CLOCK_SIZE} from '../components/const';

const useResize = () => {
    const [size, setSize] = useState(CLOCK_SIZE);
    useEffect(() => {
        const handleResize = () => {
            setSize(Math.min(window.innerWidth, window.innerHeight) * 0.7);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        size,
    };
};

export default useResize;