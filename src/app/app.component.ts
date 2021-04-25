import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas-customizadas';

  lembrete: string;
  lembretes: Array<String>=[];

  variavelSombra: string = '10px 10px yellow';

  salvar(){
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete= '';
  }
}
