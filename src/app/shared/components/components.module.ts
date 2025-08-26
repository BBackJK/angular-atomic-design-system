import { NgModule } from '@angular/core';

import { AtomsModules } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
@NgModule({
  imports: [],
  exports: [ AtomsModules, MoleculesModule ],
  declarations: []
})
export class ComponentsModule {}
