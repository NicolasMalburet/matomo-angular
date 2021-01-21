import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  constructor(private matomoTracker: MatomoTracker) {}

  ngOnInit(): void {
    console.log('init');
    this.matomoTracker.setUserId('UserId');
    this.matomoTracker.setDocumentTitle('ngx-Matomo Test');
  }

  whatHappensOnClick(someVal: any) {
    console.log('here');
    this.matomoTracker.trackEvent('category', 'action', 'name', someVal);
  }
}
