import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FranchiseComponent } from './pages/franchise/franchise.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { ShippingComponent } from './pages/shipping/shipping.component';
import { ReturnAndRefundComponent } from './pages/return-and-refund/return-and-refund.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path:'services', component:ServicesComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'privacy-policy', component : PrivacyPolicyComponent},
  {path:'terms-and-conditions',component:TermsConditionsComponent},
  {path:'shipping-policy',component:ShippingComponent},
  {path: 'return-and-refund-policy',component:ReturnAndRefundComponent}
];
