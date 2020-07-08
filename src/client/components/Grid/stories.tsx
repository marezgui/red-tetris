import * as React from "react";
import Grid from ".";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Grid", module) as any;

stories.addWithJSX("Default", () => {

  return (
    <Grid />
  );
});
