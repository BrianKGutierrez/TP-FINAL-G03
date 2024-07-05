import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';
import { Local } from '../../models/local';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-locales',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule,FormsModule],
  templateUrl: './locales.component.html',
  styleUrl: './locales.component.css'
})
export class LocalesComponent {
  locales: Array<Local>;
  constructor(private localService: LocalService,private router:Router)
   {
    this.locales = [];
    this.ObtenerLocales();
  }
  ngOnInit(): void {
    this.ObtenerLocales();
  }
  ObtenerLocales(){
    this.localService.getLocales().subscribe(
      (data:any) =>{
        this.locales=data;
      },
      error=>{
        console.log(error);
      }
    
     );
  }
  agregarLocal(){
    this.router.navigate(['formLocal',0]);
    }
    
    ModificarLocal(id:string){
      this.router.navigate(['formLocal',id]);
    }

    EliminarLocal(id:string){
      this.localService.deleteLocal(id).subscribe(
        (data:any) =>{
          alert("Ticket eliminado correctamente")
        },
        error=>{
          console.log(error);
        }
      
       );
      this.ObtenerLocales();
    }

}
