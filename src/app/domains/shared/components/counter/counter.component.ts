import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;
  
  constructor() {
    // no async
    // before render
    // it runs only once
    console.log('constructor');
    console.log('-'.repeat(10)); 
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // after render
    // it runs only once
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10)); 
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(prevState => prevState + 1)
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // after ngOnInit
    // it's invoked only once
    // it's called after Angular has fully initialized a component's view
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10)); 
    
  }

  ngOnDestroy() {
    // invoked immediately before a directive, pipe, or service instance is destroyed
    // used to prevent memory leaks
    console.log('ngOnDestroy');
    console.log('-'.repeat(10)); 
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('duration changed!');
    // async, sync
  }
}
