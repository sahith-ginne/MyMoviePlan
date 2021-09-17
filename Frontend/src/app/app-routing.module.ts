import { TransactionComponent } from './transaction/transaction.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { MoviesComponent } from './movies/movies.component';
import { PaymentComponent } from './payment/payment.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import {AddMoviesComponent} from './add-movies/add-movies.component'
import { ConfirmationComponent } from './confirmation/confirmation.component';


const routes: Routes = [
  {path: 'admin',
   component: AdminComponent
  },
  
  {path : 'user',
   component: UserComponent
  },

  {path : 'payment',
   component: PaymentComponent
  },

  {path : 'movies',
   component: MoviesComponent
  },

  {path : 'manage',
   component: ManageComponent
  },

  {path : 'admin-register',
   component: AdminRegisterComponent
  },

  {path : 'user-register',
   component: UserRegisterComponent
  },

  {path : 'add-movies',
   component:AddMoviesComponent
  },
  {path : 'update-movie/:id',
   component:UpdateMovieComponent
  },

  {path : 'confirmation',
   component:ConfirmationComponent
  },

  {path : 'transaction',
   component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
