<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js"></script>
</head>

# 1 Store Data with Sass Variables
One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript.

In JavaScript, variables are defined using the `let` and `const` keywords. In Sass, variables start with a `$` followed by the variable name.

Here are a couple examples:
```
$main-fonts: Arial, sans-serif;
$headings-color: green;
```
And to use the variables:
```
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```
One example where variables are useful is when a number of elements need to be the same color. If that color is changed, the only place to edit the code is the variable value.

Create a variable `$text-color` and set it to `red`. Then change the value of the `color` property for the `.blog-post` and `h2` to the `$text-color` variable.
# 2 Nest CSS with Sass
Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

Normally, each element is targeted on a different line to style it, like so:
```
article {
  height: 200px;
}

article p {
  color: white;
}

article ul {
  color: blue;
}
```
For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements:
```
article {
  height: 200px;

  p {
    color: white;
  }

  ul {
    color: blue;
  }
}
```
Use the nesting technique shown above to re-organize the CSS rules for both children of `.blog-post` element. For testing purposes, the `h1` should come before the `p` element.
