import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagDataService } from '../tag-data.service';
import { Tag } from '../tag';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  providers: [TagDataService]  
})

export class TagComponent implements OnInit {
  // @Input() tag: Tag;
  
  // @Output()
  // remove: EventEmitter<Tag> = new EventEmitter();
  
  tagList: Tag[] = [];
  newTag: Tag = new Tag();
  constructor(
    private tagDataService: TagDataService,
    //private route: ActivatedRoute    
  ) {
  }

  // public ngOnInit() {
  //   this.route.data
  //     .map((data) => data['tags'])
  //     .subscribe(
  //       (tags) => {
  //         this.tagList = tags;
  //       }
  //     );
  // }

  public ngOnInit() {
    this.tagDataService
      .getAllTags()
      .subscribe(
        (tags) => {
          this.tagList = tags;
        }
      );
  }
  // onAddTag(tag) {
  //   this.tagDataService
  //     .addTag(tag)
  //     .subscribe(
  //       (newTag) => {
  //         this.tagList = this.tagList.concat(newTag);
  //       }
  //     );
  // }
  addTag() {
    this.tagDataService
      .addTag(this.newTag)
      .subscribe(
        (newTag) => {
          this.tagList = this.tagList.concat(newTag);
        }
      );
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

  // onRemoveTag(tag) {
  //   this.tagDataService
  //     .deleteTagById(tag.id)
  //     .subscribe(
  //       (_) => {
  //         this.tagList = this.tagList.filter((n) => n.id !== tag.id);
  //       }
  //     );
  // }


}
