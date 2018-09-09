import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    exports: [
        CommonModule
    ],
    declarations: [
    ],
    entryComponents: []
})
export class SharedModule { }
