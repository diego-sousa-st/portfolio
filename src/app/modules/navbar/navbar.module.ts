import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenubarModule } from 'primeng/menubar'



@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		MenubarModule,
		SharedModule,
	],
	exports: [NavbarComponent]
})
export class NavbarModule { }
