
import {Component, OnInit, Renderer2, ElementRef, HostListener} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  language: string;
  constructor(private renderer: Renderer2, private elementRef: ElementRef,private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loadScript('assets/js/home.js');
    this.language = this.cookieService.get('lang');
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


 /* @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    const rowElement = this.elementRef.nativeElement.querySelector('.row.image_animation1');
    const imageElement = this.elementRef.nativeElement.querySelector('#image1');

    const rect = rowElement.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= windowHeight && rect.bottom >= 200) {
      this.renderer.addClass(imageElement, 'animate');
    } else {
      this.renderer.removeClass(imageElement, 'animate');
    }
  }*/



}

