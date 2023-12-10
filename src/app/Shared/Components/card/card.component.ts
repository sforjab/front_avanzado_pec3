import { Component, Input } from '@angular/core';
import { CardDto } from '../../Models/card.dto';
import { CategoryDTO } from 'src/app/Category/models/category.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: CardDto = {
/*     id: '',
 */    title: '',
    description: '',
    num_likes: 0,
    num_dislikes: 0,
    publication_date: new Date(),
    categories: new Array<CategoryDTO>,
/*     userId: '',
 */    userAlias: ''
  };

  constructor() {}
}
