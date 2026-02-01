// var ar = 45;

// ar = 56;


// console.log(ar);


// var ar = 78;  

// const ar = "lakshmanan";

// console.log(ar);




1.Template literals are string literals introduced in ES6 that use **backticks ()** and allow **variable interpolation, expressions, and multi-line strings** using ${}`

2.Better readability

Less syntax errors

Easy expression handling

Native multi-line support

3.They look like natural text, reduce + operators, and keep variables inline.

`Hello ${name}, your age is ${age}`

4.Yes. Any valid JavaScript expression can be evaluated.

`${a + b}`
`${isLoggedIn ? "Yes" : "No"}`

5.They preserve line breaks without \n.

`Line 1
Line 2`

6.👉 Runtime
Expressions inside ${} are evaluated when the code runs.

7.JSX dynamic text

CSS class names

API URLs
+

Inline styles

Logging & debugging

8.Yes (template literal inside another expression).

`${`Hello ${name}`}`

9.It prints "undefined".

let a;
`${a}` // "undefined"

10.Yes (very common).

fetch(`https://api.com/users/${id}`)










-