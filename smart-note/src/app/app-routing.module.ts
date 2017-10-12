import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
        },
        {
        path: 'notes',
        component: NotesComponent,
        },
        {
        path: '**',
        component: PageNotFoundComponent
        }
];

@NgModule({
     imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }