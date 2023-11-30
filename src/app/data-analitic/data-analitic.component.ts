import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-analitic',
  templateUrl: './data-analitic.component.html',
  styleUrls: ['./data-analitic.component.css']
})
export class DataAnaliticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({behavior: 'smooth'});
    }
  }

}
