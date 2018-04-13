"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../Service/user.service");
var forms_1 = require("@angular/forms");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../Shared/enum");
var global_1 = require("../Shared/global");
var UserComponent = /** @class */ (function () {
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.onPageChange = new core_1.EventEmitter();
        this.filterText = '';
        this.pageLinks = [];
        this.indLoading = false;
        this.disabled = false;
        this.display = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.currentPage = 1;
        this.LoadUsers('', 1);
        this.genders = [{ title: "Male" }, { title: "Female" }];
    };
    UserComponent.prototype.LoadUsers = function (filter, page) {
        var _this = this;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT, filter, page)
            .subscribe(function (res) { _this.users = res[0]; _this.indLoading = false; _this.totalRecords = res[1], _this.pageSize = res[2], _this.totalPages = _this.getCountPage(res[1], res[2]); }, function (error) { return _this.msg = error; });
        this.pageUpdate();
    };
    UserComponent.prototype.filter = function (event) {
        var _this = this;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT, this.filterText, null)
            .subscribe(function (res) { _this.users = res[0]; _this.indLoading = false; _this.totalRecords = res[1], _this.pageSize = res[2]; }, function (error) { return _this.msg = error; });
        this.pageUpdate();
    };
    UserComponent.prototype.pageUpdate = function () {
        this.paginatorState = {
            totalRecords: this.totalRecords,
            pageCount: this.totalPages
        };
        this.getPageLinks();
    };
    UserComponent.prototype.getPageLinks = function () {
        this.pageLinks = [];
        debugger;
        for (var i = 1; i <= this.getCountPage(this.totalRecords, this.pageSize); i++) {
            this.pageLinks.push(i);
        }
    };
    UserComponent.prototype.getCountPage = function (records, size) {
        this.totalPages = Math.ceil(records / size) || 1;
        return this.totalPages;
    };
    UserComponent.prototype.isFirstPage = function () {
        return this.currentPage === 1;
    };
    UserComponent.prototype.isLastPage = function () {
        return this.currentPage === this.totalPages;
    };
    UserComponent.prototype.onPageLinkClick = function (event, page) {
        this.currentPage = page;
        this.LoadUsers(this.filterText, this.currentPage);
    };
    UserComponent.prototype.changePageToFirst = function (event) {
        if (!this.isFirstPage()) {
            this.LoadUsers(this.filterText, 1);
            this.currentPage = 1;
        }
    };
    UserComponent.prototype.changePageToLast = function (event) {
        if (!this.isLastPage()) {
            this.LoadUsers(this.filterText, this.totalPages);
            this.currentPage = this.totalPages;
        }
    };
    UserComponent.prototype.changePageToPrev = function (event) {
        if (!this.isFirstPage()) {
            this.LoadUsers(this.filterText, this.currentPage - 1);
            this.currentPage -= 1;
        }
    };
    UserComponent.prototype.changePageToNext = function (event) {
        if (!this.isLastPage()) {
            this.LoadUsers(this.filterText, this.currentPage + 1);
            this.currentPage += 1;
        }
    };
    UserComponent.prototype.onNewUser = function () {
        this.disabled = false;
        this.dialogTitle = "Add new user";
        this.dialogBtnTitle = "Add";
        this.user = { Id: null, FirstName: null, LastName: null, Gender: null };
        this.dbops = enum_1.DBOperation.create;
        this.display = true;
    };
    UserComponent.prototype.onDelete = function (id) {
        this.disabled = true;
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.dialogTitle = "Delete user " + this.user.FirstName + " " + this.user.LastName;
        this.dialogBtnTitle = "Delete";
        this.dbops = enum_1.DBOperation.delete;
        this.display = true;
    };
    UserComponent.prototype.onEdit = function (id) {
        this.disabled = false;
        this.dbops = enum_1.DBOperation.update;
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.dialogTitle = "Infomation " + this.user.FirstName + this.user.LastName;
        this.dialogBtnTitle = "Update";
        this.display = true;
    };
    UserComponent.prototype.onCancel = function () {
        this.display = false;
    };
    UserComponent.prototype.onSave = function () {
        var _this = this;
        this.msg = "";
        this.msgStyle = "";
        var user = this.user;
        switch (this.dbops) {
            case enum_1.DBOperation.create:
                this._userService.post(global_1.Global.BASE_USER_ENDPOINT, user).subscribe(function (data) {
                    if (data[0] == 1) {
                        _this.msg = "Data successfully added.";
                        _this.msgStyle = "success";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadUsers(_this.filterText, _this.currentPage);
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.msgStyle = "info";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadUsers(_this.filterText, _this.currentPage);
                    }
                    _this.display = false;
                }, function (error) {
                    _this.msg = error;
                    _this.msgStyle = "error";
                    setTimeout(function () {
                        _this.msg = null;
                    }, 2000);
                });
                break;
            case enum_1.DBOperation.update:
                this._userService.put(global_1.Global.BASE_USER_ENDPOINT, user.Id, user).subscribe(function (data) {
                    if (data[0] == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.msgStyle = "success";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadUsers(_this.filterText, _this.currentPage);
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.msgStyle = "info";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                    }
                    _this.display = false;
                }, function (error) {
                    _this.msg = error;
                    _this.msgStyle = "error";
                    setTimeout(function () {
                        _this.msg = null;
                    }, 2000);
                });
                break;
            case enum_1.DBOperation.delete:
                this._userService.delete(global_1.Global.BASE_USER_ENDPOINT, user.Id).subscribe(function (data) {
                    if (data[0] == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.msgStyle = "success";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                        _this.LoadUsers(_this.filterText, _this.currentPage);
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                        _this.msgStyle = "info";
                        setTimeout(function () {
                            _this.msg = null;
                        }, 2000);
                    }
                    _this.display = false;
                }, function (error) {
                    _this.msg = error;
                    _this.msgStyle = "error";
                    setTimeout(function () {
                        _this.msg = null;
                    }, 2000);
                });
                break;
        }
    };
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], UserComponent.prototype, "modal", void 0);
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/Components/user.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map