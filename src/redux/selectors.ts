import {createSelector} from "reselect";
import {AppStateType} from "./store";

 const getContext = (state:AppStateType) => {
    return state.canvas.context
};
const getSizeCanvas = (state:AppStateType) => {
    return state.canvas.canvasSize
};


export const getContextReselect = createSelector(getContext,(context) =>{//
    return context;
});
export const getCanvasSizeReselect = createSelector(getSizeCanvas,(canvasSize) =>{//
    return canvasSize;
});