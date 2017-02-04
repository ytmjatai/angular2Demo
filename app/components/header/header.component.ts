import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'common-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    navs = [
        { id: 1, title: 'Home', url: 'index' },
        { id: 2, title: 'Users', url: 'users' },
        { id: 3, title: 'Docs', url: 'docs' }
    ];
}
