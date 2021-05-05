import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { SignupComponent } from './signup/signup.component';
import { AdminEditMovieComponent } from './admin-edit-movie/admin-edit-movie.component';
import { AdminEditTheaterComponent } from './admin-edit-theater/admin-edit-theater.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminAddTheaterComponent } from './admin-add-theater/admin-add-theater.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminTheatersComponent } from './admin-theaters/admin-theaters.component';
import { ChooseComponent } from './choose/choose.component';
import { ActiveShowComponent } from './active-show/active-show.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SeatBookingComponent,
    PaymentPageComponent,
    BookingConfirmationComponent,
    SignupComponent,
    AdminEditMovieComponent,
    AdminEditTheaterComponent,
    ForgetPasswordComponent,
    AdminMoviesComponent,
    AdminAddTheaterComponent,
    AdminAddMovieComponent,
    AdminTheatersComponent,
    ChooseComponent,
    ActiveShowComponent,
    CheckoutComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
