
# HTML Event Handler Attribute

All event handlers declare in html tags attributes are called HTML event handler attribute

``` html

<button onclick="console.log('You clicked me')"></button>
```

# Object Property Event Handler

HTML elements attributes (called content attributes) have a corresponding object property (called Interfase Description Language Attributes (IDL attribute)) in their respective JS DOM Object. Well 'HTML event handler attributes' have a corresponding 'object property event handler' in JS as well:

```js
button = document.querySelector('button');

button.onclick = function onClick(e) {
  console.lob('You clicked me');
}
```

In both, HTML event handler attributes and object property event handler are listened to in the bubbling phase. They cannot be set to be listened to in the capture phase. These are also known as 'DOM0 event handler' or 'Event handler content attributes'. And you can only assign one typo event per each HTML element.

# Cancel Event

You can cancel events by returning 'false' with HTML event handler attributes and object property event handler. For all types of event handlers including events created with 'addEventListener()' we can use the recommended 'event.preventDefault()';

```js
function onClick(e) {
  e.preventDefault();
  e.defaultPrevented; // changes to 'true' when the event is cancelled
}

function onClick2(e) {
  return false;
}

a.addEventListener('click', onClick); //cancels the event
a.addEventListener('click', onClick2); // doesn't work because the callback returns true


a.onClick = (e) => return false; // it works because this is a object property even handler
```
```html

<a onclick='return false;'></a> <!-- it works because this is a HTML event handler attribute-->
```

## 'onerror' and 'beforeunload'

The 'window.onerror' object event property is not provided an error event curiously you have to use a function that returns **'true'** to cancel it.

```js
window.onerror = () => true;

window.addEventListener('error', 
  function myBad(e) {
    e.prefentDefault();
  },
);  // THis approach still works
```

The 'onerror' object event property of other JS DOM objects does have an event object parameter so we can follow normal cancelling event procedures on those:

```js
button.onerror = () => false;
```

With by cancelling 'beforeunload' we make the browser ask us if we are sure we want to close/refresh the page. We can cancel this event by returning literally anything in the event handler:

```js

window.onbeforeunload = function onBeforeUnload(e) {
  // return true;
  // return 'bla bla bla';
  // return {};
  // return 125;
  // return null;
  // all the above works
  e.preventDefault(); // won't work on all browsers. Works on some versions of chrome
}

```