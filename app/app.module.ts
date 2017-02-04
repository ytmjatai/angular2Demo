import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './modules/app-routing.module'

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/users/user-edit.component';
import { DocsComponent } from './components/docs/docs.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { UserService } from './services/users.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    UsersComponent,
    UserEditComponent,
    DocsComponent
  ],
  entryComponents: [UserEditComponent],
  providers: [UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
