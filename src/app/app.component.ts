import { Component } from '@angular/core';

// Own
// Utils
import { closeModal } from '@app/common/utils/modal';

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
      }
    }
  }
}
