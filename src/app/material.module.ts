import {NgModule} from '@angular/core';
import {MatToolbarModule, MatIconModule,MatCardModule, MatButtonModule, MatInputModule, MatListModule, MatGridListModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule
];

@NgModule({
    imports:modules,
    exports:modules
})
export class MaterialModule {}