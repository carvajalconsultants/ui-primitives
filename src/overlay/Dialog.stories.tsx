import { DialogTrigger, Input, Label, TextField } from "react-aria-components";

import { Button } from "../button/Button";
import { Heading } from "../typography/Heading";
import { Paragraph } from "../typography/Paragraph";
import { Dialog } from "./Dialog";
import { DialogDescription } from "./DialogDescription";
import { DialogTitle } from "./DialogTitle";
import { Modal } from "./Modal";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const TestDialog: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "750px", marginTop: "30px", gap: "22px", padding: "40px 30px" }}>
      <Heading level={1}>This is the page title</Heading>

      <Paragraph>Something in the background so that we can test the overlay.</Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet malesuada ipsum, vel eleifend eros. Aliquam consectetur lacus eros, quis iaculis nibh tempor eget. Pellentesque a
        semper nisl, eget rhoncus diam. Duis sed auctor libero. Sed tincidunt, mauris eget pretium porttitor, orci sapien posuere orci, sit amet elementum diam metus a lacus. Ut metus nulla,
        scelerisque sed lectus et, porta vestibulum mi. Vivamus id neque pretium, hendrerit dui sit amet, cursus augue. Quisque orci dui, tristique ullamcorper augue et, ultrices porttitor nisl. Proin
        vel elit quam. Praesent tristique euismod turpis, id fringilla est convallis molestie.
      </Paragraph>
      <Paragraph>
        Donec sit amet felis vitae lectus maximus porttitor. Nullam ut metus a justo viverra feugiat nec et ex. Quisque euismod mi ut ex euismod, at eleifend ante consectetur. Morbi venenatis neque
        non condimentum blandit. Nullam volutpat sit amet turpis quis congue. Suspendisse potenti. In a orci non urna fermentum sodales. Curabitur lacinia lorem et dignissim mollis. Phasellus
        imperdiet sem ex. Donec vel pretium lacus. Morbi ultrices, ligula a ultrices pulvinar, lorem sapien facilisis elit, fringilla malesuada ex lectus eget quam. Donec cursus ex eget sollicitudin
        mattis.
      </Paragraph>

      <DialogTrigger>
        <Button>Open Dialog</Button>

        <Modal isDismissable>
          <Dialog {...args} />
        </Modal>
      </DialogTrigger>
    </div>
  ),
};

