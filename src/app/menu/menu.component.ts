import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MENU_ELEMENTS, MenuElement } from './menu.config';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'apx-menu',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public readonly menuElements: MenuElement[] = MENU_ELEMENTS;

}
