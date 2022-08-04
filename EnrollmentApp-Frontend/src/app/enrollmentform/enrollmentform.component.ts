import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-enrollmentform',
  templateUrl: './enrollmentform.component.html',
  styleUrls: ['./enrollmentform.component.css']
})
export class EnrollmentformComponent implements OnInit {
  enrollmentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')])),
    phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')])),
    address: new FormControl(''),
    qualification: new FormControl(''),
    passout: new FormControl(''),
    skillset: new FormControl(''),
    employmentStatus: new FormControl(''),
    technology: new FormControl(''),
    year: new FormControl(''),
    course: new FormControl(''),
    image:  new FormControl('')
  })

  onSubmit(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}