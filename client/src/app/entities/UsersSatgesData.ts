import {StagesName} from "./StagesName";
import {Users} from "./Users";
import {Penalty} from "./Penalty";

export class UsersSatgesData {
  constructor(
    public id: number,
    public stages: StagesName,
    public users: Users,
    public su: number,
    public penalty: Penalty,
    public sum: number) {
  }
}
