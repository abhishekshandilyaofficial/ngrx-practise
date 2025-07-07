import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

//This line is going to return us a feature selector from the state(counter), from this feature selector,
//we want to create individual selector for counter and toggle
const getCounterState = createFeatureSelector<CounterState>('counter');

//creating selectors with the help of feature selector 
export const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
})
export const getToggle = createSelector(getCounterState, (state) => {
    return state.toggle;
})