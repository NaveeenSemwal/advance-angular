import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClientGroup, ClientGroupMapping } from './client-group';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  clientGroupsItems : ClientGroup[] = [
    { clientGroupId : 1, clientGroupName : 'AA Driving School'},
    { clientGroupId : 2, clientGroupName : 'BSM'},
    { clientGroupId : 3, clientGroupName : 'AA Fleet Services'},
    { clientGroupId : 4, clientGroupName : 'JLR'}

  ]

  clientGroupMappingItems : ClientGroupMapping[] = [
    { clientGroupId : 1, clientName : 'AA Driving School and BSM', FileFormat : '.csv'},
    { clientGroupId : 2, clientName : 'AA Driving School and BSM', FileFormat : '.csv'},
    { clientGroupId : 3, clientName : 'AA Fleet Services', FileFormat : '.csv'},
    { clientGroupId : 4, clientName : 'JLR- Charles Hurst', FileFormat : '.csv'},
    { clientGroupId : 4, clientName : 'JLR-RAFS', FileFormat : '.csv'}

  ]



  constructor(
		private fb: FormBuilder) {
	}

  clientGroups = new FormControl(this.clientGroupsItems);
	
  teamForm = this.fb.group({
		employees: this.fb.array([])
	});
	
	get employees() {
		return this.teamForm.get('employees') as FormArray;
	}

	addEmployeeControl(event : any) {

    this.employees.clear();

    for (let index = 0; index < event.value.length; index++) {
      const element = event.value[index];

      let clients = this.clientGroupMappingItems.filter(x=>x.clientGroupId === element);

      for (let cntr = 0; cntr < clients.length; cntr++) {

        const empGroup = this.fb.group({
          empName: [clients[cntr].clientName],
          city: ['']
        });
        this.employees.push(empGroup);
        
      }
    }


	}

  deleteEmployeeControl(index: number) {
		this.employees.removeAt(index);
	}
	resetEmployees() {
		this.employees.reset();
	}
	clearEmployeeControls() {
		this.employees.clear();
	}
	onFormSubmit() {
		if (this.teamForm.valid) {
		    console.log(this.teamForm.value);
	       this.teamForm.reset();
		}
	}

  ngOnInit(): void {
  }

  names  : string[];
   selectedFirstClientName : string = '';

}