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
        private modalService: NgbModal,
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
        
        let edit = this.modalService.open(UserEditComponent, {
            size: 'lg'
        });
        edit.componentInstance.user = user;

    }

}