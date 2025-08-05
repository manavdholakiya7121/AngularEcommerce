import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserProfile } from './user-profile/user-profile';
import { ContactUs } from './contact-us/contact-us';
import { AdminLogin } from './admin/admin-login/admin-login';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { UserCrud } from './admin/user-crud/user-crud';
import { Product } from './product/product';
import { SigninSignup } from './customer/signin-signup/signin-signup';
import { SellerDashboard } from './customer/seller/seller-dashboard/seller-dashboard';
import { BuyerDashboad } from './customer/buyer/buyer-dashboad/buyer-dashboad';
import { Checkout } from './customer/buyer/checkout/checkout';
import { PageNotFound } from './shared/layouts/page-not-found/page-not-found';
import { AdminAuthGuardLogin, AdminAuthGuardService, BuyerAuthGuardService, SellerAuthGuardService, SellerBuyerAuthGuardLogin } from './shared/services/auth-guard';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: Home },
    { path: "my-profile", component: UserProfile },
    { path: "contact-us", component: ContactUs },
    //admin
    {
        path: '', canActivate:[AdminAuthGuardLogin], children: [
            { path: "admin-login", component: AdminLogin },
        ]
    },
    {
        path: '', canActivate:[AdminAuthGuardService], children: [
            { path: "admin-dashboard", component: AdminDashboard },
            { path: "admin/user", component: UserCrud },
            { path: "admin/product", component: Product }
        ]
    },
    {
        path: '', canActivate:[SellerBuyerAuthGuardLogin], children: [
            { path: "sign-in", component: SigninSignup },
            { path: "sign-up", component: SigninSignup },
        ]
    },
    {
        path: '', canActivate:[SellerAuthGuardService], children: [
            { path: "seller-dashboard", component: SellerDashboard },
            { path: "seller/product", component:Product},
        ]
    },
    {
        path: '', canActivate:[BuyerAuthGuardService],  children: [
            { path: "buyer-dashboard", component: BuyerDashboad },
            { path: "checkout", component:Checkout},
        ]
    },
    { path: "**", component: PageNotFound }
];
