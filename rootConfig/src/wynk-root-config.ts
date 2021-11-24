import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@wynk/reactApp",
  app: () => System.import("@wynk/reactApp"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});


// registerApplication({
//   name: "@wynk/navbar",
//   app: () => System.import("@wynk/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
