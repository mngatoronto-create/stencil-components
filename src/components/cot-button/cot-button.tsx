import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cot-button',
  styleUrl: 'cot-button.css',
  shadow: true,
})
export class CotButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
