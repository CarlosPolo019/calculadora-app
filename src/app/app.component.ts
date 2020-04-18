import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora app';

  numeroActual = '0';
  operacion1 = null;
  operador = null;
  estadoNumero = false;

  constructor() { }

  ngOnInit() {
  }

  getNumero(v: string){
    console.log(v);
    if(this.estadoNumero)
    {
      this.numeroActual = v;
      this.estadoNumero = false;
    }else{
      this.numeroActual === '0'? this.numeroActual = v: this.numeroActual += v;

    }
  }

 getUrl()
{
  return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
}

  getDecimal(){
    if(!this.numeroActual.includes('.')){
        this.numeroActual += '.'; 
    }
  }

   doCalculation(op , operacion2){
    switch (op){
      case '+':
      return this.operacion1 += operacion2; 
      case '-': 
      return this.operacion1 -= operacion2; 
      case '*': 
      return this.operacion1 *= operacion2; 
      case '/': 
      return this.operacion1 /= operacion2; 
      case '=':
      return operacion2;
    }
  }
   getOperacion(op: string){
    console.log(op);

    if(this.operacion1 === null){
      this.operacion1 = Number(this.numeroActual);

    }else if(this.operador){
      const result = this.doCalculation(this.operador , Number(this.numeroActual))
      this.numeroActual = String(result);
      this.operacion1 = result;
    }
    this.operador = op;
    this.estadoNumero = true;
    console.log("Prueba " + this.operador)
    console.log(this.operacion1);
 
  }

   limpiar(){
    this.numeroActual = '0';
    this.operacion1 = null;
    this.operador = null;
    this.estadoNumero = false;
  }



}