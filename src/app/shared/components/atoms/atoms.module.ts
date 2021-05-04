import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { LinkComponent } from './link/link.component';

import { AppRoutingModule } from '@pages/app-routing.module';

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  exports: [ ButtonComponent, TextComponent, LinkComponent ],
  declarations: [ ButtonComponent, TextComponent, LinkComponent ]
})
export class AtomsModules {}
