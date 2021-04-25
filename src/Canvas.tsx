import React, {useCallback, useEffect, useRef} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../redux/canvasReducer";
import {getContextReselect} from "../redux/selectors";
import {CanvasPropsType} from "../redux/types/types";


const Styledcanvas = styled.canvas`
   margin: 0 auto;
   border: 2px solid red;
`;


//находим точку пересечения линий
const lineSegmentsIntersect =(currentCrdnt:Array<number>, prevCrdnt:Array<number>) =>{
    let [x1, y1, x2, y2] = currentCrdnt;
    let [x3, y3, x4, y4] = prevCrdnt;
    let a_dx = x2 - x1;
    let a_dy = y2 - y1;
    let b_dx = x4 - x3;
    let b_dy = y4 - y3;
    let s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
    let t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
    return (s >= 0 && s <= 1 && t >= 0 && t <= 1) ? [x1 + t * a_dx, y1 + t * a_dy] : false;
};
//находим центр линии


export const Canvas:React.FC<CanvasPropsType> = ({width, height}) =>{

    const dispatch = useDispatch();
    const context = useSelector(getContextReselect);
    const ref:any = useRef(null);

    let currentCoordin:Array<number> = [];// массив координат текущей линии
    let lines:Array<Array<number> >=[];// массив  координат всех нарисованных линий
    let massIntersect:any = [];// массив точек пересечения линий
    let t:any=[];
    let j=0;
    let colaps_time_step = 101;

    const getContext = useCallback( () =>{
        const canvas:HTMLCanvasElement = ref.current;
        dispatch(actions.setCanvasState(true));
        dispatch(actions.setCanvasSize([width,height]));
        let context  = canvas.getContext('2d');
        dispatch(actions.setContext(context));
    },[]);

    useEffect(()=>{
       getContext();
    },[getContext]);// пустая зависимость означает сделать что-то когда компонента вмонтировалась ( componentDidMount())

    const find = (massXY:Array<number>) =>{
        let mass =[];
        let xC = (massXY[2]-massXY[0])/2/colaps_time_step;
        mass.push(xC);
        let yC = (massXY[3]-massXY[1])/2/colaps_time_step;
        mass.push(yC);
        return massXY.concat(mass);
    };
    //рисуем красную точку на пересечении
    const drawDot =(cntx:CanvasRenderingContext2D|null,mass:Array<number>,masslines:Array<Array<number>>) =>{
        for ( let i=0; i<masslines.length; i++) {
            let  c = lineSegmentsIntersect(mass, masslines[i]);
            if (!!c && cntx !== null) {
                 massIntersect.push(c);
                 cntx.moveTo(c[0], c[1]);
                 cntx.arc(c[0], c[1], 3, 0, Math.PI * 2, true);//arc(90,65,5,0,Math.PI*2,true)
                 cntx.fillStyle = 'red';
                 cntx.fill();
            }
        }
        currentCoordin=[];
    };
    //рисуем линии
    const drawLine = (ctx:CanvasRenderingContext2D|null, mass:Array<number>) =>{
    if(ctx!==null) {
        ctx.beginPath();
        ctx.moveTo(mass[0], mass[1]);
        ctx.lineTo(mass[2], mass[3]);
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
};
    const clearMemory=()=>{
        currentCoordin=[];
        lines=[];
        massIntersect=[];

    };
    const animate =(ctx:CanvasRenderingContext2D|null) => {
        if(ctx!==null)
            ctx.clearRect(0,0, width,height);
            for (let i = 0; i <= t.length - 1; i++) {
                ww(ctx, t[i]);
            }
            if (j < colaps_time_step - 1) {
                setTimeout(animate, 30,ctx);
                j++;
            }else {
                j=0;
                t=[];
            }

    };
    const ww =(ctx:any, t:any) =>{
       // ctx.clearRect(0,0, width,height);
        ctx.beginPath();
        ctx.moveTo(t[0]+t[4], t[1]+t[5]);
        ctx.lineTo(t[2]-t[4], t[3]-t[5]);
        ctx.stroke();
        t[0]+=t[4];
        t[2]-=t[4];
        t[1]+=t[5];
        t[3]-=t[5];
    };


    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) =>{
        /*if(draw){
           x = event.pageX;
           y = event.pageY;
           let c=getContext();
           if(c !== null){
               c.lineTo(x , y);
               c.stroke();
           }
       }

  /*
       event.preventDefault();

        if(ctx !== null){
           * ctx.clearRect(0,0,600,500);

             }
            /*let str = 'X : ' + x + ', ' + 'Y : ' + y;
            if(ctx !== null){
                ctx.fillRect(0, 0, width, height);
                ctx.fillStyle = '#ddd';
                ctx.fillRect(x + 10, y + 10, 80, 25);
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 20px verdana';
                ctx.fillText(str, x + 20, y + 30, 60);

            }*/

    };
    const handleonClick = (event:React.MouseEvent<HTMLCanvasElement>) => {
                let firstX = event.pageX;
                let firstY = event.pageY;
                currentCoordin.push(firstX, firstY);
    };
    const handleRightClick = (event:React.MouseEvent<HTMLCanvasElement>) => {
        event.preventDefault();
        getContext();
            let secondX = event.pageX;
            let secondY = event.pageY;
            currentCoordin.push(secondX, secondY);
        //console.log( currentCoordin);
            lines.push([currentCoordin[0], currentCoordin[1], currentCoordin[2], currentCoordin[3]]);
             let m = find(currentCoordin);
             t.push(m);
        //console.log(currentCoordin);
            drawLine(context,currentCoordin);
            drawDot(context,currentCoordin,lines);
            //setDraw(false);

        //console.log(currentCoordin);
    };
    const handleButtonClick =(event:React.MouseEvent) =>{
        clearMemory();
        getContext();
        animate(context);
    };
    return <>
    <Styledcanvas onContextMenu={event => handleRightClick(event)}  onClick={event => handleonClick(event)} onMouseMove={event => handleMouseMove(event)} ref={ref} />
    <button onClick={event => handleButtonClick(event)}> tttt</button>

    </>

};
