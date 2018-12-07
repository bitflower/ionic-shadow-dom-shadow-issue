import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-dialog',
  styleUrl: 'app-dialog.css',
  shadow: true
})
export class AppDialog {

  @Prop()
  modalController: HTMLIonModalControllerElement;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  render() {
    return (
      <div class="app-dialog">
        <p>
          Hello! My name is {'BlaBla'}. My name was passed in
          through a route param!
          </p>
      </div>
    );
  }
}
