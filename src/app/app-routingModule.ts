import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routesConfig: Routes = [
  { path: 'contacts', component: ContactsComponent},
  { path: 'detail', component: ContactsDetailComponent},
  { path: '', redirectTo: '/contacts', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routesConfig)],
  declarations: [
    ContactsComponent,
    ContactsDetailComponent,
    PageNotFoundComponent
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
