import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private toastr:ToastrService) { }

  ngOnInit() {
    this.employeeService.refreshList();
  }
  populateForm(emp:Employee){

    this.employeeService.formData = Object.assign({},emp);
  }
  onDelete(id:number){
    this.employeeService.deleteEmployee(id).subscribe(res => {
      this.toastr.info("Employee Deleted",'Employee Delete');
      this.employeeService.refreshList();
    })
  }
}
