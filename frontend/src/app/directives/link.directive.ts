import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appLink]",
})
export class LinkDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "#3F51B5";
  }
}
