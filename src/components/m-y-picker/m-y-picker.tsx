import { Component, Prop, h } from '@stencil/core';
import 'ionicons';

@Component({
  tag: 'm-y-picker',
  styleUrl: 'm-y-picker.css',
  shadow: true
})
export class MYPicker {
  @Prop() next: () => any;
  @Prop() prev: () => any;

  render() {
    return (
      <div class='m-y-selector'>
        <button onClick={() => this.prev()}>
          <ion-icon name="arrow-dropleft-circle" class='circle-big'></ion-icon>
        </button>
        <span>
          <p><slot /></p>
        </span>
        <button onClick={() => this.next()}>
          <ion-icon name="arrow-dropright-circle" class='circle-big'></ion-icon>
        </button>
      </div>
    );
  }
}
