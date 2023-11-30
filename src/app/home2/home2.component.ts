import {Component, OnInit, Renderer2, ElementRef, HostListener, AfterViewInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {
  language: string;
  apiLoaded:boolean=false;
  constructor(private renderer: Renderer2,private cookieService: CookieService) {
    
   }
 
  async ngOnInit(): Promise<void> {
    this.loadScript('assets/js/home2.js');
   
    setTimeout(() => {
      this.language = this.cookieService.get('lang');
      console.log(this.language);
    }, 1000);
  }

  private loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    this.renderer.appendChild(document.head, script);
  }

  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

