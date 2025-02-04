import { Component, OnInit } from '@angular/core';
import { DiamondsBackgroundComponent } from '../../shared/diamonds-background/diamonds-background.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  // imports: [DiamondsBackgroundComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  dynamicText: string = "I’m Mariana Rodrigues, a computer scientist exploring the underworlds of technology (and loving it). Come explore my projects and venture with me!";
  
  ngOnInit() {
    this.typeText();
  }

  typeText() {
    let index = 0;
    const textElement = document.getElementById('dynamic-text');
    if (textElement) {
      const interval = setInterval(() => {
        textElement.innerHTML += this.dynamicText.charAt(index);
        index++;
        if (index === this.dynamicText.length) {
          clearInterval(interval);
        }
      }, 80); // Adjust speed by changing the interval time
    }
  }
}
