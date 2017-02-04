import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from '../components/users/users.component';
import { UserEditComponent } from '../components/users/user-edit.component';
import { DocsComponent } from '../components/docs/docs.component';
import { MainComponent } from '../components/main/main.component';

import { HttpModule, JsonpModule } from '@angular/http';


const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: MainComponent },
    { path: 'users', component: UsersComponent },
    { path: 'docs', component: DocsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }
