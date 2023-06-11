import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.css'],
})
export class DetallePerfilComponent implements OnInit {

  constructor(private perfilService: PerfilService, private fb: FormBuilder) {}

  jwtHelper = new JwtHelperService();

  userToken: any;
  user: any;
  myFiles: any;

  perfilForm = this.fb.group({
    name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    avatar: [null],
  });

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.userToken = this.jwtHelper.decodeToken(token);
    }

    this.get();
  }

  get() {
    this.perfilService.getById(this.userToken._id).subscribe((data) => {
      this.user = data;
	  this.perfilForm.patchValue({
		name: this.user.name,
		last_name: this.user.last_name,
		phone: this.user.phone
	  })
    });
  }

  update() {
    const formData = new FormData();

    if (this.myFiles) {
      formData.append('avatar', this.myFiles, this.myFiles.name);
    }

    formData.append(
      'name',
      this.perfilForm.get('name')?.value || ''
    );
    formData.append(
      'last_name',
      this.perfilForm.get('last_name')?.value || ''
    );
    formData.append('phone', this.perfilForm.get('phone')?.value || '');

    this.perfilService.update(this.user._id, formData);
  }

  url: any;
  msg: any;

  imgAvatar(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'No seleccionaste ninguna imagen';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = 'Solo estan permitidas imágenes';
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  onFileChanged(event: any) {
    this.myFiles = event.target.files[0];
  }
}
