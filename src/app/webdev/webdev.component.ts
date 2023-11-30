import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit {

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
