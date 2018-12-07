import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @Prop({
    connect: 'ion-loading-controller'
  })
  loadingCtrl: HTMLIonLoadingControllerElement;

  public async componentDidLoad(): Promise<void> {
    await this.presentLoading();
  }

  async presentLoading() {
    await this.loadingCtrl.componentOnReady();
    const loadingElement = await this.loadingCtrl.create({
      message: 'Please wait...',
      // spinner: 'crescent',
      duration: 2000
    });
    return await loadingElement.present();
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
        <button onClick={() => this.presentLoading()}>
          Show waiting
        </button>
      </div>
    );
  }
}
