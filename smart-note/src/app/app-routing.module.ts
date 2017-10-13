import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { NotesResolver } from './notes.resolver';

const routes: Routes = [
    {
        path: "login" ,
        component: LoginComponent
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "notes",
        component: NotesComponent,
        resolve: {
            notes: NotesResolver
        }
    },
    {
        path: "home",
        //redirectTo: "notes",
        //pathMatch: "full",
        component: HomeComponent
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
      NotesResolver
    ],
    declarations: []
  })
export class AppRoutingModule { }