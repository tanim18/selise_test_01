import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AuthorApp';
  items: MenuItem[];
  ngOnInit() {
    this.items = [      
        {
           label:'Author',
           icon:'pi pi-fw pi-file',
           routerLink: '/list-item'
        }
    ];
}
}
