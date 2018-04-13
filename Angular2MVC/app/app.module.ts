import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user.component';
import { HomeComponent } from './components/home.component';
import { MenuComponent } from './menu/app.menu.component';
import { TopbarComponent } from './Topbar/app.topbar.component';
import { FooterComponent } from './app.footer.component';
import { UserService } from './Service/user.service';
import { InputTextModule, ButtonModule, PaginatorModule, ScrollPanelModule, DialogModule, MessageModule, DropdownModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        Ng2Bs3ModalModule,
        InputTextModule,
        ButtonModule,
        PaginatorModule,
        TableModule,
        ScrollPanelModule,
        DialogModule,
        MessageModule,
        DropdownModule
    ],
    declarations: [AppComponent, MenuComponent, TopbarComponent, FooterComponent, UserComponent, HomeComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService],
    bootstrap: [AppComponent]

})
export class AppModule { }
