import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'common-header',
    templateUrl: 'header.html',
})
export class HeaderComponent {
    navs = [
        { id: 1, title: 'Home', url: '/' },
        { id: 2, title: 'Users', url: 'users' },
        { id: 3, title: 'Docs', url: 'docs' }
    ];
}
