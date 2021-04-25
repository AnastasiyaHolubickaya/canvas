import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import canvasReducer from "./canvasReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";

//импортируем редаксовский редьюсер
// redux  - библиотека,  состоит из store  у которого есть  state и  reducers

let reducers = combineReducers(
    {
        canvas: canvasReducer
    }
);
type RootReduserType = typeof reducers;//типизируем reducers
export type AppStateType = ReturnType<RootReduserType>;//динамически достаем из функции то, что она возвращает - глобальный state

//определяем типы actionCreater-ов с помощью TypeScript
type PropertyTypes<T> = T extends {[key: string]: infer U} ?U : never
export  type InferActionType<T extends {[key: string]:(...args:any[])=>any}> = ReturnType<PropertyTypes<T>>
//тип санок
export type BaseThuncType<AT extends Action, TH=Promise<void> >= ThunkAction<TH,AppStateType, unknown, AT>

//комментарий ниже (@ts-ignore)говорит typescript у игнорировать строку под комментарием
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;//для подключения к проекту расширения REDUX для google chrom
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store;
// у store есть 3 основных метода -
// store.getState(), получить актуальные данные из state
// store.Subckriber(subskriber), подписаться на изменения
// store.dispatch(action) преобразовать state