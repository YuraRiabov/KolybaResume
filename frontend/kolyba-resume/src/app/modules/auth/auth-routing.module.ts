import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';
import { NgModule } from '@angular/core';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

const routes: Routes = [
    {
        path: '',
        component: AuthPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full',
            },
            {
                path: 'sign-in',
                component: SignInFormComponent,
            },
            {
                path: 'sign-up',
                component: SignUpFormComponent,
            },
            {
                path: 'forgot',
                component: ForgotFormComponent,
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
