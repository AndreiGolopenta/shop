import {
  trigger,
  transition,
  style,
  animate,
  state,
  keyframes
} from '@angular/animations';

export const scale = trigger('cardScale', [
  state(
    'initial',
    style({
      transform: 'scale(1)'
    })
  ),
  state(
    'final',
    style({
      transform: 'scale(1.03)'
    })
  ),
  transition('initial <=> final', [animate('150ms ease-in-out')])
]);

export const cartAnimation = trigger('cart', [
  state(
    'initial',
    style({
      transform: 'scale(1)'
    })
  ),
  state(
    'final',
    style({
      transform: 'scale(1)'
    })
  ),
  transition('initial <=> final', [
    animate(
      '1000ms ease-in-out',
      keyframes([
        style({ transform: 'scale(1.1)' }),
        style({ transform: 'rotate(3deg)' }),
        style({ transform: 'rotate(-6deg)' }),
        style({ transform: 'rotate(3deg)' }),
        style({ transform: 'rotate(-6deg)' }),
        style({ transform: 'scale(1)' })
      ])
    )
  ])
]);
