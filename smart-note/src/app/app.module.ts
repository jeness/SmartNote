import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GlobalResponseInterceptor } from './interceptor/global-response-interceptor';

import { AppComponent } from './app.component';
import { NoteListHeaderComponent } from './note-list-header/note-list-header.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';
import { NoteListFooterComponent } from './note-list-footer/note-list-footer.component';
import { NoteDataService } from './note-data.service';
//import { TagDataService } from './tag-data.service';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NotesComponent } from './notes/notes.component';
//import { TagComponent } from './tag/tag.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { ButtonComponent } from './component/button/button.component';

// directive
import { MarkdownEditorDirective } from './directives/markdown-editor/markdown-editor.directive';

// service
import { ApiService } from './api.service';
import { LoadingBarService } from './services/loading-bar/loading-bar.service';
import { MsgService } from './services/msg/msg.service';
import { NoteService } from './services/note/note.service';
import { TagService } from './services/tag/tag.service';
import { TagComponent } from './tag/tag.component';
//import { ViewNoteComponent } from './view-note/view-note.component';
import { AboutComponent } from './about/about.component';
//import { LinkNoteComponent } from './link-note/link-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteListHeaderComponent,
    NoteListItemComponent,
    NoteListFooterComponent,
    LoginComponent,
    HomeComponent,
    NotesComponent,
    PageNotFoundComponent,
    AddNoteComponent,
    DropdownComponent,
    ButtonComponent,
    MarkdownEditorDirective,
    TagComponent,
    //ViewNoteComponent,
    AboutComponent,
    //LinkNoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalResponseInterceptor,
      multi: true,
    },
    NoteDataService, ApiService,
    LoadingBarService,
    TagService,
    NoteService,
    MsgService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
