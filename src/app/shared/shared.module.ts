import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [CommonModule, RouterModule, HttpClientModule],
    exports: [
        CommonModule,
        HeaderComponent,
        FooterComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    entryComponents: []
})
export class SharedModule { }
