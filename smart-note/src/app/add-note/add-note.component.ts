import { Router } from '@angular/router';
import { MsgService } from '../services/msg/msg.service';
import { Subscription } from 'rxjs/Subscription';
import { AddNoteService } from '../services/add-note/add-note.service';
import { TagService } from '../services/tag/tag.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { dropdownItem } from '../component/dropdown/dropdown.component';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../tag';
import { AddNote } from '../addnote';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddNoteComponent implements OnInit, OnDestroy {
  dropdownMenuSub: Subscription;
  dropdownMenu = [];
  tagList = [];
  title = '';
  content = '';
  //date: Date;
  //tags: Tag[]  = [];
  addnote: AddNote[] = [];
  newAddNote: AddNote = new AddNote();
  constructor(
    private tagService: TagService,
    private addNoteService: AddNoteService,
    private msg: MsgService,
    private router: Router,
    private route: ActivatedRoute        
  ) { }



  public ngOnInit() {
    this.route.data
    .map((data) => data['addnote'])
    .subscribe(
      (addnote) => {
        this.addnote= addnote;
      }
    );
  }

  ngOnDestroy() {
    this.dropdownMenuSub.unsubscribe();
  }

  selectItem(data) {
    this.tagList.push(data);
  }

  delectLabelItem(index) {
    this.tagList.splice(index, 1);
  }

  markdownValueChange(data) {
    //this.addNoteService._getAddNoteById.
    this.content = data;
  }

  onAddNote(addnote) {
    this.addNoteService
      ._addNote(addnote)
      .subscribe(
        (newAddNote) => {
          this.addnote= this.addnote.concat(newAddNote);
        }
      );
  }

    // save notes
    save() {
      // if (this.title === '' || this.content === '' || this.tagList.length === 0) {
      //   // this.tagList.length = 1;
      //   // if (this.title === '' || this.content === '' ) {
      //   this.msg.info('Please complete note information');
      // } else {
        this.addNoteService.
        _addNote(this.newAddNote)
        .subscribe(
          (newAddNote) => {
            if (newAddNote.title !== '') {
              this.addnote = this.addnote.concat(newAddNote);
            
            this.msg.info('Successfully saved!');
            //this.addNoteService._updateAllNote();
            //localStorage.setItem('noteItemInfo', JSON.stringify(res['data']));
            this.router.navigate(['/about']);
          }
          else
          {
            this.msg.info('Cannot saved!');
          }
        //});
      }
    );
  }

  
    // addTag() {
    //   this.tagService
    //   .addTag(this.newTag)
    //   .subscribe(
    //     (newTag) => {
    //       if (newTag.title !== '') {
    //         this.tagList = this.tagList.concat(newTag);
    //         this.newTag.title = '';          
    //       } else {
    //         this.msg.info('Invalid tag, please input something');
    //       }
    //     }
    //   );
  // // save notes
  // save() {
  //   if (this.title === '' || this.content === '' || this.tagList.length === 0) {
  //     // this.tagList.length = 1;
  //     // if (this.title === '' || this.content === '' ) {
  //     this.msg.info('Please complete note information');
  //   } else {
  //     const sub = this.addNoteService._addNote({
  //       title: this.title,
  //       content: this.content,
  //       tag: this.tagList,
  //       date: new Date(),
  //       sourceLink: ''
  //     }).subscribe((res) => {
  //       if (res['code'] === 200) {
  //         this.msg.info('Successfully saved!');
  //         this.addNoteService._updateAllNote();
  //         localStorage.setItem('noteItemInfo', JSON.stringify(res['data']));
  //         this.router.navigate(['/viewNote']);
  //       }
  //     });
  //   }
  // }
}