import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './main.component';

import { AtomsModules } from '@shared/components/atoms/atoms.module';
import { MoleculesModule } from '@shared/components/molecules/molecules.module';

@NgModule({
  imports: [ AtomsModules, MoleculesModule, ReactiveFormsModule ],
  exports: [ MainComponent ],
  declarations: [ MainComponent ]
})
export class MainModule {}
