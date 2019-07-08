import {Histogram} from './histogram';

export class MonteCarloResult {

  public mean: number;
  public standardDeviation: number;
  public max: number;
  public min: number;
  public simulationTime: number;
  public numIterations: number;
  public timeHorizon: number;
  public ranOn: string;
  public histogram: Histogram[];
}
