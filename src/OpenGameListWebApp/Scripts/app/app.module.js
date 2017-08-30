"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/Rx");
var about_component_1 = require("./about.component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var item_detail_edit_component_1 = require("./item-detail-edit.component");
var item_detail_view_component_1 = require("./item-detail-view.component");
var item_list_component_1 = require("./item-list.component");
var login_component_1 = require("./login.component");
var page_not_found_component_1 = require("./page-not-found.component");
var app_routing_1 = require("./app.routing");
var item_service_1 = require("./item.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // directives, components, and pipes
            declarations: [
                about_component_1.AboutComponent,
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                item_list_component_1.ItemListComponent,
                item_detail_edit_component_1.ItemDetailEditComponent,
                item_detail_view_component_1.ItemDetailViewComponent,
                login_component_1.LoginComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            // modules
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                app_routing_1.AppRouting
            ],
            // providers
            providers: [
                item_service_1.ItemService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map