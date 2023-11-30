
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  language: string;
  constructor(private cookieService: CookieService) { }


  ngOnInit(): void {
    this.language = this.cookieService.get('lang');
  }

}

