import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/actions/user.action';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor( 
    public fb: FormBuilder,
    public store: Store) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm( ) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(name, email) {
    // console.log(name, email);
    this.store.dispatch( new AddUser({ name, email}));
  }

}
