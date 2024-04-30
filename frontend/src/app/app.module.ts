import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { WeatherComponent } from "./pages/weather/weather.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { QuoteDisplayComponent } from "./quote-display/quote-display.component";

@NgModule({
    declarations: [
        AppComponent,
        WeatherComponent,
        QuoteDisplayComponent
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule,
        HttpClientModule,
        WeatherComponent,
        CommonModule,
        FormsModule,
        NgModule,
        QuoteDisplayComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}