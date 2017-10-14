import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {
  allNote = [];
  allNote$ = new BehaviorSubject<Array<object>>(this.allNote);

  constructor(
    private http: HttpClient
  ) {
    this._updateAllNote();
  }

<<<<<<< HEAD
  // add
=======
  // 添加
>>>>>>> refs/remotes/origin/master
  _addNote(param: editNote) {
    return this.http.post('/api/addNote', param);
  }

<<<<<<< HEAD
  // modify
=======
  // 修改
>>>>>>> refs/remotes/origin/master
  _modifyNote(param: editNote) {
    return this.http.post('/api/modify', param);
  }

<<<<<<< HEAD
  // delete
=======
  // 删除
>>>>>>> refs/remotes/origin/master
  _deleteNote(id) {
    return this.http.post('/api/deleteNote', {id: id});
  }

  _updateAllNote() {
    this.http.get('/api/allNote')
      .subscribe((data) => {
        this.allNote$.next(data['data']);
      });
  }
}

interface editNote {
  title: String;
  content: String;
  tag: Array<object>;
  date: Date;
  sourceLink: String;
  _id?: String;
}
