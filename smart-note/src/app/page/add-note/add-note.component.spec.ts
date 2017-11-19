// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { FormsModule } from '@angular/forms';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { AddNoteComponent } from './add-note.component';
// import { DropdownComponent } from './../../component/dropdown/dropdown.component';
// import { ButtonComponent } from './../../component/button/button.component';
// import { TagService } from '../../services/tag/tag.service';
// import { MsgService } from '../../services/msg/msg.service';
// import { NoteService } from '../../services/note/note.service';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import {routeAnimation } from './../../animations/global-router-animation';


// describe('AddNoteComponent', () => {
//   let component: AddNoteComponent;
//   let fixture: ComponentFixture<AddNoteComponent>;
//   let mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   }

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         imports: [FormsModule, HttpClientModule],
//         declarations: [ AddNoteComponent, DropdownComponent, ButtonComponent, routeAnimation],
//         providers: [TagService, MsgService, NoteService, 
//             { provide: Router, useValue: mockRouter }
//             ]     
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AddNoteComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
