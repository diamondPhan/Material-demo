import { Component, OnInit,VERSION, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-addnewpet',
  templateUrl: './addnewpet.component.html',
  styleUrls: ['./addnewpet.component.css']
})
export class AddnewpetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ame = 'Angular ' + VERSION.major;
  dataimage:any;

   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';


  uploadFileEvt(imgFile: any) {
  //   if (imgFile.target.files && imgFile.target.files[0]) {
  //     this.fileAttr = '';
  //     Array.from(imgFile.target.files).forEach((file: File) => 
  //       {
  //       this.fileAttr += file.name ;
  //     }
  //     );

  //     // HTML5 FileReader API
  //     let reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       let image = new Image();
  //       image.src = e.target.result;
  //       image.onload = rs => {
  //         let imgBase64Path = e.target.result;
  //         console.log(imgBase64Path);
  //         this.dataimage = imgBase64Path;
  //       };
  //     };
  //     reader.readAsDataURL(imgFile.target.files[0]);
      
  //     // Reset if duplicate image uploaded again
  //     this.fileInput.nativeElement.value = "";
  //   } else {
  //     this.fileAttr = 'Choose File';
  //   }
   }
}
    

