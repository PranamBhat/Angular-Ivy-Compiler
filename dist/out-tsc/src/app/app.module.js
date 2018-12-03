var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import * as i0 from "@angular/core";
var ɵ0 = [
    BrowserModule
], ɵ1 = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ngInjectorDef = i0.defineInjector({ factory: function AppModule_Factory() { return new AppModule(); }, providers: ɵ1, imports: [ɵ0] });
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent
            ],
            imports: ɵ0,
            providers: ɵ1,
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=app.module.js.map