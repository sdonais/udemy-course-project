// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//     selector: '[appDropdown]'
// })
// export class DropdownDirective {
//     @HostBinding('class.open') isOpen = false;

//     @HostListener('click') toggleOpen() {
//         this.isOpen = !this.isOpen;
//     }
// } this is what we did in the video. 
// below, code allowing user to close dropdown by clicking anywhere outside, not just only dropdown menu

import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
 
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}