// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyC1YAVEkGXFQFO0YplyLxnHZaFm1LHJPcQ',
      authDomain: 'touchscreens-d376c.firebaseapp.com',
      databaseURL: 'https://touchscreens-d376c.firebaseio.com',
      projectId: 'touchscreens-d376c',
      storageBucket: 'touchscreens-d376c.appspot.com',
      messagingSenderId: '31847494144'
  }
};
