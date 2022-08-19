import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Own
// Utils
import { closeCart, closeSideNav, openCart, openSideNav } from '@app/common/utils/general';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  static readonly openSideNav = openSideNav;
  static readonly openCart = openCart;

  @ViewChild('fixedNavbar')
  fixedNavbar: ElementRef | undefined;
  title = 'Ventas';
  constructor() { }

  ngOnInit(): void {
  }

  openSideNav(): void {
    closeCart();
    openSideNav();
  }

  openCart(): void {
    closeSideNav();
    openCart();
  }

  ngAfterViewInit(): void {
    new ResizeObserver(() => {
      const routeContentWrapper: HTMLElement | null = document.querySelector('.route-content-wrapper');
      if (routeContentWrapper && this.fixedNavbar) {
        routeContentWrapper.style.paddingTop = `${this.fixedNavbar?.nativeElement.offsetHeight}px`;
      } else {}
    }).observe(this.fixedNavbar?.nativeElement);
  }
}
