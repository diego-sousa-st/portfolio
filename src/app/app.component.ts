import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './shared/models/i18n.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.pug',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {

	constructor(translate: TranslateService) {
		this.configTranslateService(translate);
	}

	private configTranslateService(translate: TranslateService) {
		translate.setDefaultLang(Language.pt);
		translate.use(Language.pt);
	}
}
