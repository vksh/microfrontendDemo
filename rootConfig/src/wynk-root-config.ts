import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@wynk/msp",
  app: () => System.import("@wynk/msp"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});
registerApplication({
  name: "@wynk/reactApp",
  app: () => System.import("@wynk/reactApp"),
  activeWhen: ["/analytics"],
});

// registerApplication({
//   name: "@wynk/navbar",
//   app: () => System.import("@wynk/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
