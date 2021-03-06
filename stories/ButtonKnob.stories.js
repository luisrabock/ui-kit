import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";

import { Button } from "../src";

storiesOf("Botão + Knobs", module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add("Botão", () => (
    <Button
      label="Normal button"
      outlined={boolean("Outlined", true)}
      disabled={boolean("Disabled", true)}
    >
      {text("Text", "Botão")}
    </Button>
  ))
  .add("Botão customizado", () => (
    <Button
      label="Custom style"
      style={object("style", {
        backgroundColor: "pink",
        border: "5px dotted limegreen",
      })}
    >
      {text("Text", "Botão CSS customizado")}
    </Button>
  ));
