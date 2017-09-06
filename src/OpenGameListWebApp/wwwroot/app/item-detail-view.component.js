"use strict";var __decorate=this&&this.__decorate||function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(a=e[c])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),router_1=require("@angular/router"),item_service_1=require("./item.service"),ItemDetailViewComponent=function(){function e(e,t,i){this.itemService=e,this.router=t,this.activatedRoute=i}return e.prototype.ngOnInit=function(){var e=this,t=+this.activatedRoute.snapshot.params.id;t?this.itemService.get(t).subscribe(function(t){return e.item=t}):0===t?(console.log("id is 0: switching to edit mode..."),this.router.navigate(["item/edit",0])):(console.log("Invalid id: routing back to home..."),this.router.navigate([""]))},e.prototype.onItemDetailEdit=function(e){return this.router.navigate(["item/edit",e.Id]),!1},e.prototype.onBack=function(){this.router.navigate([""])},e=__decorate([core_1.Component({selector:"item-detail-view",template:'\n        <div *ngIf="item">\n            <h2>\n                <a href="javascript:void(0)" (click)="onBack()">&laquo; Back to Home</a>\n            </h2>\n            <div class="item-container">\n                <ul class="nav nav-tabs">\n                    <li role="presentation">\n                        <a href="javascript:void(0)" (click)="onItemDetailEdit(item)">Edit</a>\n                    </li>\n                    <li role="presentation" class="active">\n                        <a href="javascript:void(0)">View</a>\n                    </li>\n                </ul>\n                <div class="panel panel-default">\n                    <div class="panel-body">\n                        <div class="item-image-panel">\n                            <img src="/img/item-image-sample.png" alt="{{item.Title}}" />\n                            <div class="caption">Sample image with caption.</div>\n                        </div>\n                        <h3>{{item.Title}}</h3>\n                        <p>{{item.Description}}</p>\n                        <p>{{item.Text}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    '}),__metadata("design:paramtypes",[item_service_1.ItemService,router_1.Router,router_1.ActivatedRoute])],e)}();exports.ItemDetailViewComponent=ItemDetailViewComponent;
//# sourceMappingURL=item-detail-view.component.js.map
