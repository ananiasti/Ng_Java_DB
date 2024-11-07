import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective  {

  constructor(private containterRef: ViewContainerRef, 
              private templateRef: TemplateRef<any>) {

   }
 
}
