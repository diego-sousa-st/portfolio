import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapaModule } from './components/mapa/mapa.module';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		LeafletModule,
		MapaModule
	]
})
export class SharedModule { }
