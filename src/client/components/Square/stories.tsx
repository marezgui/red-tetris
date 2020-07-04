import * as React from "react";
import Square from ".";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Square", module) as any;

stories.addWithJSX("Default", () => {

  return (
    <Square />
  );
});