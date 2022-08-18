import { Component } from '@angular/core';

// Own
// Utils
import { closeModal } from '@app/common/utils/modal';
import { closeCart, closeSideNav } from './common/utils/general';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navTitle = '';
  title = 'finsotienda-webapp';

  constructor() {
    window.onclick = (event: any) => {
      if (event.target.classList.contains('modal')) {
          closeModal(event.target);
      } else if (event.target.classList.contains('sidemenu-back')) {
        closeSideNav();
        closeCart();
      } else {}
    }
  }
}
