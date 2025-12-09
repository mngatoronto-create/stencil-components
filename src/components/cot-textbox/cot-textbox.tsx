import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cot-textbox',
  styleUrl: 'cot-textbox.css',
  shadow: true,
})
export class CotTextbox {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
