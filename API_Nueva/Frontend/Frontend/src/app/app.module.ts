import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './Commponents/login/login.component';
import { ContrasenaComponent } from './Commponents/contrasena/contrasena.component';
import { HomeComponent } from './Commponents/home/home.component';
import { RegistroComponent } from './Commponents/registro/registro.component';
import { PublicacionComponent } from './Commponents/publicacion/publicacion.component';
import { PerfilComponent } from './Commponents/perfil/perfil.component';
import { CursosaprobadosComponent } from './Commponents/cursosaprobados/cursosaprobados.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContrasenaComponent,
    HomeComponent,
    RegistroComponent,
    PublicacionComponent,
    PerfilComponent,
    CursosaprobadosComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
