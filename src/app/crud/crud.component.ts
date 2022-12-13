import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Entity/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  usuarios:any[]=[];
  usuario:Usuario=new Usuario();
  respuesta:any=null;

  idBusqueda:number=0;

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.searchAll().subscribe(lista =>{
      this.usuarios=lista
    },error =>{
      window.alert(error)
    })
  }


  public agregar (){
    this.usuarioService.guardar(this.usuario).subscribe(resp=>{
      this.respuesta=resp;
    },error=>{
      window.alert(error)
    });
  }

  public setusr(usr:Usuario){
    this.usuario=usr;
  }

  public eliminar(){
    this.usuarioService.setId(this.usuario.id)
    this.usuarioService.eliminar().subscribe();
    this.usuarios = this.usuarios.filter(c => c.id != this.usuario.id)
    this.usuario=new Usuario();
  }

  public actualizar(){
    this.usuarioService.actualizar(this.usuario).subscribe();
    this.usuario=new Usuario();
  }

  public buscar(){
    this.usuarios=[];
    this.usuarioService.setId(this.idBusqueda);
    this.usuarioService.searchById().subscribe(user=>{
      this.usuarios[0]=user;
    }, error=>{
      window.alert(error)
    });
  }

  public refresh(){
    this.usuarioService.searchAll().subscribe(lista =>{
      this.usuarios=lista
    },error =>{
      window.alert(error)
    })
  }


}