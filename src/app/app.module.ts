import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './#components/mainpage/mainpage.component';

const appRoutes: Routes = [
    {path: '', component: MainpageComponent},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    declarations: [
        AppComponent,
        MainpageComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
