import { LogService } from "./../../services/log.service";
import { log } from "./../../Module/log";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"]
})
export class LogsComponent implements OnInit {
  logs: log[];
  selectedLog: log;
  loaded: boolean = false;

  constructor(private LogService: LogService) {}

  ngOnInit() {
    this.LogService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = { id: '', text: '', date: '' };
      }
    });
    this.LogService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }
  onSelect(log: log) {
    this.LogService.setFormLog(log);
    this.selectedLog = log;
  }
  onDelete(log: log) {
    if (confirm("Are you sure?")) {
      this.LogService.deleteLog(log);
    }
  }
}
