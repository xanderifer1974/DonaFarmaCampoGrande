import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import{ROUTES} from './app.routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { CuidadosPessoaisComponent } from './cuidados-pessoais/cuidados-pessoais.component';
import { DermoCosmeticosComponent } from './dermo-cosmeticos/dermo-cosmeticos.component';
import { MamaeBebeComponent } from './mamae-bebe/mamae-bebe.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MedicamentosComponent,
    CuidadosPessoaisComponent,
    DermoCosmeticosComponent,
    MamaeBebeComponent,
    OfertasComponent,
    FaleConoscoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
