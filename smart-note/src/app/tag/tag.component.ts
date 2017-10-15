import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { TagDataService } from '../tag-data.service';
import { TagService } from '../services/tag/tag.service';
import { Tag } from '../tag';
import { MsgService } from './../services/msg/msg.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  //providers: [TagDataService] 
  providers: [TagService]    
})

export class TagComponent implements OnInit {  
  tagList: Tag[] = [];
  newTag: Tag = new Tag();
  constructor(
    //private tagDataService: TagDataService,
    private tagService: TagService,    
    private msg: MsgService    
  ) {
  }

  public ngOnInit() {
    this.tagService
      .getAllTags()
      .subscribe(
        (tags) => {
          this.tagList = tags;
        }
      );
  }

  addTag() {
    this.tagService
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
    this.tagService
      .deleteTagById(tag.id)
      .subscribe(
        (_) => {
          this.tagList = this.tagList.filter((n) => n.id !== tag.id);
        }
      );
  }
}
