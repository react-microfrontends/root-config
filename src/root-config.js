import {
  constructRoutes,
  constructApplications,
  constructLayoutEngine,
} from "single-spa-layout";
import { registerApplication, start } from "single-spa";

const routes = constructRoutes(document.querySelector("single-spa-router"));
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name),
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();
