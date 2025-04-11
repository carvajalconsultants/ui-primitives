import { faker } from "@faker-js/faker";

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  createdAt: Date;
}

export interface PersonApiResponse {
  data: Person[];
  meta: {
    totalRowCount: number;
  };
}

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (index: number): Person => ({
  id: index + 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int(40),
  visits: faker.number.int(1000),
  progress: faker.number.int(100),
  createdAt: faker.date.anytime(),
  status: faker.helpers.shuffle<Person["status"]>(["relationship", "complicated", "single"])[0],
});

export const makeData = (...lens: number[]) => {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth];
    return range(len).map(
      (d): Person => ({
        ...newPerson(d),
      })
    );
  };

  return makeDataLevel();
};

const data = makeData(1_000_000);

//simulates a backend api
export const fetchData = async (start: number, size: number) => {
  const dbData = [...data];

  //simulate a backend api
  await new Promise((resolve) => setTimeout(resolve, 200));

  return {
    data: dbData.slice(start, start + size),
    meta: {
      totalRowCount: dbData.length,
    },
  };
};
