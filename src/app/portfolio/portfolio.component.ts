import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [
    trigger('fade', [
      state('visible', style({ display: 'block', opacity:1 })),
      state('hidden', style({ display: 'none',opacity:0 })),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class PortfolioComponent implements OnInit {
  blogItems: any[] = [
    {
      imageSrc: 'assets/images/port_1 (1).png',
      category: 'Design graphique',
      title: 'AXADIA',
      
      description: 'AXADIA, l’expérience métavers d’AXA. Nous avons réalisé le branding de l’expérience ainsi que les assets créatifs pour sa sortie : logo, trailer vidéo…',
      descEn: 'AXADIA, AXAs metaverse experience. We created the branding for the experience, as well as the creative assets for its release: logo, video trailer...'
    },
    {
      imageSrc: 'assets/images/port_1 (2).png',
      category: 'Metaverse',
      title: 'Double Jump x Captain Tsubasa',
      description: 'La franchise du célèbre manga nippon Captain Tsubasa (Olive et Tom) se lance dans le web3 avec une collection NFT. Nous accompagnons le studio Double Jump Tokyo sur la sortie en France : PR, influence, conseils…',
      descEn:'The famous Japanese manga franchise Captain Tsubasa (Olive and Tom) launches on web3 with an NFT collection. Were working with the Double Jump Tokyo studio on the French release: PR, influence, advice...'
    }, {
      imageSrc: 'assets/images/port_1 (3).png',
      category: 'Ads',
      title: 'Qapsul',
      description: 'Une nouvelle marque résolument écologique pour laquelle nous avons imaginé le nom et créé l’identité visuelle (réalisation du logo, de la charte graphique).',
      descEn:'A new, resolutely ecological brand for which we imagined the name and created the visual identity (logo, graphic charter).'
    }, {
      imageSrc: 'assets/images/port_1 (4).png',
      category: 'Design graphique',
      title: 'Esprit Trek',
      description: 'Stratégie acquisition digitale, A/B testing, SEA, Facebook & Instagram Ads.',
      descEn:'Digital acquisition strategy, A/B testing, SEA, Facebook & Instagram Ads.'
    }, {
      imageSrc: 'assets/images/port_1 (1).png',
      category: 'Développement Web',
      title: 'AXADIA',
      description: 'AXADIA, l’expérience métavers d’AXA. Nous avons réalisé le branding de l’expérience ainsi que les assets créatifs pour sa sortie : logo, trailer vidéo…',
      descEn:'AXADIA, AXAs metaverse experience. We created the branding for the experience, as well as the creative assets for its release: logo, video trailer...'
    },
  ];
  language: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {

    this.filterBlogItems('Tous');
    this.language = this.cookieService.get('lang');
  }

  isActive: string = 'Tous';
  filteredItems: any[] = [];
  toggleActive(element: string) {
    this.isActive = element;

    this.filterBlogItems(element);
  }

  filterBlogItems(category: string) {
    this.blogItems.filter(item => {

      item.visible = (category.toLowerCase() === 'tous' || item.category.toLowerCase() === category.toLowerCase());
    });
    this.filteredItems = this.blogItems.filter(item => item.visible);

    console.log(this.filteredItems);
  }


}

