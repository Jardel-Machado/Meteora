import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './paginas/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { FacilidadesComponent } from './components/facilidades/facilidades.component';
import { NovidadesComponent } from './components/novidades/novidades.component';


@NgModule({
  declarations: [
    
  
  
    HomeComponent,
               CarouselComponent,
               CategoriaComponent,
               ProdutoComponent,
               FacilidadesComponent,
               NovidadesComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    SharedModule
  ],
  providers: [],

})
export class CoreModule { }
