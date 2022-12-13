import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UsuarioService{

    private api="http://localhost:8085/usr";
    private cid= "";
    private log="http://localhost:8085/usr/login";
    constructor(private http: HttpClient) { }

    setId(id:number){
      this.cid="http://localhost:8085/usr/"+id
    }

    public login(usuario:any):Observable<any>{
      return this.http.get(this.log,usuario)
    }

    public guardar(persona:any):Observable<any>{
        return this.http.post(this.api,persona)
    }

    public actualizar(usuario:any):Observable<any>{
      return this.http.put(this.api,usuario)
    }

    public searchAll():Observable<any>{
      return this.http.get(this.api)
    }

    public searchById():Observable<any>{
      return this.http.get(this.cid)
    }

    public eliminar():Observable<any>{
      return this.http.delete(this.cid)
    }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'*'
        })
      }

  }