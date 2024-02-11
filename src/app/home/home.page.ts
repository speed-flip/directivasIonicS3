import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonInput, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonInput, IonLabel, FormsModule],
})
export class HomePage {
  age: number = 0;
  names: string[] = ['Perro', 'Gato', 'Caballo', 'Vaca', 'Loro'];
  phoneNumber: string = '';

  nota: number = 70;
  colorHex: string = '#2aff2b';
  colorButton: string = 'primary';

  constructor() { }

  sum() {
    this.age++
  }

}
