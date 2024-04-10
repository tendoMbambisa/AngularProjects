import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-calc',
  templateUrl:'./calc.component.html',
  styleUrl: './calc.component.css',
})
export class CalcComponent {
  title="angular-Calc"
  calValue: number=0;
  funcT: string='NoFunction';
  calNumber:string='noValue';

  firstNum: number=0;
  secondNum:number=0;

  onClickValue (val: string,type: string){
    if(type === 'number'){
      this.onNumberClick(val);
    }
    else if(type === 'function'){
      this.onFunctionClick(val);

    }
  }
  onNumberClick(val:string){
   if (this.calNumber != 'noValue'){
    this.calNumber=this.calNumber+val;
   }
   else{
    this.calNumber=val;
   }
   this.calValue=parseFloat(this.calNumber);

   }
  onFunctionClick(val:string){
     //call function to clear all
     if(val ==='c'){
           this.clearAll();
      }
     else if(this.funcT === 'NoFunction'){
          this.firstNum = this.calValue;
          this.calValue = 0;
          this.calNumber = 'noValue';
          this.funcT= val;
      }
      else if(this.funcT != 'NoFunction'){
        this.secondNum=this.calValue;
        //calculation
        this.valueCalculate(val);
      }
     

    }
    valueCalculate(val:string){
      if (this.funcT=='+'){
        const Total=this.firstNum + this.secondNum;
        this.totalAssignValues(Total,val)
        
      }
      if (this.funcT=='-'){
        const Total=this.firstNum - this.secondNum;
        this.totalAssignValues(Total,val)
        
      }
      if (this.funcT=='*'){
        const Total=this.firstNum * this.secondNum;
        this.totalAssignValues(Total,val);
       
      }
      if (this.funcT=='/'){
        const Total=this.firstNum / this.secondNum;
        this.totalAssignValues(Total,val);
        
      }
      if (this.funcT=='%'){
        const Total=this.firstNum/100;
        this.totalAssignValues(Total,val);
        
      }

    }

    totalAssignValues(Total:number,val:string){
      this.calValue=Total;
      this.firstNum=Total;
      this.secondNum=0;
      this.calNumber='noValue';
      this.funcT=val;
      if(val==='='){this.onEqualPress()}
    }
    onEqualPress(){
      this.firstNum=0;
      this.secondNum=0;
      this.funcT='NoFunction';
      this.calNumber='noValue';
    }
    clearAll(){
      this.firstNum=0;
      this.secondNum=0;
      this.calValue=0;
      this.funcT='NoFunction';
      this.calNumber='noValue';
    }
}
