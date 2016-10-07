/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'learn-app',
    template: `
        <h1>{{ title }}</h1>
        <ul>
            <li *ngFor="#link of links"><a href="{{ link }}">{{ link }}</a></li>
        </ul>
    `
})

class AppComponent {
    title: string;
    links: string[];

    constructor() {
        this.title = 'Welcome to learn Angular2!';
        this.links = ['https://github.com/athlonUA/angular2-learning', 'https://github.com/athlonUA', 'https://www.facebook.com/athlonUA'];
    }
}

bootstrap(AppComponent);
