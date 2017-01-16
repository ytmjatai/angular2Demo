import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'user-edit',
    templateUrl: 'user-edit.html',
})
export class UserEditComponent {

    constructor(
        public editModal: NgbActiveModal,
    ) {
    }



}