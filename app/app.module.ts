import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit.component';
import { DocsComponent } from './docs/docs.component';
import { MainComponent } from './main/main.component';



const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'docs', component: DocsComponent },
  { path: '', component: MainComponent },
]


@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserEditComponent,
    DocsComponent,
    MainComponent,
  ],
  entryComponents: [UserEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
