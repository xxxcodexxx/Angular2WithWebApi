import { Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from '../app.component';
@Component({
    selector: 'app-topbar',
    templateUrl: '/app/topbar/app.topbar.component.html'
})
export class TopbarComponent implements OnInit {
    ngOnInit() { }
}