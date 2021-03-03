import { Component, OnInit,VERSION, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnewpet',
  templateUrl: './addnewpet.component.html',
  styleUrls: ['./addnewpet.component.css']
})
export class AddnewpetComponent implements OnInit {
  public addNewForm=new FormGroup({
    petName:new FormControl(),
    type: new FormControl(),
    description: new FormControl(),
    gender: new FormControl(),
    vaccineA:new FormControl(),
    vaccineB:new FormControl(),
    vaccineC:new FormControl(),
    promotion:new FormControl()
});
// addNewForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.addNewForm=this.fb.group({
    //   petName:['hihi',Validators.required]
    // })
  }
onSubmit(){
  let temp = JSON.stringify(this.addNewForm.value);
  console.log("name:"+ temp);
}
   
}
    

