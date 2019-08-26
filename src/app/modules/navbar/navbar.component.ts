import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.pug',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent extends BaseComponent implements OnInit {

	constructor(translate: TranslateService) {
		super(translate);
	}

	ngOnInit() {
	}

}
