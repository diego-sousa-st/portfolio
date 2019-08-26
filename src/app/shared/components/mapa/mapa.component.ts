import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.pug',
	styleUrls: ['./mapa.component.sass']
})
export class MapaComponent extends BaseComponent implements OnInit {

	constructor(translate: TranslateService) {
		super(translate);
	}

	ngOnInit() {
	}

}
