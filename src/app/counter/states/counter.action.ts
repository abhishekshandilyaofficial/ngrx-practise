import { createAction, props } from "@ngrx/store";

//Job of reducer is to wait for an action to be dispatched and based on which action has been dispatched, it is going to create a new state

//These are the three action
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customIncrement = createAction('customIncrement', props<{value: number}>());
export const toggleCustomInput = createAction('toggleCustomInput');
