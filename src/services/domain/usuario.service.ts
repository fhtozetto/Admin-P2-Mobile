import { StorageService } from './../storage.service';
import { UsuarioDTO } from './../../models/usuario.dto';
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Rx';
import { API_CONFIG } from '../../Config/api.config';

@Injectable()
export class UsuarioService {

    constructor( public http: HttpClient, public storage: StorageService ) {

    }

    findAll() : Observable<UsuarioDTO[]> {
        return this.http.get<UsuarioDTO[]>(`${API_CONFIG.baseUrl}/usuarios`);
    }

    findByNomeUsuario(nomeUsuario: string) : Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/usuarios/nomeusuario?value=${nomeUsuario}`);
    }    
}