import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}