import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {


  modal = false;

    iconSelect = '';

    selectedImage: any;

    openModal(){
      this.modal = !this.modal
    }

    iconSelected(icon: string){
      this.iconSelect = icon;
    }

    imgSelected(event: any){
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.selectedImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
}
