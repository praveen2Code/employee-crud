import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  showForm= false;

  constructor(private fb: FormBuilder) {}

  toggleDisplay() {
    this.showForm = !this.showForm;
  }

  form: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    city: [''],
    contacts: this.fb.array([
      this.fb.group({
        number: [''],
        type: [''],
        description: ['']
      })
    ])
  });

  get contacts() {
    return this.form.get('contacts') as FormArray
  }

  addContacts() {
    this.contacts.push(
      this.fb.group({
        number: [''],
        type: [''],
        description: ['']
      })
    )
  }

  deleteContact(i: number) {
    this.contacts.removeAt(i)
  }

  onSubmit() {
    console.log(this.form.value);
    
  }
}
