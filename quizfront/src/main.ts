import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


//platformBrowserDynamic().bootstrapModule(AppModule)
 //.catch(err => console.error(err));

 platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    console.error(err);
    alert('An error occurred while starting the application. Please check the console for more details.');
  });