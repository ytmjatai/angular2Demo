import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from './user-edit.component';
import { UserService } from './../../services/users.service';
import { User } from './../../models/user';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[];
    constructor(
        private ngbModal: NgbModal,
        private userService: UserService
    ) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.userService.getUsers().then(
            users => this.users = users
        )
    }

    delete(user: User): void {
        this.userService
            .delete(user.id)
            .then(() => {
                this.users = this.users.filter(h => h !== user);
            });
    }


    edit(user: any) {
        // 打开模态框
        let edit = this.ngbModal.open(UserEditComponent, {
            size: 'lg'
        });
        // 传递数据级模态框
        edit.componentInstance.user = user;

    }

}