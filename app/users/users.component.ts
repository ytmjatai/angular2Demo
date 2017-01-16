import { UserEditComponent } from './user-edit.component';
import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.html'
})
export class UsersComponent {

    constructor(
        private modalService: NgbModal
    ) {
    }


    users = [
        { id: 1, name: 'Jatai', email: '565735954@qq.com', phone: '15077107380', des: 'smart' },
        { id: 2, name: 'Li Lei', email: 'em@123.com', phone: '110', des: 'ugly' },
        { id: 3, name: 'Han Meimei', email: 'em2@qq.com', phone: '119', des: 'beautiful' },
        { id: 4, name: 'Jim', email: 'em3@qq.com', phone: '120', des: 'hideous' }
    ]
    edit(user: any) {

        var edit = this.modalService.open(UserEditComponent, {
            size: 'lg'
        });
        edit.componentInstance.user = user;

    }

}