import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostDTO } from 'src/app/Post/models/post.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: PostDTO = {
    postId: '',
    title: '',
    description: '',
    num_likes: 0,
    num_dislikes: 0,
    publication_date: new Date(),
    categories: [],
    userId: '',
    userAlias: '',
  };

  @Input() showButtons: boolean = true;
  @Output() likeClicked = new EventEmitter<string>()
  @Output() dislikeClicked = new EventEmitter<string>();

  onLikeClick(): void {
    this.likeClicked.emit(this.item.postId);
  }

  onDislikeClick(): void {
    this.dislikeClicked.emit(this.item.postId);
  }

  constructor() {}
}
