import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layouts/header/header';
import { CommonModule } from '@angular/common';
import { Footer } from './shared/layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,CommonModule,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerce';
}
