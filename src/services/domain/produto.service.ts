import { ProdutoDTO } from './../../models/produto.dto';
import { API_CONFIG } from './../../Config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProdutoService {

    constructor( public http: HttpClient ) {

    }

    findAll() : Observable<ProdutoDTO[]> {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produtos`);
    }
    
}