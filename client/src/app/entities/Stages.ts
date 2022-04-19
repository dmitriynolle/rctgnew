import {StagesName} from "./StagesName";
import {Users} from "./Users";

export class Stages {
  constructor(
    public id: number,
    public users: Users,
    public stagesName: StagesName,
    public su1: number,
    public su2: number,
    public su3: number,
    public su4: number,
    public su5: number,
    public timeSu1: number,
    public timeSu2: number,
    public timeSu3: number,
    public timeSu4: number,
    public timeSu5: number,
    public time: number,
    public summa: number) {
  }
}
