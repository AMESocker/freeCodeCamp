#  1-10
## 1  Use Responsive Design with Bootstrap Fluid Containers
In the HTML5 and CSS section of freeCodeCamp we built a Cat Photo App. Now let's go back to it. This time, we'll style it using the popular Bootstrap responsive CSS framework.

Bootstrap will figure out how wide your screen is and respond by resizing your HTML elements - hence the name responsive design.

With responsive design, there is no need to design a mobile version of your website. It will look good on devices with screens of any width.

You can add Bootstrap to any app by adding the following code to the top of your HTML:
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
```
In this case, we've already added it for you to this page behind the scenes. Note that using either `>` or `/>` to close the `link` tag is acceptable.

To get started, we should nest all of our HTML (except the `link` tag and the `style` element) in a `div` element with the class `container-fluid`.
## 2  Make Images Mobile Responsive
First, add a new image below the existing one. Set its `src` attribute to `https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg`.

It would be great if this image could be exactly the width of our phone's screen.

Fortunately, with Bootstrap, all we need to do is add the `img-responsive` class to your image. Do this, and the image should perfectly fit the width of your page.
## 3  Center Text with Bootstrap
## 4  Create a Bootstrap Button
## 5  Create a Block Element Bootstrap Button
## 6  Taste the Bootstrap Button Color Rainbow
## 7  Call out Optional Actions with btn-info
## 8  Warn Your Users of a Dangerous Action with btn-danger
## 9  Use the Bootstrap Grid to Put Elements Side By Side
## 10  Ditch Custom CSS for Bootstrap
#  11-20
## 11  Use a span to Target Inline Elements
## 12  Create a Custom Heading
## 13  Add Font Awesome Icons to our Buttons
## 14  Add Font Awesome Icons to all of our Buttons
## 15  Responsively Style Radio Buttons
## 16  Responsively Style Checkboxes
## 17  Style Text Inputs as Form Controls
## 18  Line up Form Elements Responsively with Bootstrap
## 19  Create a Bootstrap Headline
## 20  House our page within a Bootstrap container-fluid div
#  21-31
## 21  Create a Bootstrap Row
## 22  Split your Bootstrap Row
## 23  Create Bootstrap Wells
## 24  Add Elements within Your Bootstrap Wells
## 25  Apply the Default Bootstrap Button Style
## 26  Create a Class to Target with jQuery Selectors
## 27  Add id Attributes to Bootstrap Elements
## 28  Label Bootstrap Wells
## 29  Give Each Element a Unique id
## 30  Label Bootstrap Buttons
## 31  Use Comments to Clarify Code
