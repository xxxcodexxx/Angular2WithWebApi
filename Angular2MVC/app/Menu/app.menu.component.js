"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
            {
                label: 'Menu Modes', icon: 'settings',
                items: [
                    { label: 'Static Menu', icon: 'view_quilt' },
                    { label: 'Overlay Menu', icon: 'flip_to-front' },
                    { label: 'Light Menu', icon: 'label' },
                    { label: 'Dark Menu', icon: 'label_outline' }
                ]
            },
            {
                label: 'Layout Palette', icon: 'palette',
                items: [
                    {
                        label: 'Flat', icon: 'format_paint',
                        items: [
                            { label: 'Blue Grey - Green', icon: 'brush' },
                            { label: 'Indigo - Pink', icon: 'brush' },
                            { label: 'Pink - Amber', icon: 'brush' },
                            { label: 'Deep Purple - Orange', icon: 'brush' }
                        ]
                    },
                    {
                        label: 'Special', icon: 'format_paint',
                        items: [
                            { label: 'Reflection', icon: 'brush' },
                            { label: 'Moody', icon: 'brush' },
                            { label: 'Cityscape', icon: 'brush' }
                        ]
                    },
                ]
            },
            {
                label: 'Themes', icon: 'brush', badge: '5',
                items: [
                    { label: 'Blue Grey - Green', icon: 'brush' },
                    { label: 'Indigo - Pink', icon: 'brush' },
                    { label: 'Pink - Amber', icon: 'brush' }
                ]
            },
            {
                label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'orange-badge',
                items: [
                    { label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample'] },
                    { label: 'Forms', icon: 'input', routerLink: ['/forms'] },
                    { label: 'Data', icon: 'grid_on', routerLink: ['/data'] },
                    { label: 'Panels', icon: 'content_paste', routerLink: ['/panels'] },
                    { label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays'] },
                    { label: 'Menus', icon: 'menu', routerLink: ['/menus'] },
                    { label: 'Messages', icon: 'message', routerLink: ['/messages'] },
                    { label: 'Charts', icon: 'insert_chart', routerLink: ['/charts'] },
                    { label: 'File', icon: 'attach_file', routerLink: ['/file'] },
                    { label: 'Misc', icon: 'toys', routerLink: ['/misc'] }
                ]
            },
            {
                label: 'Template Pages', icon: 'get_app',
                items: [
                    { label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty'] },
                    { label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank' },
                    { label: 'Login Page', icon: 'verified_user', url: 'assets/pages/login.html', target: '_blank' },
                    { label: 'Error Page', icon: 'error', url: 'assets/pages/error.html', target: '_blank' },
                    { label: '404 Page', icon: 'error_outline', url: 'assets/pages/404.html', target: '_blank' },
                    { label: 'Access Denied Page', icon: 'security', url: 'assets/pages/access.html', target: '_blank' }
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'subject' },
                                    { label: 'Submenu 1.1.2', icon: 'subject' },
                                    { label: 'Submenu 1.1.3', icon: 'subject' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'subject' },
                                    { label: 'Submenu 1.2.2', icon: 'subject' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'subject' },
                                    { label: 'Submenu 2.1.2', icon: 'subject' },
                                    { label: 'Submenu 2.1.3', icon: 'subject' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'subject' },
                                    { label: 'Submenu 2.2.2', icon: 'subject' }
                                ]
                            },
                        ]
                    }
                ]
            },
            { label: 'Utils', icon: 'build', routerLink: ['/utils'] },
            { label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation'] },
            { label: 'Buy Now', icon: 'credit_card', url: 'https://www.primefaces.org/store' }
        ];
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: '/app/menu/app.menu.component.html'
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=app.menu.component.js.map