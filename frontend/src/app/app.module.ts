// Módulos
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
