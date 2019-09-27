import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({opacity:1 })),
      state('hide', style({opacity: 0, transform: "translateY(20px)"})),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))

    ]),
    trigger('fade', [
      state('void', style({opacity:0, transform: "translateY(20px)" })),
      transition("void=>*", animate(2000))
    ])
  ]
})
export class HomeComponent implements OnInit {
  state:string = 'hide';
  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])

  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }

  }


  ngOnInit() {
  }

}
