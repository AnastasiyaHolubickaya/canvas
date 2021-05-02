export type CanvasPropsType ={
    width:number
    height:number
}
export  type coordinateType = number

type contextType = CanvasRenderingContext2D | null

export type findStepCollapsLineType = (mass: Array<coordinateType>, num: number) => Array<coordinateType>;
export type lineSegmentIntersectType = (mass: Array<coordinateType>, mass2: Array<coordinateType>) => Array<coordinateType> | boolean
export type drawType = (context:contextType, mass: Array<coordinateType>, mass2: Array<Array<coordinateType>>,massIn:Array<coordinateType>) => Array<coordinateType>
export type drawLineType = (context:contextType, mass: Array<coordinateType>) => void
export type drawDotType = (context:contextType, mass: Array<coordinateType>) => void
export type lineCollapsType = (context:contextType, width:number, height:number, stepLines:Array<Array<coordinateType>>,counter:number,collaps_step:number) => void