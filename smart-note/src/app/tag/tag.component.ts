import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagDataService } from '../tag-data.service';
import { Tag } from '../tag';
import { MsgService } from './../services/msg/msg.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  providers: [TagDataService]  
})

export class TagComponent implements OnInit {  
  tagList: Tag[] = [];
  newTag: Tag = new Tag();
  constructor(
    private tagDataService: TagDataService,
    private msg: MsgService    
  ) {
  }

  public ngOnInit() {
    this.tagDataService
      .getAllTags()
      .subscribe(
        (tags) => {
          this.tagList = tags;
        }
      );
  }

  addTag() {
    this.tagDataService
    .addTag(this.newTag)
    .subscribe(
      (newTag) => {
        if (newTag.title !== '') {
          this.tagList = this.tagList.concat(newTag);
          this.newTag.title = '';          
        } else {
          this.msg.info('Invalid tag, please input something');
        }
      }
    );

    // this.tagDataService
    //   .addTag(this.newTag)
    //   .subscribe(
    //     (newTag) => {
    //       this.tagList = this.tagList.concat(newTag);
    //     }
    //   );
  }

  removeTag(tag) {
    this.tagDataService
      .deleteTagById(tag.id)
      .subscribe(
        (_) => {
          this.tagList = this.tagList.filter((n) => n.id !== tag.id);
        }
      );
  }
}
