import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container text-center py-5">
      <h1 class="display-4">404</h1>
      <p class="lead">Página no encontrada</p>
      <p *ngIf="!isOffline">La ruta que buscas no existe.</p>
      <p *ngIf="isOffline" class="text-danger">Parece que estás sin conexión.<br>Algunas páginas pueden no estar disponibles offline.</p>
      <a routerLink="/" class="btn btn-primary mt-3">Volver al inicio</a>
    </div>
  `
})
export class NotFoundComponent {
  isOffline = !navigator.onLine;
  constructor() {
    window.addEventListener('online', () => this.isOffline = false);
    window.addEventListener('offline', () => this.isOffline = true);
  }
}
