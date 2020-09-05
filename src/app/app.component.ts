import { Component } from '@angular/core';
import * as Chart from 'chartjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'allgograph';
  inputValue= new FormControl('');;
  barChartOptions: ChartOptions = {
    responsive: true,
    "scales":{"yAxes":[{ticks:{
      "beginAtZero":true
    }}]}
  };
  barChartLabels: Label[] = ['1 sept','2 sept','3 sept','4 sept','5 sept'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [100,200,300,400,500], label: 'Graphs' }
  ];



  add(){
      const input = Number(this.inputValue.value);
      let oData = this.barChartData[0]["data"];
      let resultant = [];
      for (const value of oData) {
        resultant.push(Number(value)+input)
      }
      this.barChartData[0]["data"] = resultant;
  }



  subtract(){
    const input = Number(this.inputValue.value);
    let oData = this.barChartData[0]["data"];
    let resultant = [];
    for (const value of oData) {
      resultant.push(Number(value)-input)
    }
    this.barChartData[0]["data"] = resultant;
}


multiply(){
  const input = Number(this.inputValue.value);
  let oData = this.barChartData[0]["data"];
  let resultant = [];
  for (const value of oData) {
    resultant.push(Number(value)*+input)
  }
  this.barChartData[0]["data"] = resultant;
}


divide(){
  const input =  Number(this.inputValue.value);
  let oData = this.barChartData[0]["data"];
  let resultant = [];
  for (const value of oData) {
    resultant.push(Number(value)/input)
  }
  this.barChartData[0]["data"] = resultant;
}
}
