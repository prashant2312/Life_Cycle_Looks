import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:"customer",loadChildren:()=>import("./modules/customer/customer.module").then(mod=>mod.CustomerModule)
},
{
  path:"user",loadChildren:()=>import("./modules/user/user.module").then(mod=>mod.UserModule)
},{
  path:"admin",loadChildren:()=>import("./modules/admin/admin.module").then(mod=>mod.AdminModule)
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
