# JavaScript Basics

## Variables and Data Types

JavaScript has several ways to declare variables:

```javascript
// Using var (function-scoped)
var name = "John";

// Using let (block-scoped)
let age = 25;

// Using const (block-scoped, immutable binding)
const PI = 3.14159;
```

### Primitive Data Types

JavaScript has 7 primitive data types:

1. `string`
2. `number`
3. `boolean`
4. `null`
5. `undefined`
6. `symbol`
7. `bigint`

Example:
```javascript
let str = "Hello";           // string
let num = 42;                // number
let bool = true;             // boolean
let nothing = null;          // null
let undef = undefined;       // undefined
let sym = Symbol();          // symbol
let bigInt = 9007199254740991n; // bigint
```

## Functions

Functions in JavaScript can be declared in several ways:

```javascript
// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow Function
const greet = (name) => `Hello, ${name}!`;
```

## Control Flow

### Conditional Statements

```javascript
if (condition) {
    // code
} else if (anotherCondition) {
    // code
} else {
    // code
}

// Ternary operator
const result = condition ? "yes" : "no";

// Switch statement
switch (value) {
    case 1:
        // code
        break;
    case 2:
        // code
        break;
    default:
        // code
}
```

### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// For...of loop (for iterables)
for (const item of array) {
    console.log(item);
}

// For...in loop (for object properties)
for (const key in object) {
    console.log(key, object[key]);
}
```

## Error Handling

```javascript
try {
    // Code that might throw an error
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
} finally {
    // Code that runs regardless of error
}
```

## Best Practices

1. Always use `const` or `let` instead of `var`
2. Use meaningful variable and function names
3. Keep functions small and focused
4. Use proper error handling
5. Comment your code when necessary
6. Use strict mode with `'use strict';`
7. Follow consistent code formatting 