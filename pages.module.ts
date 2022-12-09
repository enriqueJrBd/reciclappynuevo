import { ComponentesModule } from './../componentes/componentes.module';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoComponent } from './carrito/carrito.component';
import { MispedidosComponent } from './mispedidos/mispedidos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuarioComponent } from './usuario/usuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    CarritoComponent,
    MispedidosComponent,
    PedidosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ComponentesModule,
    
  ]
})
export class PagesModule { }
