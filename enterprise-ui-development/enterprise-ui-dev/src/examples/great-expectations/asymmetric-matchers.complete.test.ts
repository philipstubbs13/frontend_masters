import { v4 as id } from 'uuid';
import { expect, it } from 'vitest';

type ComputerScientist = {
  id: string;
  firstName: string;
  lastName: string;
  isCool?: boolean;
};

const createComputerScientist = (
  firstName: string,
  lastName: string,
): ComputerScientist => ({ id: 'cs-' + id(), firstName, lastName });

const addToCoolKidsClub = (p: ComputerScientist, club: unknown[]) => {
  club.push({ ...p, isCool: true });
};

it('include cool computer scientists by virtue of them being in the club', () => {
  const people: ComputerScientist[] = [];

  addToCoolKidsClub(createComputerScientist('Grace', 'Hopper'), people);
  addToCoolKidsClub(createComputerScientist('Ada', 'Lovelace'), people);
  addToCoolKidsClub(createComputerScientist('Annie', 'Easley'), people);
  addToCoolKidsClub(createComputerScientist('Dorothy', 'Vaughn'), people);

  for (const person of people) {
    expect(typeof person.firstName).toBe('string');
    expect(typeof person.lastName).toBe('string');
    expect(person.isCool).toBe(true);
  }

  for (const person of people) {
    expect(person).toEqual({
      id: expect.stringMatching(/^cs-/),
      firstName: expect.any(String),
      lastName: expect.any(String),
      isCool: true,
    });
  }

  for (const person of people) {
    expect(person).toEqual(
      expect.objectContaining({
        isCool: expect.any(Boolean),
      }),
    );
  }
});
