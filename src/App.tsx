import { useState } from "react";
import { DialogTrigger } from "react-aria-components";

import { css } from "../styled-system/css";
import { Box, HStack, Stack } from "../styled-system/jsx";
import { Avatar } from "./avatar/Avatar";
import { Badge } from "./badge/Badge";
import { Button } from "./button/Button";
import { Checkbox } from "./checkbox/Checkbox";
import { ComboBox } from "./combobox/ComboBox";
import { Icon } from "./common/Icon";
import { Label } from "./common/Label";
import { ContentHeader } from "./contentheader/ContentHeader";
import { DatePicker } from "./datepicker/DatePicker";
import { SearchField } from "./field/SearchField";
import { SliderField } from "./field/SliderField";
import { SwitchField } from "./field/SwitchField";
import { TextField } from "./field/TextField";
import { ToggleSectionField } from "./field/ToggleSectionField";
import { useAppForm } from "./form";
import { Link } from "./link/Link";
import { ListBox } from "./listbox/ListBox";
import { ListBoxItem } from "./listbox/ListBoxItem";
import { VirtualizedListBox } from "./listbox/VirtualizedListBox";
import { Dialog } from "./overlay/Dialog";
import { DialogTitle } from "./overlay/DialogTitle";
import { Modal } from "./overlay/Modal";
import { Radio } from "./radiogroup/Radio";
import { RadioGroup } from "./radiogroup/RadioGroup";
import { Select } from "./select/Select";
import { Tab } from "./tab/Tab";
import { TabList } from "./tab/TabList";
import { TabPanel } from "./tab/TabPanel";
import { Tabs } from "./tab/Tabs";
import { Cell } from "./table/Cell";
import { HeaderCell } from "./table/HeaderCell";
import { Row } from "./table/Row";
import { Table } from "./table/Table";
import { TableBody } from "./table/TableBody";
import { TableFooter } from "./table/TableFooter";
import { TableHeader } from "./table/TableHeader";
import { Tag } from "./taggroup/Tag";
import { TagGroup } from "./taggroup/TagGroup";
import { useMockFetchTodos } from "./test/use-mock-fetch-todos";
import { Heading } from "./typography/Heading";
import { Paragraph } from "./typography/Paragraph";

import type { Selection } from "react-aria-components";

const animals = [
  { id: 1, name: "Fluffy Penguin" },
  { id: 2, name: "Curious Giraffe" },
  { id: 3, name: "Sleepy Koala" },
  { id: 4, name: "Playful Otter" },
  { id: 5, name: "Majestic Eagle" },
  { id: 6, name: "Clever Fox" },
  { id: 7, name: "Gentle Elephant" },
  { id: 8, name: "Sneaky Chameleon" },
  { id: 9, name: "Graceful Dolphin" },
  { id: 10, name: "Wise Owl" },
  { id: 11, name: "Energetic Squirrel" },
  { id: 12, name: "Lazy Sloth" },
  { id: 13, name: "Brave Lion" },
  { id: 14, name: "Mischievous Monkey" },
  { id: 15, name: "Elegant Swan" },
  { id: 16, name: "Cunning Wolf" },
  { id: 17, name: "Friendly Dolphin" },
  { id: 18, name: "Colorful Parrot" },
  { id: 19, name: "Sturdy Rhinoceros" },
  { id: 20, name: "Agile Cheetah" },
  { id: 21, name: "Peaceful Panda" },
  { id: 22, name: "Loyal Dog" },
  { id: 23, name: "Curious Cat" },
  { id: 24, name: "Majestic Horse" },
  { id: 25, name: "Playful Kangaroo" },
  { id: 26, name: "Wise Tortoise" },
  { id: 27, name: "Graceful Gazelle" },
  { id: 28, name: "Clever Raccoon" },
  { id: 29, name: "Gentle Giant Panda" },
  { id: 30, name: "Mysterious Octopus" },
];
const items = [...animals];

const listItems = Array.from({ length: 100 }).map((_, i) => ({
  key: i,
  textValue: i.toString(),
  content: `Item ${i}`,
}));

