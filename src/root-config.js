import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@react-mf/navbar",
  app: () => System.import("@react-mf/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@react-mf/people",
  app: () => System.import("@react-mf/people"),
  activeWhen: "/people",
});

registerApplication({
  name: "@react-mf/planets",
  app: () => System.import("@react-mf/planets"),
  activeWhen: "/planets",
});

start();
