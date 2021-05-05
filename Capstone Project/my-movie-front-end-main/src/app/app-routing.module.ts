import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { ChooseComponent } from './choose/choose.component';
import { AdminEditTheaterComponent } from './admin-edit-theater/admin-edit-theater.component';
import { ActiveShowComponent } from './active-show/active-show.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { AdminAddTheaterComponent } from './admin-add-theater/admin-add-theater.component';
import { AdminTheatersComponent } from './admin-theaters/admin-theaters.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminEditMovieComponent } from './admin-edit-movie/admin-edit-movie.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'loginc', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'frgpassword', component:ForgetPasswordComponent},
  {path:'admin/movies/editmovie/:id', component:AdminEditMovieComponent},
  {path:'admin/movies', component:AdminMoviesComponent},
  {path:'admin/movies/addmovie', component:AdminAddMovieComponent},
  {path:'admin/theaters', component:AdminTheatersComponent},
  {path:'admin/theaters/addtheater', component:AdminAddTheaterComponent},
  {path:'admin/theaters/edittheater/:id', component:AdminEditTheaterComponent},
  {path:'bookseats', component:SeatBookingComponent},
  {path:'confirmation', component:BookingConfirmationComponent},
  {path:'choose', component:ChooseComponent},
  {path:'listMovies', component:ActiveShowComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
