import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContentComponent } from "./views/content/content.component";
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
