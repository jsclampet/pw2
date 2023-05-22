import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password:string = '';
  
  length: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onInputLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()-';
    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++) {
      //setting a random number, represented by range of validChars
      //this will determine which randomized index of validChars to build random password
      //REMEMBER, this is in a for loop 
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

  }

}
