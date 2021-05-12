import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { LinkComponent } from './link/link.component';

import { InputRadioComponent, InputTextComponent, InputCheckboxComponent } from './input';

import { AppRoutingModule } from '@pages/app-routing.module';

@NgModule({
  imports: [ CommonModule, AppRoutingModule, ReactiveFormsModule ],
  exports: [ ButtonComponent, TextComponent, LinkComponent, InputRadioComponent, InputTextComponent, InputCheckboxComponent ],
  declarations: [ ButtonComponent, TextComponent, LinkComponent, InputTextComponent, InputRadioComponent, InputCheckboxComponent ]
})
export class AtomsModules {}
