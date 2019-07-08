import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MonteCarloResult} from './models/monte-carlo-result';
import {MonteCarloService} from './services/monte-carlo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private monteCarloRequestFormGroup = new FormGroup({

    numIterations: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(1)
    ]),

    expectedReturn: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]\\d*(\\.\\d+)?$'),
      Validators.min(0),
      Validators.max(1)
    ]),

    volatility: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]\\d*(\\.\\d+)?$'),
      Validators.min(0),
      Validators.max(1)
    ]),

    timeHorizon: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(1)
    ]),

    startingValue: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9]\\d*(\\.\\d+)?$'),
      Validators.min(1)
    ]),

    annualInvestment: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9]\\d*(\\.\\d+)?$'),
      Validators.min(1)
    ]),

  });

  private runOn = 'CPU';

  private showSpinner = false;

  private monteCarloResult: MonteCarloResult;

  constructor(private monteCarloService: MonteCarloService) {}

  private runSimulation(): void {
    this.monteCarloResult = null;
    this.showSpinner = true;
    this.monteCarloService
      .runMonteCarlo(this.monteCarloRequestFormGroup.value, this.runOn)
      .subscribe(result => {
        this.monteCarloResult = result;
      }).add(() => {
        this.showSpinner = false;
    });
  }
}
