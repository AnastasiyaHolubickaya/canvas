import { BaseThuncType, InferActionType} from "./store";


let initialState = {
    canvasState: false,
    canvasSize:[0,0],
    context: null as CanvasRenderingContext2D|null
};
export type initialStateType  = typeof initialState;

type ActionsType= InferActionType<typeof  actions>;
type thuncType = BaseThuncType<ActionsType>

const canvasReducer =  (state = initialState, action:ActionsType):initialStateType => {
    switch (action.type) {
        case  "SET_CANVAS_STATE":
            return {
                ...state,
                canvasState: action.stateCanvas
            };
        case  "SET_CANVAS_SIZE":
            return {
                ...state,
                canvasSize: action.size
            };
        case  "SET_CONTEXT":
            return {
                ...state,
                context: action.context
            };
        default:
            return state;
    }
};

export const actions={
    setCanvasState:(stateCanvas:boolean)=> ({type: "SET_CANVAS_STATE",stateCanvas }as const),
    setCanvasSize:(size:Array<number>)=>({type: 'SET_CANVAS_SIZE', size}as const),
    setContext: (context:CanvasRenderingContext2D|null)=> ({type:'SET_CONTEXT', context} as const)
};
//thunk
export  const  InitializationThunkCreator = ():thuncType=> async (dispatch) => {

};

export default canvasReducer;