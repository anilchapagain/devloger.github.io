import { LogService } from './../../services/log.service';
import { log } from './../../Module/log';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
logs: log[];
  constructor(private LogService: LogService) { }

  ngOnInit() {
this.logs = this.LogService.getLogs();
  }
onSelect(log: log){
  console.log(log);
}
}
