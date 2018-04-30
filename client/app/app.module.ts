import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { BotaoModule } from './botao/botao.module';
import { AppComponent } from './app.component';

import { routing } from './app.routes';

import 'rxjs/add/operator/map';

@NgModule({
    imports: [
        BrowserModule, 
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        FotoModule,        
        PainelModule,
        BotaoModule
    ],
    declarations: [
        AppComponent,
        CadastroComponent,
        ListagemComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}