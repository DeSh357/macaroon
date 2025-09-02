import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btn-background]'
})
export class BackgroundBtnDirective implements OnInit {
  @Input() backgroundBtnDefaultBgColor: string = 'white';
  @Input() backgroundBtnFocusBgColor: string = 'orange';

  constructor(private el: ElementRef, private rend: Renderer2) {}

  ngOnInit() {
    this.changeElementBgColor(this.backgroundBtnDefaultBgColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.changeElementBgColor(this.backgroundBtnFocusBgColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.changeElementBgColor(this.backgroundBtnDefaultBgColor);
  }

  private changeElementBgColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', color);
  }
}
