import React from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

import { Button } from "../src";

storiesOf("Botão", module)
  .addDecorator(centered)
  .add("Padrão", () => <Button>Padrão</Button>)
  .add("Delineado", () => <Button outlined>Delineado</Button>)
  .add("Desabilitado", () => <Button disabled>Desabilitado</Button>);
