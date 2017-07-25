import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Invgen } from './components/modules/invgen/invgen';
import { Ezform } from './components/modules/ezform/ezform';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path: 'invgen',
        component: Invgen
    },{
        path: 'ezform/:ezf_id',
        component: Ezform
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
