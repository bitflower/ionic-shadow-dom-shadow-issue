import { Component, Prop } from '@stencil/core';
import { ToastOptions, LoadingOptions } from '@ionic/core';

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

  @Prop({
    connect: 'ion-modal-controller'
  })
  modalCtrl: HTMLIonModalControllerElement;

  @Prop({
    connect: 'ion-toast-controller'
  })
  toastCtrl: HTMLIonToastControllerElement;


  public async componentDidLoad(): Promise<void> {
    // await this.presentLoading();
  }

  async presentLoading() {
    await this.loadingCtrl.componentOnReady();
    const options: LoadingOptions = {
      message: 'Please wait...',
      spinner: 'dots',
      duration: 2000
    };
    const loadingElement = await this.loadingCtrl.create(options);
    return await loadingElement.present();
  }

  async showToast(message = "Mmmmm, buttered toast") {
    // const toastCtrl = addToastCtrl();
    await this.toastCtrl.componentOnReady();
    const options: ToastOptions = {
      message,
      position: "bottom",
      duration: 3000,
      color: "dark"
    };
    const toast = await this.toastCtrl.create(options);
    return await toast.present();
  }

  async presentModal() {
    const modalController = await this.modalCtrl.componentOnReady();
    const modal = await modalController.create({
      component: 'my-modal-component',
      componentProps: { modalController },
    });
    await modal.present();
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
        <button onClick={() => this.presentModal()}>
          Show modal
        </button>
        <button onClick={() => this.showToast()}>
          Show toast
        </button>
      </div>
    );
  }
}
