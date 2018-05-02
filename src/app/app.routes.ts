import { RouterModule, Routes } from "@angular/router";

import { AboutComponent, PortafolioComponent, PortafolioItemComponent, SearchComponent } from "./components/index.paginas";



const app_routes: Routes =[

    { path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'portafolio-item/:id', component: PortafolioItemComponent},
    { path: 'buscar/:termino', component: SearchComponent },
  
    
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });