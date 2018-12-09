import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true // Remove thids and the shadow will appear!
})
export class AppRoot {

  // @Prop({
  //   connect: 'ion-menu-controller'
  // })
  // private menuCtrl: HTMLIonMenuControllerElement;

  async componentDidUnload() {
    // await this.menuCtrl.open('start');
  }

  render() {
    return (
      <ion-split-pane when={false}>
        <ion-menu
          side='start'
          swipeGesture={true}
          type='reveal'
        >
          <ion-header>
            <ion-toolbar>
              <ion-title>My menu</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <p>This is the menu content.</p>
          </ion-content>

        </ion-menu >

        <ion-content main scrollX={false} scrollY={false}>
          <div>
            <main>
              <ion-header>
                <ion-toolbar>
                  <ion-buttons slot='start'>
                    {/* <ion-menu-button /> */}
                  </ion-buttons>
                  <ion-title>
                    Stencil App Starter
                </ion-title>
                </ion-toolbar>
              </ion-header>
              <stencil-router>
                <stencil-route-switch scrollTopOffset={0}>
                  <stencil-route url='/' component='app-home' exact={true} />
                  <stencil-route url='/profile/:name' component='app-profile' />
                </stencil-route-switch>
              </stencil-router>
            </main>
          </div>
        </ion-content >
      </ion-split-pane >
    );
  }
}
