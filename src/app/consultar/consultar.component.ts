import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConectaService } from '../servicios/conecta.service';
import { Viajero } from '../clases/viajero';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})


export class ConsultarComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'edad','destino','anio','editar'];
  dataSource: any[] = [];

  constructor(private router:Router,private conectaService: ConectaService,private route: ActivatedRoute) { }

  parametro:any;

  ngOnInit(): void {

  this.getPasajeros();
  }


  // este metodo esta en el componente conecta.service.ts
    
  getPasajeros() {
    this.conectaService.getPasajeros().subscribe((pasajeros) => {
    //	debugger;
      this.dataSource = pasajeros;

      this.parametro = this.route.snapshot.params;

    if (Object.keys(this.parametro).length) {
      this.recibePasaje(this.parametro);
    }

    });
  }

  recibePasaje(a1: Viajero) {
      
      this.dataSource.push(a1);
    };


  goToEditar(user) {		
        this.router.navigate(["/app-comprar",user]);
      }
  

      
}