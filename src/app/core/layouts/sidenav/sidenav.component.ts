import { Component, OnInit } from '@angular/core';

// Own
// Utils
import { closeSideNav } from '@app/common/utils/general';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    closeSideNav();
  }

}
