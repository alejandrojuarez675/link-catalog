import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkChipComponent } from './link-chip.component';

describe('LinkChipComponent', () => {
  let component: LinkChipComponent;
  let fixture: ComponentFixture<LinkChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
