import { Component, Input, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from './app.component';
@Component({
    selector: 'app-footer',
    templateUrl: '/app/app.footer.component.html'
})
export class FooterComponent implements OnInit {
    ngOnInit() { }
}