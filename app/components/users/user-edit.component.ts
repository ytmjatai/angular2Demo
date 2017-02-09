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
        public ngbActiveModal: NgbActiveModal,
        private http: Http,
        private userService: UserService,
        
    ) {

    }

    ngOnInit(): void {
        // 初始化组件，this.user为UserComponent传进来的user
        this.title = 'Edit - ' + this.user.name;
        // 调用加载数据方法
        this.loadData(this.user.id);
    }

    loadData(id: number) {
        // 根据传入id 加载数据
        this.userService.getUser(id).then(
            res => this.user = res
        )
    }

    save(): void {
        // 更新后台数据
        this.userService.update(this.user);
        // 关闭模态框
        this.ngbActiveModal.close();
    }


}