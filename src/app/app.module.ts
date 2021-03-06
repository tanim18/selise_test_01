import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListItemComponent } from './List-Item/List-Item.component';
import { FirstComponent } from './First/First.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthorService } from './author.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [	
    AppComponent,
    ListItemComponent,
      FirstComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule
   
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
