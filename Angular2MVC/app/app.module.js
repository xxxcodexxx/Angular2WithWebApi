"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var user_component_1 = require("./components/user.component");
var home_component_1 = require("./components/home.component");
var app_menu_component_1 = require("./menu/app.menu.component");
var app_topbar_component_1 = require("./Topbar/app.topbar.component");
var app_footer_component_1 = require("./app.footer.component");
var user_service_1 = require("./Service/user.service");
var primeng_1 = require("primeng/primeng");
var table_1 = require("primeng/table");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng2_bs3_modal_1.Ng2Bs3ModalModule,
                primeng_1.InputTextModule,
                primeng_1.ButtonModule,
                primeng_1.PaginatorModule,
                table_1.TableModule,
                primeng_1.ScrollPanelModule,
                primeng_1.DialogModule,
                primeng_1.MessageModule,
                primeng_1.DropdownModule
            ],
            declarations: [app_component_1.AppComponent, app_menu_component_1.MenuComponent, app_topbar_component_1.TopbarComponent, app_footer_component_1.FooterComponent, user_component_1.UserComponent, home_component_1.HomeComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map