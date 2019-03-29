import { UsuarioDTO } from './../../app/models/usuario.dto';
import { UsuarioService } from './../../app/services/domain/usuario.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../app/services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  nomeUsuario: string;
  usuario: UsuarioDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public usuarioService: UsuarioService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.nomeUsuario) {
      this.usuarioService.findByNomeUsuario(localUser.nomeUsuario)
      .subscribe(response => {
        this.usuario = response;
      }, 
      error => {});
    }
  }
}
