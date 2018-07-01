import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('newServerContent') newServerContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: newServerName.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

}
