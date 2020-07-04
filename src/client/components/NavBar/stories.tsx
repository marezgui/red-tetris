import * as React from "react";
import NavBar from ".";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("NavBar", module) as any;

stories.addWithJSX("Default", () => {

  return (
    <NavBar />
  );
});
