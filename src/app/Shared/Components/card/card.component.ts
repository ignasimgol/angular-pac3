import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CardComponent {
  @Input() id: number | string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() author: string = '';
  @Input() categories: any[] = [];
  @Input() numLikes: number = 0;
  @Input() numDislikes: number = 0;
  
  @Input() showAvatar: boolean = true;
  @Input() showStats: boolean = true;
  @Input() showActions: boolean = true;
  @Input() showInteractionButtons: boolean = true;
  
  @Output() onLike = new EventEmitter<number | string>();
  @Output() onDislike = new EventEmitter<number | string>();
}