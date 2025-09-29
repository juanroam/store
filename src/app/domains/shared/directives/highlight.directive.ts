import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  private element = inject(ElementRef);

  constructor() { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "red";
  }

}
