import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';

import { AtomsModules } from '@shared/components/atoms/atoms.module';

@NgModule({
  imports: [ AtomsModules, ReactiveFormsModule ],
  exports: [ MainComponent ],
  declarations: [ MainComponent ]
})
export class MainModule {}
