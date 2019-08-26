import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';

@NgModule({
	declarations: [MapaComponent],
	imports: [
		CommonModule
	],
	exports: [
		MapaComponent
	]
})
export class MapaModule { }
