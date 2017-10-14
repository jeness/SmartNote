// import { Injectable } from '@angular/core';
// import { environment } from 'environments/environment';
// import { Http, Response } from '@angular/http';
// import { Tag } from '../../tag';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

// const API_URL = environment.apiUrl;

// @Injectable()
// export class TagService {

//   constructor(
//     private http: Http
//   ) {
//   }

//   // api: GET/tag
//   public _getTagList(): Observable<Tag[]> {
//     return this.http
//       .get(API_URL + '/tag')
//       .map(response => {
//         const tags = response.json();
//         return tags.map((tag) => new Tag(tag));
//       })
//       .catch(this.handleError);
//   }

//   // api: POST/tag
//   public _addTag(tag: Tag): Observable<Tag> {
//     return this.http
//       .post(API_URL + '/tag', tag)
//       .map(response => {
//         return new Tag(response.json());
//       })
//       .catch(this.handleError);
//   }

//   // api: DELETE/tag/:id
//   public _deleteTag(id: number): Observable<null> {
//     return this.http
//       .delete(API_URL + '/tag/' + id)
//       .map(response => null)
//       .catch(this.handleError);
//   }

//   private handleError (error: Response | any) {
//     console.error('ApiService::handleError', error);
//     return Observable.throw(error);
//   }
// }




