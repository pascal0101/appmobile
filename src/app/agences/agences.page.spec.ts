import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencesPage } from './agences.page';

describe('AgencesPage', () => {
  let component: AgencesPage;
  let fixture: ComponentFixture<AgencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
