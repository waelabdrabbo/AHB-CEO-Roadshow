import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ControlComponent } from './control/control.component';
import { ControlService } from './control/shared/control.service';
import { SenderComponent } from './sender/sender.component';
import { ReciverComponent } from './reciver/reciver.component';
@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    SenderComponent,
    ReciverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
