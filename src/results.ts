/**
 * This module provides a function to filter an array of persons based on their type
 * and specified criteria. It supports two types of persons: 'user' and 'admin'.
 * The function returns an array of persons matching the specified type and criteria.
 */

// results.ts
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

/**
 * Filters an array of persons based on their type and specified criteria.
 * @param persons - The array of persons to filter.
 * @param personType - The type of person to filter by ('user' or 'admin').
 * @param criteria - The criteria to use for filtering.
 * @returns An array of persons matching the specified type and criteria.
 */
function filterPersons<T extends Person['type']>(
    persons: Person[],
    personType: T,
    criteria: Partial<Omit<T extends 'user' ? User : Admin, 'type'>>
): T extends 'user' ? User[] : Admin[] {
    return persons.filter((person) => {
        if (person.type !== personType) {
            return false;
        }

        return Object.entries(criteria).every(([key, value]) => {
            return person[key as keyof Omit<Person, 'type'>] === value;
        });
    }) as T extends 'user' ? User[] : Admin[];
}

/**
 * Main function to demonstrate the filtering functionality.
 * It creates an array of persons and filters them based on type and criteria.
 */
function main() {
    // Example data for testing
    // I defined a list of persons with different types
    const persons: Person[] = [
        { type: 'user', name: 'Alice', age: 25, occupation: 'Developer' },
        { type: 'admin', name: 'Bob', age: 40, role: 'Administrator' },
        { type: 'user', name: 'Charlie', age: 25, occupation: 'Designer' },
        { type: 'admin', name: 'Dave', age: 40, role: 'CEO' }
    ];

    // Filter examples
    const usersOfAge25 = filterPersons(persons, 'user', { age: 25 });
    const adminsOfAge40 = filterPersons(persons, 'admin', { age: 40 });

    // Display results in the console
    console.log('Filtered Results:');
    console.log('------------------');
    console.log('All Persons:');
    console.log(persons);
    console.log('Users aged 25:');
    console.log(usersOfAge25);
    console.log('\nAdmins aged 40:');
    console.log(adminsOfAge40);
}

// Execute the main function
main();