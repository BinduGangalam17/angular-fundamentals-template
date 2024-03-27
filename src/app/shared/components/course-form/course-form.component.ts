import { Component } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators, FormArray
} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm!: FormGroup;

  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
    this.courseForm = new FormGroup({
      title: new FormControl('',[Validators.required, Validators.minLength(2)]),
      description: new FormControl('',[Validators.required, Validators.minLength(2)]),
      author: new FormControl('',[]),
      authors: this.fb.array([]),
      duration: new FormControl('',[Validators.required, Validators.minLength(0)])
    });
  }
  // getter for authors
  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }


  onSubmit() {
    if (this.courseForm.invalid) {
      return;
    }
  }



  addAuthor() {
    const author = this.courseForm.get('author')?.value;
    this.authors.push(this.fb.control(author));
    // reset author field
    this.courseForm.get('author')?.reset();
  }

  removeAuthor(index: number) {
    this.authors.removeAt(index);
  }
  
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.
  
}
