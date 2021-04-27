import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../redux/canvasReducer";
import {getContextReselect, getStepReselect} from "../redux/selectors";
import {CanvasPropsType} from "../redux/types/types";
import {draw, drawDot, drawLine, findStepCollapsLine} from "../util/drawLines";


const Styledcanvas = styled.canvas`
   margin: 0 auto;
   border: 2px solid red;
`;


export const Canvas: React.FC<CanvasPropsType> = ({width, height}) => {
    //let [isPaint, setIsPaint] = useState(false);
    let paint = false;
    const dispatch = useDispatch();
    const ref = useRef<HTMLCanvasElement>(null);
    const context = useSelector(getContextReselect);
    const collaps_step = useSelector(getStepReselect);
    let counter = 0;
    let coordinateCurrentLine: Array<number> = [];// массив координат текущей линии
    let coordinatePaintingLines: Array<Array<number>> = [];// массив  координат всех нарисованных линий
    let coordinateLinesWithStepCollaps: Array<Array<number>> = [];
    let coordinatePointIntersection: Array<number> = [];// массив точек пересечения линий


    useEffect(() => {
        if (!ref.current) {
            return;
        }
        const canvas = ref.current;
        dispatch(actions.setContext(canvas.getContext('2d')));
        //getContext();
    }, [dispatch]);// пустая зависимость означает сделать что-то когда компонента вмонтировалась ( componentDidMount())

    //очистка массивов
    const clear = () => {
        coordinateCurrentLine = [];
        coordinatePaintingLines = [];
        coordinatePointIntersection = []
    };

    //воспроизведение  анимации линий
    const drawLineCollaps = () => {
        try {
            if (context !== null)
                context.clearRect(0, 0, width, height);
            for (let i = 0; i <= coordinateLinesWithStepCollaps.length - 1; i++) {
                paintingCollapsLine(context, coordinateLinesWithStepCollaps[i]);
            }
            if (counter < collaps_step - 1) {
                requestAnimationFrame(drawLineCollaps);
                counter++;
            } else {
                counter = 0;
                coordinateLinesWithStepCollaps = [];
            }
        } catch (e) {
            console.log(`'lineCollaps' ${e}`);
        }
    };
    const paintingCollapsLine = (ctx: any, t: any) => {
        ctx.beginPath();
        ctx.moveTo(t[0] + t[4], t[1] + t[5]);
        ctx.lineTo(t[2] - t[4], t[3] - t[5]);
        ctx.stroke();
        t[0] += t[4];
        t[2] -= t[4];
        t[1] += t[5];
        t[3] -= t[5];
    };

    //захват координат мыши
    const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement>) => {
        let x = event.pageX;
        let y = event.pageY;
        return [x, y]
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (paint) {
            let [x,y] = getCoordinates(event);
            if (context !== null) {
                context.clearRect(0, 0, width, height);
                if (coordinatePaintingLines.length < 1) {
                    coordinateCurrentLine[2] = x;
                    coordinateCurrentLine[3] = y;
                    drawLine(context, coordinateCurrentLine);
                } else {
                    coordinatePaintingLines.map(e => drawLine(context, e));
                    coordinateCurrentLine[2] = x;
                    coordinateCurrentLine[3] = y;
                    drawLine(context, coordinateCurrentLine);
                }
                    drawDot(context,coordinatePointIntersection);
            }
        }
    };
    const handleonClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        let [x1,y1] = getCoordinates(event);
        coordinateCurrentLine[0] = x1;
        coordinateCurrentLine[1] = y1;
        paint = true;
    };
    const handleRightClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        event.preventDefault();
        paint = false;
        let [x2,y2] = getCoordinates(event);
        coordinateCurrentLine[2] = x2;
        coordinateCurrentLine[3] = y2;
        coordinatePaintingLines.push(coordinateCurrentLine);
        coordinateLinesWithStepCollaps.push(findStepCollapsLine(coordinateCurrentLine, collaps_step));
        drawLine(context, coordinateCurrentLine);
        draw(context, coordinateCurrentLine, coordinatePaintingLines, coordinatePointIntersection);
        drawDot(context,coordinatePointIntersection);
        coordinateCurrentLine = [];
    };
    const handleButtonClick = (event: React.MouseEvent) => {
        drawLineCollaps();
        clear();
    };


    return <>
        <Styledcanvas onContextMenu={event => handleRightClick(event)} onClick={event => handleonClick(event)}
                      onMouseMove={event => handleMouseMove(event)} ref={ref}/>
        <button onClick={event => handleButtonClick(event)}> Collaps Line</button>
    </>

};
