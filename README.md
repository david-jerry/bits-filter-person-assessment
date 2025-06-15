# Person Filtering Solution

This project implements a TypeScript solution for filtering users and admins based on specific criteria, with proper type safety and conditional return types.

## Task Description

The solution addresses the following requirements:

1. Implement a `filterPersons` function that:
   - Returns `User[]` when `personType` is 'user'
   - Returns `Admin[]` when `personType` is 'admin'
2. Accept partial User or Admin types based on the `personType` argument
3. Exclude the `type` field from filtering criteria

## Solution Features

- Type-safe filtering with conditional return types
- Proper handling of partial criteria objects
- Clear separation between User and Admin types
- Example implementation with sample data

## Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (as specified in package.json)
- TypeScript (included in devDependencies)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

## Running the Solution

To execute the solution and see the filtered results:

```bash
pnpm start
```

This will:

1. Compile and run the TypeScript code
2. Filter the sample data for:
   - Users aged 25
   - Admins aged 40
3. Display the results in the console

## Expected Output

The console will display:

```bash
Users aged 25:
[
  { type: 'user', name: 'Alice', age: 25, occupation: 'Developer' },
  { type: 'user', name: 'Charlie', age: 25, occupation: 'Designer' }
]

Admins aged 40:
[
  { type: 'admin', name: 'Bob', age: 40, role: 'Administrator' },
  { type: 'admin', name: 'Dave', age: 40, role: 'CEO' }
]
```

## Project Structure

- `results.ts`: Main implementation file containing:
  - Type definitions (User, Admin, Person)
  - The `filterPersons` function
  - Sample data and execution code
- `package.json`: Project configuration with scripts and dependencies
- `README.md`: This documentation file
- `tsconfig.json`: Typescript configuration file

## Customization

To test with different criteria:

1. Edit the `main()` function in `results.ts`
2. Add new filter examples following the same pattern
3. Run `pnpm start` to see the new results

## Type Safety Verification

The implementation ensures:

- Criteria objects cannot include the 'type' field
- Return types match the requested personType
- Filtering only works with valid properties for each type
