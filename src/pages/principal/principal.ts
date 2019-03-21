import { ProdutoDTO } from './../../app/models/produto.dto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../app/services/domain/produto.service';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  items: ProdutoDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService: ProdutoService) {
  }

  ionViewDidLoad() {
    console.log();
    this.produtoService.findAll()
    .subscribe(response => { 
      this.items = response;
    },
    error => {});
  }

}
