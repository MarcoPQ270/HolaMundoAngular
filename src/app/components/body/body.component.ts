
import { Component } from '@angular/core'

@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})
export class BodyComponent{
    mostrar=true;
    frase: any={
        mensaje:'Simonaaaaaaa dijo el simonaaaaaaa',
        autor:'El simona'
    };

    Alumnos: string[]=['Marco','Didiere','Juan']
}