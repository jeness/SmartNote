// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ViewNoteComponent } from './view-note.component';
// import { NoteService } from '../../services/note/note.service';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { MsgService } from '../../services/msg/msg.service';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('ViewNoteComponent', () => {
//   let component: ViewNoteComponent;
//   let fixture: ComponentFixture<ViewNoteComponent>;
//   let mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   }
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ViewNoteComponent ],
//       providers: [ NoteService, MsgService, 
//                 { provide: Router, useValue: mockRouter }
//     ],
//       imports: [ HttpClientModule ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ViewNoteComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
