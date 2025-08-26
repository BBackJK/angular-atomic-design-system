import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModules } from '@shared/components/atoms/atoms.module';

import { ListContainerComponent } from './list-container/list.container.component';

@NgModule({
  imports: [ CommonModule, AtomsModules ],
  exports: [ ListContainerComponent ],
  declarations: [ ListContainerComponent ]
})
export class MoleculesModule {}
