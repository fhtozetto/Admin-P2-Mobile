import { StorageService } from './../storage.service';
import { UsuarioDTO } from './../../models/usuario.dto';
import { API_CONFIG } from './../../../Config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsuarioService {

    constructor( public http: HttpClient, public storage: StorageService ) {

    }

    findAll() : Observable<UsuarioDTO[]> {
        return this.http.get<UsuarioDTO[]>(`${API_CONFIG.baseUrl}/usuarios`);
    }

    findByNomeUsuario(nomeUsuario: string) : Observable<UsuarioDTO> {
        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token})

        return this.http.get<UsuarioDTO>(
            `${API_CONFIG.baseUrl}/usuarios/nomeusuario?value=${nomeUsuario}`,
            {'headers': authHeader});
    }    
}