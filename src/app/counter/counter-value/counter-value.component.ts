import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';
import { getCounter } from '../states/counter.selector';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent {
  //Whenever there is change in the state the store emits an observable, 
  //  to subscrive to the obserbable we need an instance of that store.
  constructor(
    // constructor(private store: Store<{Counter: {counter: number}}>){}
    private Store: Store<{ counter: CounterState }>
  ) { }
  counter$: Observable<number>| null = null;
  // counterSubscription: Subscription | null = null;

  //we are subscribing to the store and when the value changes we get the updated value.
  // ngOnInit(){
  //  this.counterSubscription = this.Store.select('counter').subscribe((data) => {
  //   console.log("counter value - Toggle observable called")
  //     this.counter = data.counter;
  //   })
  // }
  // ngOnInit() {
  //   this.counterSubscription = this.Store.select(getCounter).subscribe((count) => {
  //     console.log("counter value - Toggle observable called")
  //     this.counter$ = count;
  //   })
  // }

  ngOnInit() {
    this.counter$ = this.Store.select(getCounter);
  }

  // ngOnDestroy(): void {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
