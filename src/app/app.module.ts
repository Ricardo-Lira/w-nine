import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from "@angular/http";

//RUTAS

import { app_routing } from "./app.routes";

//SERVICIOS

import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioItemComponent } from './components/portafolio-item/portafolio-item.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortafolioItemComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
   
  ],
  providers: [InformacionService,  ProductosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
