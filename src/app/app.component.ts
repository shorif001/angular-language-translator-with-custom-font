import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-language-translator';

  constructor(private translateService: TranslateService) { }

  selectLanguage(event: any) {
    this.translateService.use(event.target.value)
  }
}
