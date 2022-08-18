import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('fixedNavbar')
  fixedNavbar: ElementRef | undefined;
  title = 'Ventas';
  constructor() { }

  ngOnInit(): void {
    console.log(this.fixedNavbar)
  }

  ngAfterViewInit(): void {
    new ResizeObserver(() => {
      const routeContentWrapper: HTMLElement | null = document.querySelector('.route-content-wrapper');
      if (routeContentWrapper && this.fixedNavbar) {
        routeContentWrapper.style.height = `${this.fixedNavbar?.nativeElement.offsetHeight}px`;
      } else {}
    }).observe(this.fixedNavbar?.nativeElement);
  }
}