export const CloseableOverflow: Story = {
  ...TestDialog,
  args: {
    header: <DialogTitle>This is a very long title to see how the overflow of the title performs while the content is also overflowing</DialogTitle>,
    closeable: true,
    children: (
      <>
        <TextField autoFocus>
          <Label>First Name</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name</Label>
          <Input />
        </TextField>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet malesuada ipsum, vel eleifend eros. Aliquam consectetur lacus eros, quis iaculis nibh tempor eget. Pellentesque a
          semper nisl, eget rhoncus diam. Duis sed auctor libero. Sed tincidunt, mauris eget pretium porttitor, orci sapien posuere orci, sit amet elementum diam metus a lacus. Ut metus nulla,
          scelerisque sed lectus et, porta vestibulum mi. Vivamus id neque pretium, hendrerit dui sit amet, cursus augue. Quisque orci dui, tristique ullamcorper augue et, ultrices porttitor nisl.
          Proin vel elit quam. Praesent tristique euismod turpis, id fringilla est convallis molestie.
        </Paragraph>
        <Paragraph>
          Donec sit amet felis vitae lectus maximus porttitor. Nullam ut metus a justo viverra feugiat nec et ex. Quisque euismod mi ut ex euismod, at eleifend ante consectetur. Morbi venenatis neque
          non condimentum blandit. Nullam volutpat sit amet turpis quis congue. Suspendisse potenti. In a orci non urna fermentum sodales. Curabitur lacinia lorem et dignissim mollis. Phasellus
          imperdiet sem ex. Donec vel pretium lacus. Morbi ultrices, ligula a ultrices pulvinar, lorem sapien facilisis elit, fringilla malesuada ex lectus eget quam. Donec cursus ex eget sollicitudin
          mattis.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet malesuada ipsum, vel eleifend eros. Aliquam consectetur lacus eros, quis iaculis nibh tempor eget. Pellentesque a
          semper nisl, eget rhoncus diam. Duis sed auctor libero. Sed tincidunt, mauris eget pretium porttitor, orci sapien posuere orci, sit amet elementum diam metus a lacus. Ut metus nulla,
          scelerisque sed lectus et, porta vestibulum mi. Vivamus id neque pretium, hendrerit dui sit amet, cursus augue. Quisque orci dui, tristique ullamcorper augue et, ultrices porttitor nisl.
          Proin vel elit quam. Praesent tristique euismod turpis, id fringilla est convallis molestie.
        </Paragraph>
        <Paragraph>
          Donec sit amet felis vitae lectus maximus porttitor. Nullam ut metus a justo viverra feugiat nec et ex. Quisque euismod mi ut ex euismod, at eleifend ante consectetur. Morbi venenatis neque
          non condimentum blandit. Nullam volutpat sit amet turpis quis congue. Suspendisse potenti. In a orci non urna fermentum sodales. Curabitur lacinia lorem et dignissim mollis. Phasellus
          imperdiet sem ex. Donec vel pretium lacus. Morbi ultrices, ligula a ultrices pulvinar, lorem sapien facilisis elit, fringilla malesuada ex lectus eget quam. Donec cursus ex eget sollicitudin
          mattis.
        </Paragraph>
      </>
    ),
    footer: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const NotCloseableOverflow: Story = {
  ...TestDialog,
  args: {
    header: <DialogTitle>This is a very long title to see how the overflow of the title performs while the content is also overflowing</DialogTitle>,
    closeable: false,
    children: (
      <>
        <TextField autoFocus>
          <Label>First Name</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name</Label>
          <Input />
        </TextField>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet malesuada ipsum, vel eleifend eros. Aliquam consectetur lacus eros, quis iaculis nibh tempor eget. Pellentesque a
          semper nisl, eget rhoncus diam. Duis sed auctor libero. Sed tincidunt, mauris eget pretium porttitor, orci sapien posuere orci, sit amet elementum diam metus a lacus. Ut metus nulla,
          scelerisque sed lectus et, porta vestibulum mi. Vivamus id neque pretium, hendrerit dui sit amet, cursus augue. Quisque orci dui, tristique ullamcorper augue et, ultrices porttitor nisl.
          Proin vel elit quam. Praesent tristique euismod turpis, id fringilla est convallis molestie.
        </Paragraph>
        <Paragraph>
          Donec sit amet felis vitae lectus maximus porttitor. Nullam ut metus a justo viverra feugiat nec et ex. Quisque euismod mi ut ex euismod, at eleifend ante consectetur. Morbi venenatis neque
          non condimentum blandit. Nullam volutpat sit amet turpis quis congue. Suspendisse potenti. In a orci non urna fermentum sodales. Curabitur lacinia lorem et dignissim mollis. Phasellus
          imperdiet sem ex. Donec vel pretium lacus. Morbi ultrices, ligula a ultrices pulvinar, lorem sapien facilisis elit, fringilla malesuada ex lectus eget quam. Donec cursus ex eget sollicitudin
          mattis.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet malesuada ipsum, vel eleifend eros. Aliquam consectetur lacus eros, quis iaculis nibh tempor eget. Pellentesque a
          semper nisl, eget rhoncus diam. Duis sed auctor libero. Sed tincidunt, mauris eget pretium porttitor, orci sapien posuere orci, sit amet elementum diam metus a lacus. Ut metus nulla,
          scelerisque sed lectus et, porta vestibulum mi. Vivamus id neque pretium, hendrerit dui sit amet, cursus augue. Quisque orci dui, tristique ullamcorper augue et, ultrices porttitor nisl.
          Proin vel elit quam. Praesent tristique euismod turpis, id fringilla est convallis molestie.
        </Paragraph>
        <Paragraph>
          Donec sit amet felis vitae lectus maximus porttitor. Nullam ut metus a justo viverra feugiat nec et ex. Quisque euismod mi ut ex euismod, at eleifend ante consectetur. Morbi venenatis neque
          non condimentum blandit. Nullam volutpat sit amet turpis quis congue. Suspendisse potenti. In a orci non urna fermentum sodales. Curabitur lacinia lorem et dignissim mollis. Phasellus
          imperdiet sem ex. Donec vel pretium lacus. Morbi ultrices, ligula a ultrices pulvinar, lorem sapien facilisis elit, fringilla malesuada ex lectus eget quam. Donec cursus ex eget sollicitudin
          mattis.
        </Paragraph>
      </>
    ),
    footer: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const CloseableMinimum: Story = {
  ...TestDialog,
  args: {
    header: <DialogTitle>Small</DialogTitle>,
    closeable: true,
    children: (
      <>
        <Paragraph>Small content to test mins.</Paragraph>
      </>
    ),
  },
};

export const NotCloseableMinimum: Story = {
  ...TestDialog,
  args: {
    header: <DialogTitle>Small</DialogTitle>,
    closeable: false,
    children: (
      <>
        <Paragraph>Small content to test mins.</Paragraph>
      </>
    ),
  },
};

export const Compact: Story = {
  render: (args) => (
    <DialogTrigger>
      <Button>Open Dialog</Button>

      <Modal variant="compact" isDismissable>
        <Dialog variant="compact" {...args} />
      </Modal>
    </DialogTrigger>
  ),
  args: {
    header: <DialogTitle>Compact Dialog</DialogTitle>,
    closeable: true,
    variant: "compact",
    children: (
      <>
        <TextField autoFocus>
          <Label>First Name</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name</Label>
          <Input />
        </TextField>
        <Paragraph>This is a compact dialog that takes up less vertical space on mobile devices. It has a max height of 70dvh and rounded top corners on mobile.</Paragraph>
      </>
    ),
    footer: (
      <>
        <Button>Save</Button>
        <Button variant="secondary">Cancel</Button>
      </>
    ),
  },
};

export const WithHeader: Story = {
  ...TestDialog,
  args: {
    header: (
      <>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogDescription>This action cannot be undone. Are you sure you want to proceed?</DialogDescription>
      </>
    ),
    closeable: true,
    children: (
      <>
        <Paragraph>Please review the details before confirming.</Paragraph>
      </>
    ),
    footer: (
      <>
        <Button>Confirm</Button>
        <Button variant="secondary">Cancel</Button>
      </>
    ),
  },
};
