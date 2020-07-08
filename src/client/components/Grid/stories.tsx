import React, { useState } from "react";
import Grid from ".";
import { storiesOf } from "@storybook/react";

const ROWS = 20; // X
const COLS = 10; // Y

const stories = storiesOf("Grid", module) as any;

stories.addWithJSX("Default", () => {
  const [gridArray, setGridArray] = useState(new Array(ROWS).fill(null).map(item =>(new Array(COLS).fill(null))));

  return (
    <Grid gridArray={gridArray} />
  );
});