export const App = () => {
  const { todos, isLoading, error } = useMockFetchTodos();

  const [selected, setSelected] = useState<Selection>(new Set(["parking"]));

  const form = useAppForm({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
    },
  });

  return (
    <Stack
      gap="4"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4",
        alignItems: "start",
        justifyContent: "center",
        minHeight: "screen",
      }}
      md={{
        // minWidth: "[1068px]",
        maxWidth: "[1324px]",
      }}>
      {/* Temporary <Icon> fix */}
      <Box width="4" height="4" bg="primary.foreground" />
      <form.AppField name="firstName">{(field) => <field.TextField label="First Name" />}</form.AppField>

      <Tabs defaultSelectedKey="tab1">
        <TabList aria-label="Tabs with Disabled Tab">
          <Tab id="tab1">Tab 1</Tab>
          <Tab id="tab2">Tab 2</Tab>
          <Tab id="tab3" isDisabled>
            Tab 3 (Disabled)
          </Tab>
        </TabList>
        <TabPanel id="tab1">
          <Paragraph>Content for Tab 1</Paragraph>
        </TabPanel>
        <TabPanel id="tab2">
          <Paragraph>Content for Tab 2</Paragraph>
        </TabPanel>
        <TabPanel id="tab3">
          <Paragraph>Content for Tab 3</Paragraph>
        </TabPanel>
      </Tabs>

      {/* <Modal variant="compact" isOpen isDismissable>
        <Dialog variant="compact" title="Dialog Title">
          <Paragraph>This is a dialog.</Paragraph>
        </Dialog>
      </Modal> */}

      <SearchField bordered />
      <Stack gap="0" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
        <Paragraph weight="semibold" size="md" color="primary">
          Mark Clarke
        </Paragraph>
        <Paragraph size="xs" weight="regular" color="text" textTransform="capitalize">
          admin
        </Paragraph>
      </Stack>

      <Table scrollContainerProps={{ style: { width: "786px", height: "300px" } }}>
        <TableHeader>
          <Row>
            <HeaderCell>Tag</HeaderCell>
            <HeaderCell>Amenity</HeaderCell>
          </Row>
        </TableHeader>
        <TableBody>
          {animals.map((animal) => (
            <Row key={animal.id}>
              <Cell>{animal.id}</Cell>
              <Cell>{animal.name}</Cell>
            </Row>
          ))}
        </TableBody>

        <TableFooter>
          <Row>
            <Cell>Total</Cell>
            <Cell>{animals.length}</Cell>
          </Row>
        </TableFooter>
      </Table>

      <Stack mt="9">
        <TagGroup label="Amenities" selectionMode="multiple" selectedKeys={selected} onSelectionChange={setSelected}>
          <Tag id="laundry">Laundry</Tag>
          <Tag id="fitness">Fitness center</Tag>
          <Tag id="parking">Parking</Tag>
          <Tag id="pool">Swimming pool</Tag>
          <Tag id="breakfast">Breakfast</Tag>
        </TagGroup>
        <p className={css({ fontSize: "sm" })}>Current selection (controlled): {selected === "all" ? "all" : [...selected].join(", ")}</p>
      </Stack>

      <Select label="Select an animal" size="sm">
        <ListBox items={animals}>
          {(item) => (
            <ListBoxItem key={item.id} size="sm">
              {item.name}
            </ListBoxItem>
          )}
        </ListBox>
      </Select>

      <Stack>
        <Label size="lg" weight="medium">
          PPI Primitives
        </Label>
        <Heading size="lg" color="primary" weight="medium" textWrap="wrap">
          PPI Primitives
        </Heading>
        <Paragraph>This is a sample application.</Paragraph>
      </Stack>

      <DatePicker label="Date Picker" />
      {/* <DateRangePicker label="Date Range Picker" /> */}

      <Button variant="outline" size="icon">
        <Icon id="search" size="2" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon id="search" size="3" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon id="search" size="4" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon id="search" size="5" />
      </Button>
      <Button variant="outline" size="icon">
        <Icon id="search" size="6" />
      </Button>
      <Button>Get Started</Button>
      <Button>
        <Icon id="search" size="4" />
        Get Started
      </Button>
      <Button variant="secondary">Get Started</Button>
      <Button variant="ghost">Get Started</Button>

      <HStack gap="1.5">
        <Badge variant="success">Primary</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
      </HStack>

      <DialogTrigger>
        <Button>Open Dialog</Button>

        <Modal isDismissable>
          <Dialog>
            <DialogTitle>Dialog Title</DialogTitle>
            <Paragraph>This is a dialog.</Paragraph>
          </Dialog>
        </Modal>
      </DialogTrigger>

      <SwitchField
        label="Switch field"
        description="This is a description and it is very very very long and it should wrap. Hahaha I'm so happy I'm writing this description and the text wraps on parent width"
      />

      <ToggleSectionField label="Toggle section field">
        <Paragraph>This section is hidden until the field is toggled ON.</Paragraph>
      </ToggleSectionField>

      <Link href="/" variant="link">
        Learn More
      </Link>

      <TextField placeholder="Some placeholder text" label="Text field" />

      <ContentHeader title="Page Header" description="This is a description" />

      <SliderField defaultValue={50} label="A simple and short label" maxValue={100} />
      <SliderField defaultValue={250} minValue={100} maxValue={500} label="A long label to see how it overflows with the rest of the component" />

      <HStack smDown={{ flexDirection: "column" }} gap="9">
        <Avatar />
        <Avatar src="https://i.imgur.com/kJOwAdv.png" />
      </HStack>

      <ComboBox placeholder="Search defaultItems..." label="Animal Names" defaultItems={items} description="Please select an animal for your pet.">
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ComboBox>

      {isLoading ? (
        <Paragraph>Loading todos...</Paragraph>
      ) : error ? (
        <Paragraph>Error: {error.message}</Paragraph>
      ) : (
        <ComboBox placeholder="Search Todos..." label="Todo Titles" items={todos} description="Please select a todo item.">
          {(item) => <ListBoxItem>{item.title}</ListBoxItem>}
        </ComboBox>
      )}

      <VirtualizedListBox aria-label="Virtualized listbox example" style={{ border: "1px solid red", height: "100%", width: "100%", maxHeight: "400px", overflow: "auto" }}>
        {listItems.map(({ key, textValue, content }) => (
          <ListBoxItem key={`${key}-${textValue}-${Math.random()}`} textValue={textValue}>
            {content}
          </ListBoxItem>
        ))}
      </VirtualizedListBox>

      <Checkbox>Subscribe to newsletter</Checkbox>

      <RadioGroup>
        <Radio value="option1">Vertical Option 1</Radio>
        <Radio value="option2">Vertical Option 2</Radio>
        <Radio value="option3">Vertical Option 3</Radio>
        <Radio value="option4" isDisabled>
          Vertical Option 4 (disabled)
        </Radio>
      </RadioGroup>
    </Stack>
  );
};
