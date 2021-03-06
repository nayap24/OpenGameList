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
var item_1 = require("./item");
var item_service_1 = require("./item.service");
var ItemDetailEditComponent = (function () {
    function ItemDetailEditComponent(itemService, router, activatedRoute) {
        this.itemService = itemService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ItemDetailEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activatedRoute.snapshot.params["id"];
        if (id) {
            this.itemService.get(id).subscribe(function (item) { return _this.item = item; });
        }
        else if (id === 0) {
            console.log("id is 0: adding new item...");
            this.item = new item_1.Item(0, "New Item", null);
        }
        else {
            console.log("Invalid id: routing back to home...");
            this.router.navigate([""]);
        }
    };
    ItemDetailEditComponent.prototype.onInsert = function (item) {
        var _this = this;
        this.itemService.add(item).subscribe(function (data) {
            _this.item = data;
            console.log("Item " + _this.item.Id + " has been added.");
            _this.router.navigate([""]);
        }, function (error) { return console.log(error); });
    };
    ItemDetailEditComponent.prototype.onUpdate = function (item) {
        var _this = this;
        this.itemService.update(item).subscribe(function (data) {
            _this.item = data;
            console.log("Item " + _this.item.Id + " has been updated.");
            _this.router.navigate(["item/view", _this.item.Id]);
        }, function (error) { return console.log(error); });
    };
    ItemDetailEditComponent.prototype.onDelete = function (item) {
        var _this = this;
        var id = item.Id;
        this.itemService.delete(id).subscribe(function (data) {
            console.log("Item " + id + " has been deleted.");
            _this.router.navigate([""]);
        }, function (error) { return console.log(error); });
    };
    ItemDetailEditComponent.prototype.onBack = function () {
        this.router.navigate([""]);
    };
    ItemDetailEditComponent.prototype.onItemDetailView = function (item) {
        this.router.navigate(["item/view", item.Id]);
    };
    ItemDetailEditComponent = __decorate([
        core_1.Component({
            selector: "item-detail-edit",
            template: "\n        <div *ngIf=\"item\">\n            <h2>\n                <a href=\"#\" (click)=\"onBack()\">\n                    &laquo; Back to Home\n                </a>\n            </h2>\n            <div class=\"item-container\">\n                <ul class=\"nav nav-tabs\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"#\">Edit</a>\n                    </li>\n                    <li role=\"presentation\" *ngIf=\"item.Id != 0\">\n                        <a href=\"#\" (click)=\"onItemDetailView(item)\">View</a>\n                    </li>\n                </ul>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-body\">\n                        <form class=\"item-detail-edit\">\n                            <h3>\n                                {{item.Title}}\n                                <span class=\"empty-field\" [hidden]=\"dTitle.valid\">\n                                    Empty Title\n                                </span>\n                            </h3>\n                            <div class=\"form-group\">\n                                <label for=\"input-title\">Title</label>\n                                <input id=\"input-title\" name=\"input-title\" type=\"text\" class=\"form-control\" [(ngModel)]=\"item.Title\" placeholder=\"Insert the title...\" />\n\n                                <div class=\"form-group has-feedback\" [ngClass]=\"{'has-success': dTitle.valid, 'has-error': !dTitle.valid}\">\n                                    <label for=\"input-title\">Title</label>\n                                    <input id=\"input-title\" name=\"input-title\" type=\"text\" class=\"formcontrol\" [(ngModel)]=\"item.Title\" placeholder=\"Insert the title...\" required #dTitle=\"ngModel\" />\n                                    <span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\" [ngClass]=\"{'glyphicon-ok': dTitle.valid, 'glyphicon-remove': !dTitle.valid}\"></span>\n                                    <div [hidden]=\" dTitle.valid\" class=\"alert alert-danger\">\n                                        You need to enter a valid Title.\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"input-description\">Description</label>\n                                <textarea id=\"input-description\" name=\"inputdescription\" class=\"form-control\" [(ngModel)]=\"item.Description\" placeholder=\"Insert a suitable description...\" required></textarea>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"input-text\">Text</label>\n                                <textarea id=\"input-text\" name=\"input-text\" class=\"form-control\" [(ngModel)]=\"item.Text\" placeholder=\"Insert a suitable description...\"></textarea>\n                            </div>\n                            <div *ngIf=\"item.Id == 0\" class=\"commands insert\">\n                                <input type=\"button\" class=\"btn btn-primary\" value=\"Save\" (click)=\"onInsert(item)\" />\n                                <input type=\"button\" class=\"btn btn-default\" value=\"Cancel\" (click)=\"onBack()\" />\n                            </div>\n                            <div *ngIf=\"item.Id != 0\" class=\"commands update\">\n                                <input type=\"button\" class=\"btn btn-primary\" value=\"Update\" (click)=\"onUpdate(item)\" />\n                                <input type=\"button\" class=\"btn btn-danger\" value=\"Delete\" (click)=\"onDelete(item)\" />\n                                <input type=\"button\" class=\"btn btn-default\" value=\"Cancel\" (click)=\"onItemDetailView(item)\" />\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ItemDetailEditComponent);
    return ItemDetailEditComponent;
}());
exports.ItemDetailEditComponent = ItemDetailEditComponent;
//# sourceMappingURL=item-detail-edit.component.js.map