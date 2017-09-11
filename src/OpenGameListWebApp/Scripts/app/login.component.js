"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
        this.title = "Login";
        this.loginForm = null;
        this.loginForm = fb.group({
            username: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.performLogin = function (e) {
        e.preventDefault();
        alert(JSON.stringify(this.loginForm.value));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            template: "\n        <div class=\"login-container\">\n            <h2 class=\"form-login-heading\">Login</h2>\n            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"loginError\">\n                <strong>Warning:</strong> Username or Password mismatch\n            </div>\n            <form class=\"form-login\" [formGroup]=\"loginForm\" (submit)=\"performLogin($event)\">\n                <input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Your username or e-mail address\" required autofocus />\n                <input formControlName=\"password\" type=\"password\" class=\"formcontrol\" placeholder=\"Your password\" required />\n                <div class=\"checkbox\">\n                    <label>\n                        <input type=\"checkbox\" value=\"remember-me\" />\n                        Remember me\n                    </label>\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n            </form>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map