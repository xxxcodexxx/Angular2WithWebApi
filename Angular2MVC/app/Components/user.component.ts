import { Component, OnInit, ViewChild, EventEmitter, TemplateRef } from '@angular/core';
import { UserService } from '../Service/user.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Ng2SearchPipe } from 'ng2-search-filter/ng2-search-filter';
import { IUser } from '../Model/user';
import { DBOperation } from '../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../Shared/global';
import { filter } from 'rxjs/operator/filter';
import { debounce } from 'rxjs/operator/debounce';

@Component({
    templateUrl: '/app/Components/user.component.html'
})

export class UserComponent implements OnInit {

    @ViewChild('modal') modal: ModalComponent;
    onPageChange: EventEmitter<any> = new EventEmitter();
    templateRight: TemplateRef<any>;
    templateLeft: TemplateRef<any>;
    users: IUser[];
    user: IUser;
    filterText: string = '';
    genders: [{ title: string }, {title: string}];
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    pageLinks: number[] = [];
    msg: string;
    msgStyle: string;
    indLoading: boolean = false;
    dbops: DBOperation;
    disabled: boolean = false;
    dialogTitle: string;
    dialogBtnTitle: string;
    display: boolean = false;
    paginatorState: any;

    constructor(private fb: FormBuilder, private _userService: UserService) { }

    ngOnInit(): void {
        this.currentPage = 1;
        this.LoadUsers('', 1);
        this.genders = [{ title: "Male" }, { title: "Female" }];
    }


    LoadUsers(filter: string, page: number): void {
        this._userService.get(Global.BASE_USER_ENDPOINT, filter, page)
            .subscribe(res => { this.users = res[0]; this.indLoading = false; this.totalRecords = res[1], this.pageSize = res[2], this.totalPages = this.getCountPage(res[1], res[2]) },
            error => this.msg = <any>error);
        this.pageUpdate();
    }

    filter(event: any) {
        this._userService.get(Global.BASE_USER_ENDPOINT, this.filterText, null)
            .subscribe(res => { this.users = res[0]; this.indLoading = false; this.totalRecords = res[1], this.pageSize = res[2] },
            error => this.msg = <any>error);
        this.pageUpdate();
    }

    pageUpdate() {
        this.paginatorState = {
            totalRecords: this.totalRecords,
            pageCount: this.totalPages
        };
        this.getPageLinks();
    }

    getPageLinks() {
        this.pageLinks = [];
        debugger;
        for (let i = 1; i <= this.getCountPage(this.totalRecords, this.pageSize); i++) {
            this.pageLinks.push(i);
        }
    }

    getCountPage(records: number, size: number): number {
        this.totalPages = Math.ceil(records / size) || 1;
        return this.totalPages;
    }

    isFirstPage() {
        return this.currentPage === 1;
    }
    isLastPage() {
        return this.currentPage === this.totalPages;
    }
    onPageLinkClick(event: any, page: number) {
        this.currentPage = page;
        this.LoadUsers(this.filterText, this.currentPage);
    }
    changePageToFirst(event: any) {
        if (!this.isFirstPage()) {
            this.LoadUsers(this.filterText, 1);
            this.currentPage = 1;
        }
    }
    changePageToLast(event: any) {
        if (!this.isLastPage()) {
            this.LoadUsers(this.filterText, this.totalPages);
            this.currentPage = this.totalPages;
        }
    }
    changePageToPrev(event: any) {
        if (!this.isFirstPage()) {
            this.LoadUsers(this.filterText, this.currentPage - 1);
            this.currentPage -= 1;
        }
    }
    changePageToNext(event: any) {
        if (!this.isLastPage()) {
            this.LoadUsers(this.filterText, this.currentPage + 1);
            this.currentPage += 1;
        }
    }
    onNewUser() {
        this.disabled = false;
        this.dialogTitle = "Add new user";
        this.dialogBtnTitle = "Add";
        this.user = { Id: null, FirstName: null, LastName: null, Gender: null };
        this.dbops = DBOperation.create;
        this.display = true;
    }
    onDelete(id: number) {
        this.disabled = true;
        this.user = this.users.filter(x => x.Id == id)[0];
        this.dialogTitle = "Delete user " + this.user.FirstName + " " + this.user.LastName;
        this.dialogBtnTitle = "Delete";
        this.dbops = DBOperation.delete;
        this.display = true;
    }
    onEdit(id: number) {
        this.disabled = false;
        this.dbops = DBOperation.update;
        this.user = this.users.filter(x => x.Id == id)[0];
        this.dialogTitle = "Infomation " + this.user.FirstName + this.user.LastName;
        this.dialogBtnTitle = "Update";
        this.display = true;
    }
    onCancel() {
        this.display = false;
    }
    onSave() {
        this.msg = "";
        this.msgStyle = "";
        let user = this.user;
        switch (this.dbops) {
            case DBOperation.create:
                this._userService.post(Global.BASE_USER_ENDPOINT, user).subscribe(
                    data => {
                        if (data[0] == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.msgStyle = "success";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadUsers(this.filterText, this.currentPage);
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.msgStyle = "info";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadUsers(this.filterText, this.currentPage);
                        }
                        this.display = false;
                    },
                    error => {
                        this.msg = error;
                        this.msgStyle = "error";
                        setTimeout(() => {
                            this.msg = null;
                        }, 2000);
                    }
                );
                break;
            case DBOperation.update:
                this._userService.put(Global.BASE_USER_ENDPOINT, user.Id, user).subscribe(
                    data => {
                        if (data[0] == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.msgStyle = "success";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                            this.LoadUsers(this.filterText, this.currentPage);
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.msgStyle = "info";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                        }
                        this.display = false;
                    },
                    error => {
                        this.msg = error;
                        this.msgStyle = "error";
                        setTimeout(() => {
                            this.msg = null;
                        }, 2000);
                    }
                );
                break;
            case DBOperation.delete:
                this._userService.delete(Global.BASE_USER_ENDPOINT, user.Id).subscribe(
                    data => {
                        if (data[0] == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.msgStyle = "success";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000)
                            this.LoadUsers(this.filterText, this.currentPage);
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!";
                            this.msgStyle = "info";
                            setTimeout(() => {
                                this.msg = null;
                            }, 2000);
                        }
                        this.display = false;
                    },
                    error => {
                        this.msg = error;
                        this.msgStyle = "error";
                        setTimeout(() => {
                            this.msg = null;
                        }, 2000);
                    }
                );
                break;

        }
    }
    
}