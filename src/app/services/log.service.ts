import { log } from './../Module/log';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
logs: log[];

private LogSource = new BehaviorSubject<log>({id: null, text: null, date: null});
selectedLog = this.LogSource.asObservable();

  constructor() {
    this.logs = [
      { id:'1',text: "Genenrated Components",date: new Date ('12/26/2019 12:54:23')},
      { id:'1',text: "Genenrated Components",date: new Date ('12/26/2019 12:54:23')},
      { id:'1',text: "Genenrated Components",date: new Date ('12/26/2019 12:54:23')}

    ]
  }
  getLogs(){
    return this.logs;
  }
  setFormLog(log: log){
    this.LogSource.next(log);
  }
}
