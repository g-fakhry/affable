import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { MaterialModule } from './material-modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfluencersListComponent } from './influencers-list/influencers-list.component';
import { InfluencerCardComponent } from './influencer-card/influencer-card.component';
import { InfluencerDataService } from './influencer-service.service';
import { NumberFormatPipe } from '../app/pipes/number-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfluencersListComponent,
    InfluencerCardComponent,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MaterialModule,
    FormsModule
  ],
  providers: [InfluencerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
