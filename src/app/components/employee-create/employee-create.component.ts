import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {
  @Input() employeeDetails = { name: '', email: '', phone: 0 };

  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}

  addEmployee(dataEmployee: any) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list']);
    })
  }

}
