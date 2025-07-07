import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../states/counter.state';
import { customIncrement, toggleCustomInput } from '../states/counter.action';
import { getToggle } from '../states/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {
  constructor(private store: Store<{counter: CounterState}>){}
  customValue:number = 0;
  // showCustomInput$: boolean = false;
  showCustomInput$: Observable<boolean> | null = null;

  // ngOnInit() {
  //   this.store.select(getToggle).subscribe((flag) => {
  //     console.log("custom input Toggle observable called")
  //     this.showCustomInput$ = flag;
  //   })
  // }
  ngOnInit() {
    this.showCustomInput$ = this.store.select(getToggle);
  }
  onCustomValueButtonClicked(){
    this.store.dispatch(customIncrement({value: +this.customValue}))
  }
  onToggleClick() {
    this.store.dispatch(toggleCustomInput())
  }
}
