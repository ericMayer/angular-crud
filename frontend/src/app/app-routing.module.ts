import { ProdutoDeletarComponent } from "./components/produtos/produto-deletar/produto-deletar.component";
import { ProdutoAtualizarComponent } from "./components/produtos/produto-atualizar/produto-atualizar.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContentComponent } from "./views/content/content.component";
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";
import { ProdutoCriarComponent } from "./components/produtos/produto-criar/produto-criar.component";

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent,
  },
  {
    path: "produto/criar",
    component: ProdutoCriarComponent,
  },
  {
    path: "produto/atualizar/:id", // passando um parâmetro id na url
    component: ProdutoAtualizarComponent,
  },
  {
    path: "produto/deletar/:id",
    component: ProdutoDeletarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
