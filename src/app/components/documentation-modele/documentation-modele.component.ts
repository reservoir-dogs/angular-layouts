import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'documentation-modele',
  templateUrl: './documentation-modele.component.html',
  styleUrls: ['./documentation-modele.component.scss']
})
export class DocumentationModeleComponent implements AfterViewInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
  }

  navigate(selectIndex: number): void {
    let category: string;

    switch (selectIndex) {
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
