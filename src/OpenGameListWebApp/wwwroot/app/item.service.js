"use strict";var __decorate=this&&this.__decorate||function(t,e,r,n){var o,a=arguments.length,i=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(i=(a<3?o(i):a>3?o(e,r,i):o(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/http"),Rx_1=require("rxjs/Rx"),ItemService=function(){function t(t){this.http=t,this.baseUrl="api/items/"}return t.prototype.getLatest=function(t){var e=this.baseUrl+"GetLatest/";return null!=t&&(e+=t),this.http.get(e).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.getMostViewed=function(t){var e=this.baseUrl+"GetMostViewed/";return null!=t&&(e+=t),this.http.get(e).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.getRandom=function(t){var e=this.baseUrl+"GetRandom/";return null!=t&&(e+=t),this.http.get(e).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.get=function(t){if(null==t)throw new Error("id is required.");var e=this.baseUrl+t;return this.http.get(e).map(function(t){return t.json()}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error(t),Rx_1.Observable.throw(t.json().error||"Server error")},t=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],t)}();exports.ItemService=ItemService;
//# sourceMappingURL=item.service.js.map