import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Viajero } from '../clases/viajero';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

constructor(private fb: FormBuilder,private route: ActivatedRoute, private router:Router) { }

inscripcionForm: FormGroup;
parametro:any;
viajero: Viajero;

  ngOnInit(): void {
    this.parametro= this.route.snapshot.params;
  

  if (Object.keys(this.parametro).length) {
    this.viajero = this.parametro;
  }

  this.initForm(this.viajero);
}



initForm (elemento : Viajero){

 this.inscripcionForm = this.fb.group({
 nombre : [elemento ? elemento.nombre:'',Validators.required],
 apellido : [elemento ? elemento.apellido:''],
 edad : [elemento? elemento.edad:''],
 destino : [elemento? elemento.destino:''],
 anio : [elemento? elemento.anio:''],
 }); 
};

// submit(){
 
// }


cargarDatos(){
let viaje : Viajero = this.inscripcionForm.value;
this.router.navigate(['app-consultar', viaje]);

};
 
}