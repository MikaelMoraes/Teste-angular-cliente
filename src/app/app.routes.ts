import { Routes } from '@angular/router';
import { UserListComponent } from './features/pages/user/user-list/user-list.component';
import { UserCreateComponent } from './features/pages/user/user-create/user-create.component';

export const routes: Routes = [
    { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
    {
        path: 'usuarios',
        children: [
            { path: '', component: UserListComponent },
            { path: 'novo', component: UserCreateComponent },
            { path: ':id', component: UserCreateComponent }
        ]
    },
    { path: '**', redirectTo: 'usuarios' }
];
