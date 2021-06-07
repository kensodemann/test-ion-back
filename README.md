# Conditional Navigation Back

This application demonstrates how to conditionally navigate back. This could be used to, for example, stop someone doing a back navigation if this have not saved their changes on a child page. In the case of this demo, however, there is no dirty checking. The code just asks you if you would actually like to perform the navigation.

The key elements are:

- Create an [interface](https://github.com/kensodemann/test-ion-back/blob/main/src/app/interfaces/can-navigate-away.ts) for pages that will support this feature.
- [Implement the interface](https://github.com/kensodemann/test-ion-back/blob/main/src/app/child/child.page.ts#L20-L33) on those pages.
- Create a ["route guard" service](https://github.com/kensodemann/test-ion-back/blob/main/src/app/guard-dirty-page.service.ts) that will act on pages that implement the interface.
- [Hook up the guard] (https://github.com/kensodemann/test-ion-back/blob/main/src/app/child/child-routing.module.ts#L11) on the routes.

For fun, this app also hooks up the Android backButton event handling in the AppComponent, but that serves no real purpose. It is just there to show it being done. You shouldn't need to do that in your own app, at least not for the main functionality that this app is demo-ing.
