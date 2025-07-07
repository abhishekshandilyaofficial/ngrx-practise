import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customIncrement, decrement, increment, reset, toggleCustomInput } from "./counter.action";

//create reducer takes one mandatory argument(In this case its the object initial state) on which the Reducer has to perform, 
// the next argument will be a reducer function which will handle the action.
export const counterReducer = createReducer(
    initialState,//First argument will be initial state
    on(increment, (state) => {//Second argument will be the methods
        return {                //state - will be assigned with current state snapshot of initialState object in the counter.state.ts
            ...state,   //We use spread operator to get the current value of all the properties of current state snapshot
            counter: state.counter + 1 //I want to override a property from that state
        }//After modifying the value of the property of the state we are returning the state as it is to the store.
    }),
    on(decrement, (state) => {//
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }),
    on(toggleCustomInput, (state) => {
        return {
            ...state,
            toggle: !state.toggle
        }
    })
)