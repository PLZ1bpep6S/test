import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NrgDashboardModule } from '@encore/nrg/dashboard';
import { PmiDashboardModule } from '@encore/pmi/dashboard';
import { DashboardRoutingModule } from './dashboard.routing.module';

import { DashboardComponent } from './dashboard.component';

import { MaterialModule } from '@encore/material';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        DashboardRoutingModule,
        MaterialModule,
        NrgDashboardModule,
        PmiDashboardModule
    ],
    providers: []
})
export class DashboardModule { }
