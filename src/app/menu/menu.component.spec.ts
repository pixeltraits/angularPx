import { TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();
  });

  it('should create the menu', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.componentInstance;
    expect(menu).toBeTruthy();
  });
});
