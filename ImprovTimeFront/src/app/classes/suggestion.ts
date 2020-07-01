import { Person } from './person';
import { Setting } from './setting';
import { Scenario } from './scenario';

export class Suggestion {
    character1:Person;
    character2:Person;
    setting:Setting;
    scenario:Scenario;

    constructor(c1:Person,c2:Person,set:Setting,sce:Scenario){
        this.character1=c1;
        this.character2=c2;
        this.setting=set;
        this.scenario=sce;
    }
}
