import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import { Button } from "../src";

storiesOf("ButtonKnobs", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("Default", () => (
    <Button
      label="Normal button"
      outlined={boolean("Outlined", true)}
      disabled={boolean("Disabled", true)}
    >
      {text("Text", "Hello Button")}
    </Button>
  ))
  .add("Custom button", () => (
    <Button
      label="Custom style"
      style={object("style", {
        backgroundColor: "pink",
        border: "5px dotted limegreen",
      })}
    />
  ));
