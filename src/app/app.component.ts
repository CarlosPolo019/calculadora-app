import {
    Component
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Calculadora app';

    numeroActual = '0';
    operacion1 = null;
    estadoNumero = false;
    estadoDecimal = false;
    beforeOperacion = '';
    newOperacion = '';

    constructor() {}

    ngOnInit() {}

    getNumero(v: string) {
        console.log(v);
        if (this.estadoNumero) {
            this.numeroActual = v;
            this.estadoNumero = false;
        } else {
            this.numeroActual === '0' ? this.numeroActual = v : this.numeroActual += v;

        }
    }

    getUrl() {
        return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
    }

    getDecimal() {
        if (!this.numeroActual.includes('.')) {
            this.numeroActual += '.';
        } else {
            if (this.estadoDecimal) {
                this.numeroActual += '.';
                this.estadoDecimal = false;
            }
        }
    }


    getOperacion(op: string) {

        if (op == "=") {

            try {
                const result = eval(this.numeroActual);
                this.beforeOperacion = this.numeroActual;
                this.numeroActual = String(result);
                //  this.estadoNumero = true;
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert("No es valida la operacion");
                    return
                }
            }

            return
        } else {

            this.numeroActual += op
            this.estadoDecimal = true;

        }


    }

    limpiar() {
        this.numeroActual = '0';
        this.beforeOperacion = '';
        this.estadoNumero = false;
    }



}