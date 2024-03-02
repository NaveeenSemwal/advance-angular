import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomIfDirective } from './custom-directive/CustomIf.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomifComponent } from './samples/customif demo/customif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { TreeViewComponent } from './samples/tree-view/tree-view.component';
import { ReactiveFormComponent } from './samples/forms/reactive-form/reactive-form.component';
import { HeaderComponent } from './samples/header/header.component';
import { FooterComponent } from './samples/footer/footer.component';
import { SideNavigationComponent } from './samples/side-navigation/side-navigation.component';
import { NgTemplateComponent } from './samples/ng-template/ng-template.component';
import { NgContainerComponent } from './samples/ng-container/ng-container.component';
import { ViewChildComponent } from './samples/component-communication/view-child/view-child.component';
import { CounterComponent } from './samples/component-communication/view-child/counter/counter.component';
import { ServerElementComponent } from './samples/component-communication/Input-Output/server-element/server-element.component';
import { OutputviewComponent } from './samples/component-communication/Input-Output/demo-view/outputview/outputview.component';
import { CockpitComponent } from './samples/component-communication/Input-Output/cockpit/cockpit.component';
import { ProductDashboardComponent } from './samples/component-communication/content projection/product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './samples/component-communication/content projection/product-dashboard/product-widget/product-widget.component';
import { ViewchildrenComponent } from './samples/component-communication/viewchildren/viewchildren.component';

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
        ReactiveFormComponent,
        ViewchildrenComponent,
        HeaderComponent,
        FooterComponent,
        SideNavigationComponent,
        NgTemplateComponent,
        NgContainerComponent
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
        MatIconModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
