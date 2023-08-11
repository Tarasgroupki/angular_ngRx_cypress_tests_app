import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatExpansionModule, MatSelectModule, MatListModule, MatDatepickerModule, MatCheckboxModule],
  exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatExpansionModule, MatSelectModule, MatListModule, MatDatepickerModule, MatCheckboxModule]
})

export class MaterialModule { }
