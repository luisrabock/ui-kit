import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";
import { Separator } from "../src";

storiesOf("Separador", module)
  .addDecorator(centered)
  .add("Padrão", () => (
    <div
      style={{
        width: "300px",
        padding: "20px 10px",
        backgroundColor: "#000",
      }}
    >
      <Separator />
    </div>
  ));
