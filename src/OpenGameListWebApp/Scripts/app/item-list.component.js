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
var item_service_1 = require("./item.service");
var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
    }
    ItemListComponent.prototype.ngOnInit = function () {
        this.getLatest();
    };
    ItemListComponent.prototype.getLatest = function () {
        var _this = this;
        this.itemService.getLatest()
            .subscribe(function (latestItems) { return _this.items = latestItems; }, function (error) { return _this.errorMessage = error; });
    };
    ItemListComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
        console.log("item with Id " + this.selectedItem.Id + " has been selected.");
    };
    ItemListComponent = __decorate([
        core_1.Component({
            selector: "item-list",
            template: "\n        <h2>Latest Items:</h2>\n        <ul class=\"items\">\n            <li *ngFor=\"let item of items\"\n                [class.selected]=\"item === selectedItem\"\n                (click)=\"onSelect(item)\">\n                <span>{{item.Title}}</span>\n            </li>\n        </ul>\n    ",
            styles: ["\n        ul.items li {\n            cursor: pointer;\n        }\n        ul.items li.selected {\n            background-color: #cccccc;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemListComponent);
    return ItemListComponent;
}());
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map