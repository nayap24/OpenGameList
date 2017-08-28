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
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemService, router, activatedRoute) {
        this.itemService = itemService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.itemService.get(id).subscribe(function (item) { return _this.item = item; });
        }
        else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate([""]);
        }
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "item-detail",
            template: "\n        <div *ngIf=\"item\" class=\"item-details\">\n            <h2>{{item.Title}} - Detail View</h2>\n            <ul>\n                <li>\n                    <label>Title:</label>\n                    <input [(ngModel)]=\"item.Title\" placeholder=\"Insert the title...\">\n                </li>\n                <li>\n                    <label>Description:</label>\n                    <textarea [(ngModel)]=\"item.Description\" placeholder=\"Insert a suitable description...\"></textarea>\n                </li>\n            </ul>\n        </div>\n    ",
            styles: ["\n        .item-details {\n            margin: 5px;\n            padding: 5px 10px;\n            border: 1px solid black;\n            background-color: #dddddd;\n            width: 300px;\n        }\n        .item-details * {\n            vertical-align: middle;\n        }\n        .item-details ul li {\n            padding: 5px 0;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.Router, router_1.ActivatedRoute])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map