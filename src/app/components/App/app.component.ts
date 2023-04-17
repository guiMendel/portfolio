import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Portfolio';

  // Which tab is currently selected
  selectedTabIndex = 0;

  trackTab(_: number, tab: AppComponent['tabs'][number]) {
    return tab.title;
  }

  tabs = [
    { title: 'Portfolio' },
    { title: 'Experience' },
    { title: 'About' },
    { title: 'Contact' },
  ];
}
