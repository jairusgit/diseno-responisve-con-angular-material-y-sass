import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import data from "../../assets/data.json"; /* Archivo con los datos de cada casa */

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /* Título de la página*/
  title = "Las Casas de Hogwarts";
  /* Objeto con los datos de cada casa para recorrerlo en la vista */
  public items:{
    titulo:string,
    slug: string,
    imagen: string,
    fuente: string,
    fecha: string,
    entradilla: string,
    texto: string
  }[] = data;
}
