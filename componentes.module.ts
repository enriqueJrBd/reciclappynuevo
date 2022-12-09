import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ItemcarritoComponent } from './itemcarrito/itemcarrito.component';



@NgModule({
  declarations: [
    ProductoComponent,
    ItemcarritoComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ], exports: [
    ProductoComponent,
    ItemcarritoComponent
  ]
})
export class ComponentesModule { }
