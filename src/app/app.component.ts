import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';

newOperacion = '' ;
beforeOperacion = '' ;
operand1: number; // The first operand
operand2: number; // The second operand
operator = ''; // The operator
calculationString = ''; 
// This is the string that denotes the operation being performed
answered = false; 
// A flag to check whether the solution has been processed
operatorSet = false; // You'll see how this is used soon



 pressKey(key: string) {
   if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.newOperacion[this.newOperacion.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.newOperacion === '')) {
        return;
      }
      this.operand1 = parseFloat(this.newOperacion);
      this.operator = key;
      this.operatorSet = true;
   }
   if (this.newOperacion.length === 10) {
     return;
   }
   this.newOperacion += key;
}





getAnswer() {
    this.calculationString = this.newOperacion;
    this.operand2 = parseFloat(this.newOperacion.split(this.operator)[1]);
    if (this.operator === '/') {
      this.beforeOperacion = this.newOperacion;
      this.newOperacion = (this.operand1 / this.operand2).toString();
      this.beforeOperacion = this.calculationString;
      if (this.newOperacion.length > 9) {
        this.newOperacion = this.newOperacion.substr(0, 9);
      }
    } else if (this.operator === 'x') {
      this.beforeOperacion = this.newOperacion;
      this.newOperacion = (this.operand1 * this.operand2).toString();
      this.beforeOperacion = this.calculationString;
      if (this.newOperacion.length > 9) {
        this.newOperacion = 'ERROR';
        this.beforeOperacion = 'Range Exceeded';
      }
    } else if (this.operator === '-') {
      this.beforeOperacion = this.newOperacion;
      this.newOperacion = (this.operand1 - this.operand2).toString();
      this.beforeOperacion = this.calculationString;
    } else if (this.operator === '+') {
      this.beforeOperacion = this.newOperacion;
      this.newOperacion = (this.operand1 + this.operand2).toString();
      this.beforeOperacion = this.calculationString;
      if (this.newOperacion.length > 9) {
        this.newOperacion = 'ERROR';
        this.beforeOperacion = 'Range Exceeded';
      }
    } else {
      this.beforeOperacion = 'ERROR: Invalid Operation';
    }
    this.answered = true;
}



}



