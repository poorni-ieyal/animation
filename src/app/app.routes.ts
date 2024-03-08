import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'franchise', component: FranchiseComponent },
];
