import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[temp]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}