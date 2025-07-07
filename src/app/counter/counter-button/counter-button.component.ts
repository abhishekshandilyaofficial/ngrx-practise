import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter.action';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  //we are importing the store as we need to use the counter here
  //Store has a property counter, this counter is nothing but the state object which is storing the current state of the counter,
  //therefore inside the object we are asking for counter which is of number type.
  // constructor(private store: Store<{Counter: {counter: number}}>){}
  constructor(private store: Store<{Counter: CounterState}>){} 

  // When a user clicks on the increment button then dispatch method
  //  of the store runs and runs the increment method which is an action. 
  onIncrement() {
    this.store.dispatch(increment())//In other words when the increment button is clicked, I want to dispatch increment action.
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
