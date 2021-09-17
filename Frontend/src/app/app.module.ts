import { MaterialModule } from './Material/Material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './movies/movies.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { ManageComponent } from './manage/manage.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    AdminComponent,
    UserComponent,
    AdminRegisterComponent,
    UserRegisterComponent,
    PaymentComponent,
    ConfirmationComponent,
    ManageComponent,
    AddMoviesComponent,
    ManageComponent,
    UpdateMovieComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
