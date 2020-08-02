import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

import { Modal, Button } from "../src";

storiesOf("Modal", module)
  .addDecorator(centered)
  .add("Modal", () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir modal</Button>

        <Modal title="Título do modal" open={open} setOpen={setOpen}>
          Conteúdo
        </Modal>
      </>
    );
  });
