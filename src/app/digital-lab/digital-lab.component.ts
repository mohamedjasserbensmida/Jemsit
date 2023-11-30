
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-digital-lab',
  templateUrl: './digital-lab.component.html',
  styleUrls: ['./digital-lab.component.css']
})
export class DigitalLabComponent implements OnInit {

  language: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.language = this.cookieService.get('lang');
  }
  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({behavior: 'smooth'});
    }
  }

  scrollToNFT() {
    const nftSection = document.getElementById('nft');
    console.log(nftSection)
    if (nftSection) {
      nftSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
