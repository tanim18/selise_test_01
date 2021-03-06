import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-List-Item',
  templateUrl: './List-Item.component.html',
  styleUrls: ['./List-Item.component.scss'],
})
export class ListItemComponent implements OnInit {
  model: any = null;
  path: any = null;
  favList = [];
  limit = 8;
  skip = 0;
  page = 1;
  constructor(
    public service: AuthorService,
    private currentRoute: ActivatedRoute
  ) {
    //console.log(currentRoute.pathFromRoot[1].snapshot.url[0].path);
  }

  ngOnInit() {
    this.refreshSampleTypeData();
    //this.findInLocalStorage();
  }
  refreshSampleTypeData() {
    this.path = this.currentRoute.pathFromRoot[1].snapshot.url[0].path;
    if (this.path == 'list-item') {
      this.service.getAuthorsList(this.limit, this.skip).subscribe((res) => {
        this.model = res.results;
      });
    } else {
      var retrievedObject = localStorage.getItem('testObject');
      this.model = JSON.parse(retrievedObject);
    }
  }

  AddFav(author: object) {
    this.favList.push(author);
    localStorage.setItem('testObject', JSON.stringify(this.favList));
    //var retrievedObject = localStorage.getItem('testObject');
    //console.log(retrievedObject);
  }

  RemoveFav(author: any) {
    debugger;
    var retrievedObject = localStorage.getItem('testObject');
    //  JSON.parse(retrievedObject).forEach( (item, index) => {
    //     if(item._id === author._id) JSON.parse(retrievedObject).splice(index,1);
    //   });
    const filteredPeople = JSON.parse(retrievedObject).filter(
      (item) => item._id != author
    );
    localStorage.setItem('testObject', JSON.stringify(filteredPeople));
  }

  findInLocalStorage(id: any) {
    //debugger
    var retrievedObject = localStorage.getItem('testObject');
    if (retrievedObject != null) {
      let item1 = JSON.parse(retrievedObject).find((i) => i._id === id);
      if (item1 != null) {
        return true;
      }
    }
    return false;
  }
  Previous() {
    if (this.skip > 0) {
      this.skip = this.skip - 8;
      this.page = this.page - 1;
    }
    this.refreshSampleTypeData();
  }
  Next() {
    this.skip = this.skip + 8;
    this.page = this.page + 1;
    this.refreshSampleTypeData();
  }
}
