import {Component, OnInit} from '@angular/core';
import {NavigationService} from "./navigation.service";
import {Folder} from "./folder";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  private currentFolder: Folder;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.subscribe(folder=>{
      this.currentFolder = folder;
    });

    this.currentFolder = this.navigationService.getCurrentFolder();
  }

  gotoFolder(folder: Folder) {
    this.navigationService.gotoFolder(folder.id);
  }

  gotoFile(file: File) {

  }
}
