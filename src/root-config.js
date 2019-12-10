import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@org-name/navbar",
  () => System.import("@org-name/navbar"),
  isActive.navbar
);

start();
