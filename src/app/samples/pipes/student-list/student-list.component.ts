import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/Student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  isEditing: boolean = false;
  isInserting: boolean = false;
  stdIdToEdit: number;


  students: Student[];
  totalMarks: number;

  
  constructor(private studentService : StudentService) {
 
  }


  ngOnInit(){

    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;

  }

  OnInsertClicked(){
    this.isInserting = true;
  }
  OnInsertCancelled(){
    this.isInserting = false;
  }
  OnInsertSaved(){
    
    this.isInserting = false;
  }

  OnEditClicked(stdId: number){
    this.isEditing = true;
    this.stdIdToEdit = stdId;
  }

  OnEditCancelled(){
    this.isEditing = false;
  }

  OnEditSaved(student: Student){
 

    this.isEditing = false;
}

}
