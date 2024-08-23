import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roleta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roleta.component.html',
  styleUrls: ['./roleta.component.css'] // Corrigido o nome para "styleUrls"
})
export class RoletaComponent {
  segments: string[] = ['nada','nada','nada','nada','nada','nada','nada','nada','nada','Ganhou']
  segmentsAngulo: number = 360 / this.segments.length;
  postionRotation: number = 0;

  spin() {
    const spin = Math.floor(Math.random() * 10) + 10;
    const randomSegments = Math.floor(Math.random() * this.segments.length);
    const extraDegraus = randomSegments * this.segments.length;
    const totalRolar = (spin * 360) + extraDegraus


    this.postionRotation += totalRolar;
  }
}
