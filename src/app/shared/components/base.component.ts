import { TranslateService } from '@ngx-translate/core';
import { Flag } from '../models/i18n.model';

export class BaseComponent {

	translate: TranslateService;

	constructor(translate: TranslateService) {
		this.translate = translate;
	}

	translateItem(key: string): string {
		let value = "";
		if(key) {
			this.translate.get(key).subscribe((value: string) => value = value);
		}
		return value;
	}

}