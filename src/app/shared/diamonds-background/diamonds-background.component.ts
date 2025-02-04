import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diamonds-background',
  standalone: true,  // Se for um componente standalone
  imports: [CommonModule], 
  templateUrl: './diamonds-background.component.html',
  styleUrls: ['./diamonds-background.component.scss']
})
export class DiamondsBackgroundComponent {
  squares = [
    { color: '#ff66b2' },
    { color: '#9b59b6' },
    { color: '#ff6347' },
    { color: '#00bfff' },
    { color: '#32cd32' },
    { color: '#ff1493' },
    { color: '#f0e68c' },
    { color: '#ff4500' },
    { color: '#9932cc' },
    { color: '#adff2f' },
    { color: '#ff8c00' },
    { color: '#8a2be2' },
    { color: '#ff69b4' },
    { color: '#ff4500' },
    { color: '#2e8b57' },
    { color: '#ff0000' },
    { color: '#008080' },
    { color: '#00fa9a' },
    { color: '#ffff00' },
    { color: '#ff1493' },
    { color: '#d2691e' },
    { color: '#ff00ff' },
    { color: '#a52a2a' },
    { color: '#0000ff' },
    { color: '#ff7f50' },
  ];
}
