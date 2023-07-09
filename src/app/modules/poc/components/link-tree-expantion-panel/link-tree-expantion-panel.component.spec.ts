import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTreeExpantionPanelComponent } from './link-tree-expantion-panel.component';

describe('LinkTreeExpantionPanelComponent', () => {
  let component: LinkTreeExpantionPanelComponent;
  let fixture: ComponentFixture<LinkTreeExpantionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkTreeExpantionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkTreeExpantionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
