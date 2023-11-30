
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: string;
  lang: string;
  title = 'VD';
  constructor(private http: HttpClient,private cookieService: CookieService) { }
  
  ngOnInit() {
    this.lang = this.cookieService.get('lang');
    if(!this.lang){
      this.cookieService.set('lang', 'en');
      // Fetch the user's IP address // https://api.myip.com
    this.http.get('https://api.ipify.org?format=json').subscribe(
      (data: any) => {
        const userIP = data.ip;
        console.log(userIP)

        // Fetch the user's geolocation based on the IP address
        
        this.http.get(`https://api.ipgeolocation.io/ipgeo?apiKey=e57456fae9c5447a90f98aa4549f73de&ip=${userIP}`).subscribe(
          (response: any) => {
            const userCountryCode = response.country_code2;
            console.log(userCountryCode)

            // Use the user's country code to determine the language
            this.language = this.getUserLanguage(userCountryCode);
            this.cookieService.set('lang', this.language);
            window.location.reload;
            console.log(this.language)
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
    }
    

    
  }

  getUserLanguage(countryCode: string): string {
    // Implement your own logic to map country codes to language codes
    // Here's an example that assumes French-speaking countries use 'fr' and all others use 'en' ,'TN'
    if (['FR', 'CA', 'BE', 'CH'].includes(countryCode.toUpperCase())) {
      return 'fr';
    } else {
      return 'en';
    }
  }
}

