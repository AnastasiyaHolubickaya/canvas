
import {
    drawType,
    drawLineType,
    findStepCollapsLineType,
    lineSegmentIntersectType,
    drawDotType, coordinateType
} from "../redux/types/types";

//определяем шаг сворачивании для каждой линии
export const findStepCollapsLine: findStepCollapsLineType = (massXY, collaps_step) => {
    let mass = [];
    let xC = (massXY[2] - massXY[0]) / 2 / collaps_step;
    mass.push(xC);
    let yC = (massXY[3] - massXY[1]) / 2 / collaps_step;
    mass.push(yC);
    return massXY.concat(mass);
};

//определяем точку пересечения  линий
const lineSegmentIntersect: lineSegmentIntersectType = (currentCrdnt, prevCrdnt) => {
    let [x1, y1, x2, y2] = currentCrdnt;
    let [x3, y3, x4, y4] = prevCrdnt;
    let a_dx = x2 - x1;
    let a_dy = y2 - y1;
    let b_dx = x4 - x3;
    let b_dy = y4 - y3;
    let s = (-a_dy * (x1 - x3) + a_dx * (y1 - y3)) / (-b_dx * a_dy + a_dx * b_dy);
    let t = (+b_dx * (y1 - y3) - b_dy * (x1 - x3)) / (-b_dx * a_dy + a_dx * b_dy);
    let x = x1 + t * a_dx;
    let y = y1 + t * a_dy;
    return (s >= 0 && s <= 1 && t >= 0 && t <= 1) ? [x, y] : false;
};

//рисуем точки
export const drawDot:drawDotType = (context, mass) => {
    if (context !== null) {
        mass.forEach(e =>  {
            // @ts-ignore
            context.moveTo(e[0], e[1]);
            // @ts-ignore
            context.arc(e[0], e[1], 3, 0, Math.PI * 2, true);//arc(90,65,5,0,Math.PI*2,true)
            context.fillStyle = 'red';
            context.fill();
        }
    )
    }
};
//заполняет массив  точки на пересечении
export const draw:drawType = (context, currentMass, masslines, pointIntersect) => {
    try {
        let mass:Array<coordinateType>|boolean = [];
        for (let i = 0; i < masslines.length; i++) {
            mass = lineSegmentIntersect(currentMass, masslines[i]);
            if(mass!==false){
                // @ts-ignore
                pointIntersect.push(mass);
            }
        }
    }catch (e) {
        console.log(`'draw' ${e}`);
    }
    return pointIntersect;
};
//рисуем линии
export const drawLine: drawLineType = (context, mass) => {
    if (context !== null) {
        context.beginPath();
        context.moveTo(mass[0], mass[1]);
        context.lineTo(mass[2], mass[3]);
        context.strokeStyle = 'black';
        context.stroke();
    }
};