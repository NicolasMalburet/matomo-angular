import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private matomoTracker: MatomoTracker, private router: Router) {}
  ngOnInit(): void {
    console.log('init');
    this.matomoTracker.setUserId('UserId');
    this.matomoTracker.setDocumentTitle('ngx-Matomo Form');
  }
  onSubmit(f: NgForm) {
    this.matomoTracker.trackEvent('Form', 'Submit', f.value.first);
    if (f.valid) this.router.navigate(['/']);
  }
}
