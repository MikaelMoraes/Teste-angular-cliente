import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PainelComponent } from './shared/templates';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { AtomSelectComponent } from "./shared/components/atoms/atom-select/atom-select.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PainelComponent, TranslateModule, AtomSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-angular-usuarios';

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }



  idiomaSelecionado = 'pt';

  onIdiomaChange(lang: string) {
    console.log(lang)
     this.translate.use(lang);
  }

  
}
