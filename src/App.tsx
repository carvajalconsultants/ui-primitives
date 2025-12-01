import { useState } from "react";
import { Button as AriaButton, DialogTrigger, Group, Input } from "react-aria-components";

import * as v from "valibot";

import { css } from "../styled-system/css";
import { Box, HStack, Stack } from "../styled-system/jsx";
import { Accordion } from "./accordion/Accordion";
import { AccordionHeader } from "./accordion/AccordionHeader";
import { AccordionItem } from "./accordion/AccordionItem";
import { AccordionPanel } from "./accordion/AccordionPanel";
import { Avatar } from "./avatar/Avatar";
import { Badge } from "./badge/Badge";
import { Button } from "./button/Button";
import { Checkbox } from "./checkbox/Checkbox";
import { ComboBox } from "./combobox/ComboBox";
import { Icon } from "./common/Icon";
import { Label } from "./common/Label";
import { ContentHeader } from "./contentheader/ContentHeader";
import { DatePicker } from "./datepicker/DatePicker";
import { NumberField } from "./field/NumberField";
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
import { RadialProgress } from "./radialprogress/RadialProgress";
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

const courseSections = [
  {
    id: "personal",
    title: "Personal Information",
    chapterCount: 3,
    chapters: [
      { id: "ch1", title: "Chapter 1: Introduction", iconId: "calendar" as const },
      { id: "ch2", title: "Chapter 2: Basics", iconId: "search" as const },
      { id: "ch3", title: "Chapter 3: Advanced", iconId: "x" as const },
    ],
  },
  {
    id: "billing",
    title: "Billing Address",
    chapterCount: 2,
    chapters: [
      { id: "ch4", title: "Chapter 4: Payment", iconId: "calendar" as const },
      { id: "ch5", title: "Chapter 5: Confirmation", iconId: "search" as const },
    ],
  },
  {
    id: "payment",
    title: "Payment Method",
    chapterCount: 1,
    chapters: [],
  },
];

