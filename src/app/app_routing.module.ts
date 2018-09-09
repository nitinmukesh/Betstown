import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from 'app/pages/home/home.component';
import { SingupComponent } from 'app/pages/singup/singup.component';
import { UserComponent } from 'app/pages/user/user.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'signup',
        component: SingupComponent
    }, {
        path: ':username',
        component: UserComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
