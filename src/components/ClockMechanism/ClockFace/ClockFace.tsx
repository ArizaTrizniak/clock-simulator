import React, {useRef, useEffect} from 'react';
import './ClockFace.css';

export interface ClockFaceProps {
    clockSize: number;
}
const ClockFace: React.FC<ClockFaceProps> = ({clockSize}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
    const clockRadius= clockSize / 2;

    useEffect(() => {
        if (canvasRef.current) {
            canvasCtxRef.current = canvasRef.current.getContext('2d');
            let ctx = canvasCtxRef.current;
            if (ctx) {
                const xCenterClock = clockRadius;
                const yCenterClock = clockRadius;
                const radiusNum = clockRadius - 10;

                let radiusPoint;
                for (let tm = 0; tm < 60; tm++) {
                    ctx.beginPath();
                    if (tm % 5 === 0) {
                        radiusPoint = 5;
                    } else {
                        radiusPoint = 2;
                    }
                    const xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
                    const yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
                    ctx.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
                    ctx.stroke();
                    ctx.closePath();
                }

                for (let th = 1; th <= 12; th++) {
                    ctx.beginPath();
                    ctx.font = 'bold 25px sans-serif';
                    const xText = xCenterClock + (radiusNum - 30) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
                    const yText = yCenterClock - (radiusNum - 30) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
                    if (th <= 9) {
                        ctx.strokeText(String(th), xText - 5, yText + 10);
                    } else {
                        ctx.strokeText(String(th), xText - 15, yText + 10);
                    }
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    }, [clockSize, clockRadius]);

    return <canvas
        className="canvas"
        height={clockSize}
        width={clockSize}
        ref={canvasRef}/>
}

export default ClockFace;