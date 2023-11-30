import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agence-acquisition',
  templateUrl: './agence-acquisition.component.html',
  styleUrls: ['./agence-acquisition.component.css']
})
export class AgenceAcquisitionComponent implements OnInit {

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
