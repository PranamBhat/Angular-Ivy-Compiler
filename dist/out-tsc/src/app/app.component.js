var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ɵrenderComponent as renderComponent } from '@angular/core';
import * as i0 from "@angular/core";
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-ivy';
    }
    AppComponent.ngComponentDef = i0.ɵdefineComponent({ type: AppComponent, selectors: [["app-hello"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, features: [i0.ɵPublicFeature], consts: 2, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵelementStart(0, "h1");
            i0.ɵtext(1);
            i0.ɵelementEnd();
        } if (rf & 2) {
            i0.ɵtextBinding(1, i0.ɵinterpolation1(" Welcome to ", ctx.title, "! "));
        } } });
    AppComponent = __decorate([
        Component({
            selector: 'app-hello',
            template: "\n    <h1>\n      Welcome to {{ title }}!\n    </h1>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
renderComponent(AppComponent);
//# sourceMappingURL=app.component.js.map