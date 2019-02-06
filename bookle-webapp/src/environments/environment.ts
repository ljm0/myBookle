// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.


// local
// export const environment = {
//   production: false,
//   apiEndpoint: 'http://127.0.0.1:4001/api',
//   auth: {
//     clientId: 'default',
//     clientSecret: 'SECRET'
//   }
// };

// IBM cloud
export const environment = {
  production: false,
  apiEndpoint: 'https://bookle-vu.eu-de.cf.appdomain.cloud/api',
  auth: {
    clientId: '483ce3cd-4a9b-4a42-b8c0-21c7b63813be',
    clientSecret: 'fB1gU2hD3gN6dB8nK4bJ3xU7wX8fM6fR6sE3bI7hN0iS0sK6iE'
  }
};