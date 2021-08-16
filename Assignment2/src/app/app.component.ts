import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  @ViewChild('userForm')
  userForm !: NgForm;

  public PhoneValidate(no:string): boolean{
    if (no.length === 10){
      return new RegExp('^[0-9]{10}$').test(no)
    }
    else{
      return false
    }
  }

  public DOBValidate(datestr:string):boolean{
    return new Date().toISOString().slice(0,10) > datestr
  }

  public EmailValidate(emailstr:string):boolean{
    return new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9_.-]+[.]+[a-zA-Z]{2,}$').test(emailstr)
  }

  Validate(){
    
    if (this.userForm.value.empName === ""){
      alert("Name is required");
    }
    else if (this.userForm.value.empAdd === ""){
      alert("Employee Address is required");
    }
    else if (this.userForm.value.empPhone === "" ){
      alert("phone is required");
    }
    else if (this.userForm.value.empDob === ""){
      alert("Employee Date Of Birth is required");
    }else if (this.userForm.value.empEmail === ""){
      alert("Employee Email is required");
    }
    else if(!this.PhoneValidate(this.userForm.value.empPhone)){
      alert("Phone Number is not valid")
    }
    else if(!this.DOBValidate(this.userForm.value.empDob)){
      alert("Date of Birth is not valid")
    }
    else if(!this.EmailValidate(this.userForm.value.empEmail)){
      alert("Email is not valid")
    }
    else{
      console.log({name:this.userForm.value.empName,
        address: this.userForm.value.empAdd,
        phone: this.userForm.value.empPhone,
        DateOfBirth: this.userForm.value.empDob,
        email: this.userForm.value.empEmail  
        });
    }
  }
}