export const App = () => {
  const { todos, isLoading, error } = useMockFetchTodos();

  const [selected, setSelected] = useState<Selection>(new Set(["parking"]));

  const form = useAppForm({
    defaultValues: {
      firstName: "John",
      emailAddress: "john@doecom",
      width: 1024,
      height: 768,
    },
    validators: {
      onSubmit: v.object({
        firstName: v.pipe(v.string(), v.nonEmpty("Please enter your name.")),
        emailAddress: v.pipe(v.string(), v.email("Please enter a valid e-mail address.")),
        width: v.pipe(v.number(), v.minValue(0, "Please enter a valid width.")),
        height: v.pipe(v.number(), v.minValue(0, "Please enter a valid height.")),
      }),
    },
    onSubmit: ({ value: { firstName, emailAddress } }) => {
      alert(`Sending to ${firstName} at ${emailAddress}`);
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
      <Heading>Form Test</Heading>
      <form.AppForm>
        <form.Element>
          <form.AppField name="firstName">{(field) => <field.TextField name={field.name} label="First Name" />}</form.AppField>
          <form.AppField name="emailAddress">{(field) => <field.TextField name={field.name} label="E-mail" />}</form.AppField>
          <form.AppField name="width">{(field) => <field.NumberField label="Width" minValue={0} />}</form.AppField>
          <form.AppField name="height">{(field) => <field.NumberField label="Height" minValue={0} maxValue={2000} step={10} />}</form.AppField>
          <Button type="submit">Test it</Button>
        </form.Element>
      </form.AppForm>

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

      <Stack gap="4" width="full" maxWidth="[600px]">
        <Heading size="lg" weight="bold" color="primary">
          Course Content
        </Heading>
        <Accordion defaultExpandedKeys={["personal"]}>
          {courseSections.map((section) => (
            <AccordionItem key={section.id} id={section.id}>
              <AccordionHeader>
                <HStack gap="3">
                  <Heading level={3} size="sm" weight="medium">
                    {section.title}
                  </Heading>

                  <span className={css({ fontSize: "sm", color: "text.secondary" })}>
                    {section.chapterCount} {section.chapterCount === 1 ? "chapter" : "chapters"}
                  </span>
                </HStack>
              </AccordionHeader>

              <AccordionPanel>
                {section.chapters.length > 0 ? (
                  <Stack gap="5">
                    {section.chapters.map((chapter) => (
                      <HStack key={chapter.id} gap="3" alignItems="center">
                        <Icon id={chapter.iconId} size="4" className={css({ color: "text.secondary" })} />
                        <Paragraph size="sm" color="secondary">
                          {chapter.title}
                        </Paragraph>
                      </HStack>
                    ))}
                  </Stack>
                ) : (
                  <Paragraph>Payment method form here.</Paragraph>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>

      <Link href="/" variant="link">
        Learn More
      </Link>

      <TextField placeholder="Some placeholder text" label="Text field" />

      <NumberField label="Width" minValue={0} defaultValue={1024} placeholder="Enter width" />
      <NumberField label="Height" minValue={0} maxValue={2000} step={10} defaultValue={768} placeholder="Enter height" description="Maximum height is 2000px" />

      <NumberField label="Width with Steppers" minValue={0} defaultValue={1024}>
        <Group style={{ display: "flex", borderRadius: "4px", border: "1px solid #ccc" }}>
          <AriaButton slot="decrement" style={{ padding: "8px 12px", border: "none", background: "#f0f0f0", cursor: "pointer", borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }}>
            -
          </AriaButton>
          <Input style={{ flex: 1, padding: "8px", border: "none", outline: "none", textAlign: "center" }} />
          <AriaButton slot="increment" style={{ padding: "8px 12px", border: "none", background: "#f0f0f0", cursor: "pointer", borderTopRightRadius: "4px", borderBottomRightRadius: "4px" }}>
            +
          </AriaButton>
        </Group>
      </NumberField>

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

      <Stack gap="4">
        <Heading size="lg" weight="medium">
          RadialProgress Examples
        </Heading>

        <HStack gap="8" alignItems="center">
          <RadialProgress percentage={65} size={120} strokeWidth={10}>
            <Box>
              <Heading size="lg" weight="bold">
                65
              </Heading>
              <Paragraph size="xs">Visitors</Paragraph>
            </Box>
          </RadialProgress>

          <RadialProgress percentage={75} size={100} strokeWidth={8}>
            <Box>
              <Heading size="lg" weight="bold">
                75
              </Heading>
              <Paragraph size="xs">Complete</Paragraph>
            </Box>
          </RadialProgress>
          <RadialProgress percentage={50} size={50} strokeWidth={4}>
            <Box>
              <Heading size="lg" weight="bold">
                50
              </Heading>
              <Paragraph size="xs">In Progress</Paragraph>
            </Box>
          </RadialProgress>
          <RadialProgress percentage={90} size={100} strokeWidth={8} variant="success">
            <Box>
              <Heading size="lg" weight="bold">
                90
              </Heading>
              <Paragraph size="xs">Success</Paragraph>
            </Box>
          </RadialProgress>
          <RadialProgress percentage={25} size={100} strokeWidth={8} variant="danger" />
          <RadialProgress percentage={60} size={100} strokeWidth={8} variant="warning">
            <Box>
              <Heading size="lg" weight="bold">
                60
              </Heading>
              <Paragraph size="xs">Warning</Paragraph>
            </Box>
          </RadialProgress>
          <RadialProgress percentage={70} size={200} strokeWidth={16}>
            <Box>
              <Heading size="lg" weight="bold">
                70
              </Heading>
              <Paragraph size="xs">Complete</Paragraph>
            </Box>
          </RadialProgress>
          <RadialProgress percentage={80} size={100} strokeWidth={4}>
            <Box>
              <Heading size="lg" weight="bold">
                80
              </Heading>
              <Paragraph size="xs">Complete</Paragraph>
            </Box>
          </RadialProgress>
          <RadialProgress percentage={75} size={120} strokeWidth={12}>
            <Box>
              <Heading size="lg" weight="bold">
                75%
              </Heading>
              <Paragraph size="xs">Complete</Paragraph>
            </Box>
          </RadialProgress>
        </HStack>
      </Stack>
    </Stack>
  );
};
