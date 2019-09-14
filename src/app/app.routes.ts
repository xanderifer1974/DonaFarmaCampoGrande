import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MedicamentosComponent } from "./medicamentos/medicamentos.component";
import { CuidadosPessoaisComponent } from "./cuidados-pessoais/cuidados-pessoais.component";
import { DermoCosmeticosComponent } from "./dermo-cosmeticos/dermo-cosmeticos.component";
import { MamaeBebeComponent } from "./mamae-bebe/mamae-bebe.component";
import { OfertasComponent } from "./ofertas/ofertas.component";
import { FaleConoscoComponent } from "./fale-conosco/fale-conosco.component";


export const ROUTES: Routes = [

    {path: '', component: HomeComponent},   
    {path: 'medicamentos', component: MedicamentosComponent},
    {path: 'cuidados-pessoais', component: CuidadosPessoaisComponent},
    {path: 'dermo-cosmeticos', component: DermoCosmeticosComponent},
    {path: 'mamae-bebe', component: MamaeBebeComponent},
    {path: 'ofertas', component: OfertasComponent},
    {path: 'fale-conosco', component: FaleConoscoComponent},
    {path: 'about', component: AboutComponent} 

];