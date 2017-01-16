import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: 'user-edit.component.html',
})
export class UserEditComponent {
    user:any;
    constructor(
        public modal: NgbActiveModal
    ) {
    }
    save(){

        console.log(this.user);
    }



}