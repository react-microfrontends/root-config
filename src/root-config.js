import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@react-mf/navbar",
  () => System.import("@react-mf/navbar"),
  isActive.navbar
);

registerApplication(
  "@react-mf/people",
  () => System.import("@react-mf/people"),
  isActive.people
);

start();
