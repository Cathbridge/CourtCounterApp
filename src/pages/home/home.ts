import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

value= 0;
valueTwo= 0;

  constructor(public navCtrl: NavController) {
    // this.value = 0;
    // this.valueTwo = 0;

  }

  onClickTeamA(){
    this.value += 3;
    console.log(this.value)

  }
  onClickTeamAA(){
    this.value += 2;
    console.log(this.value)
  }
  onClickTeamAAA(){
    this.value += 1;
    console.log(this.value)
  }
  //Buttons for Team B
  onClickTeamB(){
    this.valueTwo += 3;
    console.log(this.valueTwo)

  }
  onClickTeamBB(){
    this.valueTwo += 2;
    console.log(this.valueTwo)
  }
  onClickTeamBBB(){
    this.valueTwo += 1;
    console.log(this.valueTwo)
  }

  onReset(){
    this.value = 0;
    this.valueTwo = 0;
  }
// ANOTHER METHOD 
// onClickA(num: Number){
//   if(num === 3){
//     this.value += 3;
//     console.log(this.valueTwo)
//   }else if(num === 2){
//     this.value += 2;
//     console.log(this.valueTwo)
//   }else if(num === 1){
//     this.value += 1;
//     console.log(this.valueTwo)

//   }
// }

// onClickB(num: Number){
//   if(num === 3){
//     this.valueTwo += 3;
//     console.log(this.valueTwo);
//   }else if(num === 2){
//     this.valueTwo += 2;
//     console.log(this.valueTwo);
//   }else if(num === 1){
//     this.valueTwo += 1;
//     console.log(this.valueTwo);
//   }
// }


}
