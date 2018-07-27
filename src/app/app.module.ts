import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BindingsComponent } from './bindings/bindings.component';
import {HidingComponent} from "./hiding/hiding.component";
import {ModelComponent} from "./model/model.component";
import {NgswitchComponent} from "./ngswitch/ngswitch.component";
import { FormsComponent } from './forms/forms.component';
import { routing } from './app.routing';
import { RouterComponent } from './router/router.component';
import { JasmineTestComponent } from './jasmine-test/jasmine-test.component';
import { PromiseExampleComponent } from './promise-example/promise-example.component';
import {AuthGuard} from "./router/auth-guard-service";
import {LoginService} from "./router/login/login.service";
import {LoginComponent} from "./router/login/login.component";
import {ObservableExampleComponent} from "./observable-example/observable-example.component";
import {NgforComponent} from "./ngfor/ngfor.component";
import { ListPostsComponent } from './observable-example/list-posts/list-posts.component';
import {PostsService} from "./observable-example/list-posts/posts.service";
import { NgClassComponent } from './ng-class/ng-class.component';
import {HttpClientModule} from "@angular/common/http";
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { LoaderComponent } from './popup-window/loader/loader.component';
import { HeaderComponent } from './header/header.component';
import {LoaderViewChildComponent} from "./popup-window/loader/loader-viewchild.component";
import {EvenUppercasePipe} from "./pipe-solution/even-uppercase.pipe";
import {SpinnerComponent} from "./spinner/spinner.component";
import {LicensePlateComponent} from './license-plate/license-plate.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartService } from './cart.service';
import {SubjectExampleComponent} from './subject-example/subject-example.component';
import {CurrencySwitcherComponent} from './currency-switcher/currency-switcher.component';
import {EnumUtilsModule} from '../../projects/enum-utils/src/lib/enum-utils.module';
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, BindingsComponent, LicensePlateComponent,
    HidingComponent, ModelComponent, EvenUppercasePipe,
    NgswitchComponent, FormsComponent, RouterComponent, JasmineTestComponent,
    PromiseExampleComponent, ObservableExampleComponent, LoginComponent, NgforComponent, ListPostsComponent,
    NgClassComponent, PopupWindowComponent, LoaderComponent, HeaderComponent, SpinnerComponent,
    LoaderViewChildComponent, SubjectExampleComponent,
    CarouselComponent,
    CurrencySwitcherComponent
  ],
  imports: [
    BrowserModule,
    EnumUtilsModule,
    FormsModule,
    HttpClientModule,
    RouterModule , routing
    //,ReactiveFormsModule
  ],
  providers: [AuthGuard, LoginService, PostsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
