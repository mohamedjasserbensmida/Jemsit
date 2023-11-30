import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.css']
})
export class Web3Component implements OnInit {
  language: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.language = this.cookieService.get('lang');
  }
  scrollToNFT() {
    const nftSection = document.getElementById('nft');
    console.log(nftSection)
    if (nftSection) {
  nftSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


}

