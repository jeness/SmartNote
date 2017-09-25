import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteListHeaderComponent } from './note-list-header/note-list-header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { NoteListFooterComponent } from './note-list-footer/note-list-footer.component';
import { NoteDataService } from './note-data.service';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteListHeaderComponent,
    NoteListItemComponent,
    NoteListFooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [NoteDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
