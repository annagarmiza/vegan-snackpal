import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { country_list } from './../../countries';
import { snack_preferences } from './../../snack-preferences';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formControl = new FormControl();
  countries: Array<string> = country_list.map((x) => x.name);
  autoFilter!: Observable<string[]>;

  //snacks
  allSnacksPref: Array<string> = snack_preferences;
  userSnackPref: Array<string> = [];
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  snackCtrl = new FormControl();
  filteredSnacks!: Observable<string[]>;

  @ViewChild('snackInput') snackInput!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {
    this.filteredSnacks = this.snackCtrl.valueChanges.pipe(
      startWith(null),
      map((value: string | null) =>
        value
          ? this.mat_filter(value, this.allSnacksPref)
          : this.allSnacksPref.slice()
      )
    );
    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.mat_filter(value, this.countries))
    );
  }
  add(
    event: MatChipInputEvent,
    userSelection: string[],
    formCntrl: FormControl
  ): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      userSelection.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    formCntrl.setValue(null);
  }

  remove(value: string, userSelection: string[]): void {
    const index = userSelection.indexOf(value);

    if (index >= 0) {
      userSelection.splice(index, 1);
    }
  }

  selected(
    event: MatAutocompleteSelectedEvent,
    userSelection: string[],
    //input: ElementRef<HTMLInputElement>,
    formCtrl: FormControl
  ): void {
    userSelection.push(event.option.viewValue);
    // input.nativeElement.value = '';
    this.snackInput.nativeElement.value = '';
    formCtrl.setValue(null);
  }

  private mat_filter(value: string, array: string[]): string[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    return array.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
    // return this.allSnacksPref.filter((value) =>
    //   value.toLowerCase().includes(filterValue)
    // );
  }
}
