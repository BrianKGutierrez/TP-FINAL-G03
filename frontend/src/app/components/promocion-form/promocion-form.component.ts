import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Promocion } from '../../models/promocion';
import { PromocionService } from '../../services/promocion.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Local } from '../../models/local';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-promocion-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './promocion-form.component.html',
  styleUrl: './promocion-form.component.css'
})
export class PromocionFormComponent {
  promocion!: Promocion;
  file: { base64: string, safeurl: SafeUrl | null };
  submitted: boolean = false;
  accion: string = '';
  locales: Array<Local> = [];
  constructor(private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private promocionService: PromocionService,
    private localService: LocalService,
    private router: Router
  ) {
    this.iniciarVariable();
    this.cargarLocales();
    this.file = { base64: '', safeurl: null }

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.iniciarVariable();
        this.accion = 'new'
      } else {
        this.cargarPromocion(params['id']);
        this.accion = 'update'
      }
    });
  }
  cargarPromocion(id: string) {
    this.promocionService.getPromocionById(id).subscribe(
      (result) => {
        Object.assign(this.promocion, result);
        this.promocion.local = this.locales.find(local => (local._id === this.promocion.local._id))!
      }
    )
  }
  cargarLocales() {
    this.locales = new Array<Local>();
    this.localService.getLocales().subscribe(
      (data) => {
        let vlocal: Local = new Local();
        data.forEach((element: any) => {
          Object.assign(vlocal, element);
          this.locales.push(vlocal);
          vlocal = new Local();
        });
      },
      (error) => {
        console.log(error);
      }

    )
  }

  limpiar() {
    this.iniciarVariable();
  }
  procesarForm() {
    this.submitted = true;
  }

  iniciarVariable() {
    this.promocion = new Promocion();
  }


  registrarPromocion() {
    this.promocionService.addPromocion(this.promocion).subscribe(
      result => {
        if (result.status == 1) {
          alert("El producto se agrego correctamente");
          this.router.navigate(['promocion']);
        }
      },
      error => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )
  }
  actualizarPromocion() {
    this.promocionService.updatePromocion(this.promocion).subscribe(
      result => {
        if (result.status == 1) {
          alert("El producto se ha modificado correctamente");
          this.router.navigate(['promocion']);
        }
      },
      error => {
        alert("Ha ocurrido un error");
        console.log(error);
      }
    )
  }


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        let base64 = reader.result as string
        this.promocion.imagen = base64;
        let safeurl: SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(base64);
        this.file.base64 = base64;
        this.file.safeurl = safeurl;
      };
      reader.readAsDataURL(file);
    }
  }

}
