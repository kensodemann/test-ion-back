import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CanNavigateAway } from '../interfaces/can-navigate-away';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss']
})
export class ChildPage implements OnInit, CanNavigateAway {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async canNavigateAway(toRoute: string): Promise<boolean> {
    if (!toRoute.includes('tab1')) {
      return true;
    }

    const yesNo = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'You wanna go?',
      buttons: [
        { text: 'Yes', role: 'yes' },
        { text: 'No', role: 'no' }
      ]
    });
    yesNo.present();
    const { role } = await yesNo.onDidDismiss();

    return role === 'yes';
  }
}
