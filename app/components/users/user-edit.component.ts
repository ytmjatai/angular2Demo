import { UsersComponent } from '../users/users.component';
import { UserService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: 'user-edit.component.html',
})
export class UserEditComponent implements OnInit {
    user: User;
    title: string;

    constructor(
        public modal: NgbActiveModal,
        private http: Http,
        private userService: UserService
    ) {

    }

    ngOnInit(): void {
        this.title = 'Edit - ' + this.user.name;
        this.loadData(this.user.id)
    }

    loadData(id: number) {
        this.userService.getUser(id).then(
            res => this.user = res
        )
    }

    save(): void {
        this.userService.update(this.user);
        this.modal.close();
    }


}