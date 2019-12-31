import { log } from './../Module/log';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
logs: log[];

private LogSource = new BehaviorSubject<log>({id: null, text: null, date: null});
selectedLog = this.LogSource.asObservable();

private stateSource = new BehaviorSubject<boolean>(true);
stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   { id:'1',text: "Genenrated Components1",date: new Date ('12/26/2019 12:54:23')},
    //   { id:'2',text: "Genenrated Components2",date: new Date ('12/26/2019 12:54:23')},
    //   { id:'3',text: "Genenrated Components3",date: new Date ('12/26/2019 12:54:23')}

    // ]
    this.logs = [];
   }
  getLogs(): Observable<log[]> {
    if(localStorage.getItem('logs') === null){
      this.logs = [];

    }else {
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs.sort((a,b) => {
      return b.date - a.date;
    }));
  }
  setFormLog(log: log) {
    this.LogSource.next(log);
  }
  addLog(log: log) {
    this.logs.unshift(log);

  //  /add to the local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  updateLog(log: log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    //  /add to the local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  deleteLog(log: log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    //  /add to the local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }
  clearState() {
    this.stateSource.next(true);
  }
}
