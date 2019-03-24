import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescartePage } from './descarte';

@NgModule({
  declarations: [
    DescartePage,
  ],
  imports: [
    IonicPageModule.forChild(DescartePage),
  ],
})
export class DescartePageModule {}
