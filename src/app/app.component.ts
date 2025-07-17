import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      icon: 'po-icon-home',
      link: '/home'
    },
    {
      label: 'Chamados',
      icon: 'po-icon-news',
      link: '/chamados'
    }
  ];
}
