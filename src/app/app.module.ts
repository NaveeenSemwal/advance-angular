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

@NgModule({
  declarations: [
    AppComponent,
    CustomifComponent,
    CustomIfDirective,
    ViewChildComponent,
    CounterComponent,
    ServerElementComponent,
    OutputviewComponent,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
