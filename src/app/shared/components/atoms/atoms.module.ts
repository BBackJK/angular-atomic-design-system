import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { AppRoutingModule } from '@pages/app-routing.module';

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  exports: [ ButtonComponent, TextComponent ],
  declarations: [ ButtonComponent, TextComponent ]
})
export class AtomsModules {}
