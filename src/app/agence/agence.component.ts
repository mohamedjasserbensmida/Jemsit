
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {
  language: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.language = this.cookieService.get('lang');
  }



}
