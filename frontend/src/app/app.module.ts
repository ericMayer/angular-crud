// Módulos
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Rotas
import { AppRoutingModule } from "./app-routing.module";

// Componentes
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavegacaoComponent } from "./components/template/navegacao/navegacao.component";
import { ContentComponent } from "./views/content/content.component";
import { ProdutoCrudComponent } from "./views/produto-crud/produto-crud.component";
import { ProdutoCriarComponent } from "./components/produtos/produto-criar/produto-criar.component";

// Diretivas
import { LinkDirective } from "./directives/link.directive";
import { ForDirective } from "./directives/for.directive";

// Imports Material
import { MatSidenavModule as SideNav } from "@angular/material/sidenav";
import { MatListModule as List } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

// Http
import { HttpClientModule } from "@angular/common/http";

// Formulários
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProdutoCarregarComponent } from "./components/produtos/produto-carregar/produto-carregar.component";

import { LayoutModule } from "@angular/cdk/layout";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

// Moeda BRL
import brl from "@angular/common/locales/pt";
import { registerLocaleData as alterandoMoeda } from "@angular/common";
import { ProdutoAtualizarComponent } from './components/produtos/produto-atualizar/produto-atualizar.component';

alterandoMoeda(brl);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegacaoComponent,
    ContentComponent,
    ProdutoCrudComponent,
    LinkDirective,
    ForDirective,
    ProdutoCriarComponent,
    ProdutoCarregarComponent,
    ProdutoAtualizarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    SideNav,
    List,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
