"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var login_component_1 = require("./login.component");
var item_detail_component_1 = require("./item-detail.component");
var page_not_found_component_1 = require("./page-not-found.component");
var appRoutes = [
    {
        path: "",
        component: home_component_1.HomeComponent
    },
    {
        path: "home",
        redirectTo: ""
    },
    {
        path: "about",
        component: about_component_1.AboutComponent
    },
    {
        path: "login",
        component: login_component_1.LoginComponent
    },
    {
        path: "item/:id",
        component: item_detail_component_1.ItemDetailComponent
    },
    {
        path: "**",
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.AppRoutingProviders = [];
exports.AppRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map