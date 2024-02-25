import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomIfDirective } from './custom-directive/CustomIf.directive';
import { FormsModule } from '@angular/forms';
import { CustomifComponent } from './samples/customif demo/customif.component';
import { ViewChildComponent } from './samples/view-child/view-child.component';
import { CounterComponent } from './samples/view-child/counter/counter.component';
import { ServerElementComponent } from './samples/Input-Output/server-element/server-element.component';
import { OutputviewComponent } from './samples/Input-Output/demo-view/outputview/outputview.component';
import { CockpitComponent } from './samples/Input-Output/cockpit/cockpit.component';
import { ProductDashboardComponent } from './samples/content projection/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './samples/content projection/product-dashboard/product-widget/product-widget.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { TreeViewComponent } from './samples/tree-view/tree-view.component';
import { ReactiveFormComponent } from './samples/forms/reactive-form/reactive-form.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomifComponent,
        CustomIfDirective,
        ViewChildComponent,
        CounterComponent,
        ServerElementComponent,
        OutputviewComponent,
        CockpitComponent,
        ProductDashboardComponent,
        ProductWidgetComponent,
        TreeViewComponent,
        ReactiveFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTreeModule, 
        MatButtonModule, 
        MatIconModule
    ]
})
export class AppModule { }
