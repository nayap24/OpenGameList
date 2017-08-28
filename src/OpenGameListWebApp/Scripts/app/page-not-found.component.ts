import { Component } from "@angular/core";

@Component({
    selector: "page-not-found",
    template: `
        <h1>{{title}}</h1>
        <div>
            Oops.. This page does not exist (yet!).
        </div>
    `
})
export class PageNotFoundComponent {
    title = "Page not Found";
}