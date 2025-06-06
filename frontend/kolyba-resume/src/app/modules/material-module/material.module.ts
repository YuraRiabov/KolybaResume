import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

export { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatListModule,
        MatSelectModule,
        MatMenuModule,
        MatSnackBarModule,
        MatDividerModule,
        MatInputModule,
        MatRadioModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule,
        MatTabsModule,
        MatSlideToggleModule,
        DragDropModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatChipsModule,
        MatDialogModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatListModule,
        MatSelectModule,
        MatMenuModule,
        MatSnackBarModule,
        MatDividerModule,
        MatInputModule,
        MatRadioModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatAutocompleteModule,
        DragDropModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatChipsModule,
        MatDialogModule,
    ],
})
export class MaterialModule {}
