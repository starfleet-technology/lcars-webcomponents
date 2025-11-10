import { Component, Host,Prop, h } from '@stencil/core';

@Component({
  tag: 'lcars-button',
  styleUrl: 'lcars-button.css',
  shadow: true,
})
export class LcarsButton {
  /**
   * The color to use
   */
  @Prop() color: string = 'default';

  render() {
    return (
      <Host class={this.color}>
        <slot></slot>
      </Host>
    );
  }
}
