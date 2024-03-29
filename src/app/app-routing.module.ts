import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompPipeComponent } from './components/comp-pipe/comp-pipe.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },


  // {path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path: 'home', component: HomeComponent  },
  // {path: 'contact',  component: ContactComponent },
  // {path: 'pipe',  component: CompPipeComponent },
  // {path: 'dynamic',  component: DynamicFormComponent }, 
  // {path: 'reactive',  component: ReactiveComponent }, 
  // {path: 'directive',  component: DirectiveComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
