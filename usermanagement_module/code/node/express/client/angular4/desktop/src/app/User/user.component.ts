import { isBoolean } from 'util';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { IUser } from './user';
import { UserService } from './user.service';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  private user: IUser = {
  	id: 0,
  	firstname: '', lastname: '', username: '', password:''
  };
  private listofusers:IUser[];
  private create = false;
  private listuser = true;
  private listofauthority:IUser[];
  private users= {};
  private selectedusers = [];
  
  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef , private userservice:UserService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    
    this.listofuser();
  }

  clearuserdetails(){
    this.users = {};
  }
  

  listofuser(){
    this.userservice.getalluser().subscribe(
      data => {
        console.log("data", data);
        this.listofusers = data
        this.toastr.success("Success!");
        this.getauthority();
      },
      error => {
        this.toastr.error(
          "Check the browser console to see more info.",
          "Error!"
        );
      }
    );
}

getauthority(){
  this.userservice.getallauthority().subscribe(
    data =>{
      this.listofauthority = data;
    },
    error => {
      this.toastr.error("cannot get all role users info");
    }


    
  )
}
saveUser(){
  this.userservice.saveuser(this.users).subscribe(
    data =>{
      this.toastr.success("user details saved");
      this.clearuserdetails();
    },
    error => {
      this.toastr.error("cannot save the user details")
    }
  )
}

createuser(){
  this.create = true;
  this.listuser = false;

}

createcancel(){
  this.create = false;
  this.listuser = true;
  this.listofuser();
}

openrole(){
this.mymodalSFU.open();

}
saveNewRole(){
  this.userservice.saveNewRole(this.users).subscribe(
    data =>{
      this.toastr.success("New Role created");
     this.getauthority();
     this.clearuserdetails();
    },
    error => {
      this.toastr.error("cannot create New Role");
    }
  )
}

adduser(value){
  if(this.selectedusers.indexOf(value) !== -1){
     this.selectedusers.splice(this.selectedusers.indexOf(value), 1);
   }else{
     this.selectedusers.push(value);    
   }
   
 }


 delete(){
  if(this.selectedusers.length > 0){
  this.userservice.deleteuser(this.selectedusers).subscribe(
    data =>{
      this.toastr.success("success")
      this.listofuser();
    }, 
    error =>{
      this.toastr.error("cannot delete the user in the list")
    }
  );
  }
  else{
    this.toastr.info("please first select user in the list");
  }
 }

 cancelList(){
   this.router.navigate(['home'])
 }

}
