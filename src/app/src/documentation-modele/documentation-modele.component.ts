import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'documentation-modele',
  templateUrl: './documentation-modele.component.html',
  styleUrls: ['./documentation-modele.component.scss']
})
export class DocumentationModeleComponent implements AfterViewInit {
  @ViewChild(MatTabGroup) tabs: TabComponent;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    const category: string = this.route.snapshot.queryParams['category'];

    if (category) {
      let selectedIndex: number;

      switch (category) {
        case 'api':
          selectedIndex = 1;
          break;
        case 'e2e':
          selectedIndex = 2;
          break;
        default:
          selectedIndex = 0;
          break;
      }

      this.tabs.selectedItem = selectedIndex;
    }
  }

  navigate(selectEventArgs: SelectEventArgs): void {
    let category: string;

    switch (selectEventArgs.selectedIndex) {
      case 0:
        category = 'presentation';
        break;
      case 1:
        category = 'api';
        break;
      default:
        category = 'e2e';
        break;
    }

    this.router.navigate([], { queryParams: { category } });
  }
}
