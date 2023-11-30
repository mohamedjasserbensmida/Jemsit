

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
language: string;
  constructor(private renderer: Renderer2,private router: Router,private location: Location,private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loadScript('assets/js/navbar.js');
  this.language = this.cookieService.get('lang');
    
  }
  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
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
  

  handleNavigation(url: string): void {
    this.location.go(url);
    location.reload();
  }
  
}

