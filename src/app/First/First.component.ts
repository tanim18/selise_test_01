import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-First',
  templateUrl: './First.component.html',
  styleUrls: ['./First.component.scss'],
})
export class FirstComponent implements OnInit {
  constructor(
    public service: AuthorService,
    private currentRoute: ActivatedRoute
  ) {
    console.log(currentRoute.pathFromRoot[1].snapshot.url[0].path);
  }

  ngOnInit() {}
}
