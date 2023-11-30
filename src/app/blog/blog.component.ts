
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  animations: [
    trigger('fade', [
      state('visible', style({ display: 'block', opacity:1 })),
      state('hidden', style({ display: 'none',opacity:0 })),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class BlogComponent implements OnInit {
  blogItems: any[] = [
    {
      imageSrc: 'assets/images/Creer-une-arborescence-de-site-web-efficace.png',
      category: 'Digital Marketing',
      date: '02/02/2023',
      title: 'Créer une arborescence de site web efficace (SEO & UX)',
      titleEn: 'Creating an effective website tree structure (SEO & UX)',
      description: 'Découvrez comment optimiser votre présence de marque sur LinkedIn et atteindre votre audience cible en 2023.',
      descEn : 'Find out how to optimize your brand presence on LinkedIn and reach your target audience in 2023.'
    },
    {
      imageSrc: 'assets/images/Creer-une-arborescence-de-site-web-efficace.png',
      category: 'Digital Marketing',
      date: '02/02/2023',
      title: 'Créer une arborescence de site web efficace (SEO & UX)',
      titleEn: 'Creating an effective website tree structure (SEO & UX)',
      description: 'Découvrez comment optimiser votre présence de marque sur LinkedIn et atteindre votre audience cible en 2023.',
      descEn : 'Find out how to optimize your brand presence on LinkedIn and reach your target audience in 2023.'
    },
    {
      imageSrc: 'assets/images/Creer-une-arborescence-de-site-web-efficace.png',
      category: 'Digital Marketing',
      date: '02/02/2023',
      title: 'Créer une arborescence de site web efficace (SEO & UX)',
      titleEn: 'Creating an effective website tree structure (SEO & UX)',
      description: 'Découvrez comment optimiser votre présence de marque sur LinkedIn et atteindre votre audience cible en 2023.',
      descEn : 'Find out how to optimize your brand presence on LinkedIn and reach your target audience in 2023.'
    },
    {
      imageSrc: 'assets/images/Creer-une-arborescence-de-site-web-efficace.png',
      category: 'Digital Marketing',
      date: '02/02/2023',
      title: 'Créer une arborescence de site web efficace (SEO & UX)',
      titleEn: 'Creating an effective website tree structure (SEO & UX)',
      description: 'Découvrez comment optimiser votre présence de marque sur LinkedIn et atteindre votre audience cible en 2023.',
      descEn : 'Find out how to optimize your brand presence on LinkedIn and reach your target audience in 2023.'
    },
    {
      imageSrc: 'assets/images/Creer-une-arborescence-de-site-web-efficace.png',
      category: 'Digital Marketing',
      date: '02/02/2023',
      title: 'Créer une arborescence de site web efficace (SEO & UX)',
      titleEn: 'Creating an effective website tree structure (SEO & UX)',
      description: 'Découvrez comment optimiser votre présence de marque sur LinkedIn et atteindre votre audience cible en 2023.',
      descEn : 'Find out how to optimize your brand presence on LinkedIn and reach your target audience in 2023.'
    },
  ];
  language: string;
  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    console.log('BlogComponent initialized');
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

