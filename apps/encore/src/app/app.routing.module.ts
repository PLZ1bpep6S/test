import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authenticationRoutes } from '@encore/authentication';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'account', children: authenticationRoutes },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}