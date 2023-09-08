import React, {useRef, useEffect} from 'react';
import {getNumberParams} from '../../../utils/elementsSizeGenerator';
import './ClockFace.css';

export interface ClockFaceProps {
    clockSize: number;
}

const HOUR_COLOR = 'blue';
const MINUTE_COLOR = 'grey';
const HOUR_NUMBER_COLOR = 'red';

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
                let fillColor;
                for (let tm = 0; tm < 60; tm++) {
                    ctx.beginPath();
                    if (tm % 5 === 0) {
                        radiusPoint = 5;
                        fillColor = HOUR_COLOR;
                    } else {
                        radiusPoint = 2;
                        fillColor = MINUTE_COLOR;
                    }
                    const xPointM = xCenterClock + radiusNum * Math.cos(-6 * tm * (Math.PI / 180) + Math.PI / 2);
                    const yPointM = yCenterClock - radiusNum * Math.sin(-6 * tm * (Math.PI / 180) + Math.PI / 2);
                    ctx.arc(xPointM, yPointM, radiusPoint, 0, 2 * Math.PI, true);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.fillStyle = fillColor;
                    ctx.fill();
                }

                let params = getNumberParams(clockSize);
                for (let th = 1; th <= 12; th++) {
                    ctx.fillStyle = HOUR_NUMBER_COLOR;
                    ctx.beginPath();
                    ctx.font = params.font;
                    const xText = xCenterClock + (radiusNum - params.fontSize) * Math.cos(-30 * th * (Math.PI / 180) + Math.PI / 2);
                    const yText = yCenterClock - (radiusNum - params.fontSize) * Math.sin(-30 * th * (Math.PI / 180) + Math.PI / 2);
                    if (th <= 9) {
                        ctx.fillText(String(th), xText - params.xTextPos, yText + params.yTextPos);
                    } else {
                        ctx.fillText(String(th), xText - params.xTextPos0, yText + params.yTextPos);
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