import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})
export class PromesaComponent implements OnInit {

  usuarios: any;

  constructor() { }

  ngOnInit(): void {
  
    this.obtenerUsuarios().then((datosUsuarios) =>{
    this.usuarios= datosUsuarios;
    console.log(this.usuarios);  
    });
  
  }

  obtenerUsuarios(){

    const promesa = new Promise((resolve)=>{

     // fetch("https://reqres.in/api/users?page=2")
      fetch("https://primera-app-a.herokuapp.com/")
      .then(res => res.json())
      .then(res => resolve(res))

    });

    return promesa;

  }

}
