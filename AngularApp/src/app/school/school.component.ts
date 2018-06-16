import { Component, OnInit } from '@angular/core';
import {  NgForm } from "@angular/forms";
import { SchoolService } from "../shared/school.service";
import { School } from "../shared/school.model";
declare var M:any;
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
  providers:[SchoolService]
})
export class SchoolComponent implements OnInit {

  constructor(private schoolService:SchoolService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshSchoolList();
  }
  resetForm(form?: NgForm){  
    if(form)
    form.reset();
    this.schoolService.selectedSchool = {
      _id:"",
      name:"",
      address:"",
      board:"",
      mobileno:null
    }
  }
  /*onSubmit(form:NgForm){
    if(form.value._id==""){
    
this.schoolService.postSchool(form.value).subscribe((res)=>{
      this.resetForm(form); 
      this.refreshSchoolList(); 
      M.toast({html: 'Saved successfully',classes:'rounded'});
    });
  }
  else{
    this.schoolService.putSchool(form.value).subscribe((res)=>{
      this.resetForm(form); 
      this.refreshSchoolList();
      M.toast({html: 'Updated successfully',classes:'rounded'});
    
  });
}
}*/
onSubmit(form: NgForm) {
  if (form.value._id == "") {
    this.schoolService.postSchool(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshSchoolList();
      M.toast({ html: 'Saved successfully', classes: 'rounded' });
    });
  }
  else {
    this.schoolService.putSchool(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshSchoolList();
      M.toast({ html: 'Updated successfully', classes: 'rounded' });
    });
  }
}

  refreshSchoolList(){
    this.schoolService.getSchoolList().subscribe((res)=>{
      this.schoolService.schools=res as School[];
    });
  }
  onEdit(s:School){
    this.schoolService.selectedSchool=s;

  }
  onDelete(_id:string,form:NgForm){
    if(confirm('Are you sure to delete this record?')==true){
       this.schoolService.deleteSchool(_id).subscribe((res)=>{
           this.refreshSchoolList();
           this.resetForm(form); 
           M.toast({html: 'Deleted successfully',classes:'rounded'});
       });
    }
  }

}
