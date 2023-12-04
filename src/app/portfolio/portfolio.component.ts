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
      imageSrc: 'assets/images/site1.png',
      category: 'Développement Web',
      title: 'Howardrp',
      description: 'AXADIA, l’expérience métavers d’AXA. Nous avons réalisé le branding de l’expérience ainsi que les assets créatifs pour sa sortie : logo, trailer vidéo…',
      descEn: 'AXADIA, AXAs metaverse experience. We created the branding for the experience, as well as the creative assets for its release: logo, video trailer...',
      link:'https://www.howardrp.com/?fbclid=IwAR1iFDxz78qIodAJK0FwqjPMKHuN_kLQV-S1o0AgMZVsXnM1-rj3pCTr6Aw#/'
    },
    {
      imageSrc: 'assets/images/Contenus-LHDB.jpg',
      category: 'Mobile Applications',
      title: 'Boutique Express',
      description: "Découvrez l'élégance à portée de main avec Boutique Express. Explorez nos collections tendance, profitez d'offres exclusives et simplifiez votre shopping en ligne. Plongez dans un monde de style sans effort, où chaque clic vous rapproche de la mode qui vous distingue",
      descEn:"Discover elegance at your fingertips with Boutique Express. Explore our trendy collections, enjoy exclusive offers, and simplify your online shopping. Immerse yourself in a world of effortless style, where each click brings you closer to the fashion that sets you apart."
    }, {
      imageSrc: 'assets/images/site2.png',
      category: 'Développement Web',
      title: 'ProxyWorkers',
      description: "Une plateforme en ligne qui permet aux utilisateurs d'acheter des proxies, également appelés serveurs proxy. Un proxy est un serveur intermédiaire qui agit comme un intermédiaire entre l'utilisateur et Internet. Il permet aux utilisateurs de masquer leur adresse IP et de contourner les restrictions géographiques imposées par certains sites web.",
      descEn:'an online platform that allows users to purchase proxies, which are also known as proxy servers. A proxy is an intermediary server that acts as a go-between for the user and the internet. It allows users to hide their IP address and bypass geographical restrictions imposed by certain websites.',
      link:'https://proxyworkers.com/#/home'
    },
    {
      imageSrc: 'assets/images/des.png',
      category: 'Desktop Applications',
      title: 'Le Bouffle',
      description: "Plongez dans une expérience culinaire exceptionnelle avec l'application de bureau Le Bouffle. Explorez notre menu exquis, passez vos commandes en toute simplicité et délectez-vous de saveurs uniques. Découvrez une nouvelle dimension de la gastronomie, où la commodité rencontre la délicatesse des plats de qualité.",
      descEn:"Dive into an exceptional culinary experience with the Le Bouffle desktop application. Explore our exquisite menu, place your orders effortlessly, and savor unique flavors. Discover a new dimension of gastronomy, where convenience meets the delicacy of high-quality dishes."
    },
  ];
  language: string;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {

    this.filterBlogItems('Tous');
    this.language = this.cookieService.get('lang');
  }

  isActive: string = 'Tous';
  filteredItems: any[] = [
  ];
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

