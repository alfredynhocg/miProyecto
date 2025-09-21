import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [CommonModule],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  notificationPermission: NotificationPermission | null = null;
  feedbackMsg = '';

  constructor() {
    if ('Notification' in window) {
      this.notificationPermission = Notification.permission;
    }
  }

  askNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        this.notificationPermission = permission;
        if (permission === 'granted') {
          this.feedbackMsg = '¡Permiso concedido! Ahora puedes recibir notificaciones.';
        } else if (permission === 'denied') {
          this.feedbackMsg = 'Has denegado las notificaciones.';
        } else {
          this.feedbackMsg = 'No se ha concedido el permiso.';
        }
      });
    }
  }

  showNotification() {
    if ('Notification' in window && this.notificationPermission === 'granted') {
      const notification = new Notification('¡Tienes una nueva notificación!', {
        body: 'Visita nuestro blog para ver el nuevo contenido exclusivo para ti.',
        icon: 'assets/icons/icon-192x192.png',
        data: { url: '/' }
      });
      notification.onclick = (event) => {
        event.preventDefault();
        window.open(notification.data.url, '_blank');
      };
    } else {
      this.feedbackMsg = 'Debes permitir las notificaciones primero.';
    }
  }
}
