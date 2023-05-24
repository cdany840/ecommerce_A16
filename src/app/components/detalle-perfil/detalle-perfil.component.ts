import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
	selector: 'app-detalle-perfil',
	templateUrl: './detalle-perfil.component.html',
	styleUrls: ['./detalle-perfil.component.css']
})
export class DetallePerfilComponent implements OnInit {

	constructor(private perfilService: PerfilService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

	itemId: string = '';
	jwtHelper = new JwtHelperService();

	perfilForm: any;

	user: any;

	private form(): void {
		this.perfilForm = this.fb.group({
			name: [this.user.name, [Validators.required]],
			last_name: [this.user.last_name, [Validators.required]],
			phone: [this.user.phone, [Validators.required, Validators.minLength(10)]],
			avatar: ['', [Validators.required]]
		});
	}

	ngOnInit(): void {
		const token = localStorage.getItem('token');
		if (token) {
			this.user = this.jwtHelper.decodeToken(token);
		}

		this.get();

		this.form();
	}

	get() {
		this.perfilService.getById(this.user._id).subscribe(data => {
			this.user = data;
		});
	}

	update() {
		const data = this.perfilForm.value;
		this.perfilService.update(this.user._id, data).subscribe(data => {
			this.perfilForm.patchValue(data);
		});
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
			this.msg = "Solo estan permitidas imágenes";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.url = reader.result;
		}
	}

}
