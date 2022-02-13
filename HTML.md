## **Elements**

### **`<html>`**
```html
<html lang="en">
</html>
```
You should always include the `lang` attribute to declare the language of the Web page. This is meant to assist search engines and browsers.

As a convention, all HTML tags are written in lowercase.

### **`p`**

Preferred element for paragraph text. Browsers automatically add a single blank line before and after each `<p>` element.

### **Comments**
```html
<!-- start and end with a -->
```

## **`main`**

The main tag helps search engines and other developers find the main content of your page.

## **`img`**
Used to add images to your website. Points to a specific image's URL using the `src` attribute. All img elements must have an alt attribute. The text inside an alt attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.
```html 
<img src="https://www.your-image-source.com/your-image.jpg" alt="Author standing on a beach with two thumbs up.">
```
**Note**: Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.

## **`a(anchor)`**
Links content outside of your web page. Needs a destination web address called an href attribute. They also need anchor text. Ex.:
```html
<a href="https://freecodecamp.org">this links to freecodecamp.org</a>
```
|View|
|---|
|<a href="https://freecodecamp.org">this links to freecodecamp.org</a>|

It can also be used to create internal links to jump to different sections within a webpage. To create an internal link, you assign a link's href attribute to a hash symbol # plus the value of the id attribute for the element that you want to internally link to, usually further down the page. You then need to add the same id attribute to the element you are linking to. An id is an attribute that uniquely describes an element. Ex.:
```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```
|View|
|---|
|<a href="#contacts-header">Contacts</a> |
|<h2 id="contacts-header">Contacts</h2> |


**`target`**

Attribute that specifies where to open the linked document.
- `_blank` Opens the linked document in a new window or tab
- `_self` Opens the linked document in the same frame as it was clicked (this is default)
- `_parent` Opens the linked document in the parent frame
- `_top` Opens the linked document in the full body of the window
- `framename` Opens the linked document in a named frame

You can nest links within other text elements. Ex.:
```html
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>
```
<p>
  Here's a <a target="_blank" href="http://freecodecamp.org"> link to freecodecamp.org</a> for you to follow.
</p>

Sometimes you want to add a elements to your website before you know where they will link. For that, replace the `href` attribute value with a `#`. For example: href="#"

**Turn an Image into a Link**
```html
<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>
```
<a href="#"><img src="https://bit.ly/fcc-running-cats" alt="Three kittens running towards the camera."></a>

## **`ul`** 
Creates an unordered list. The li tag creates each item of the list. For example:
```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```
|View|
|---|
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>


## **`ol`**
On the other hand ol creates order lists. For example:
```html
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>
```
|View|
|---|
<ol>
  <li>Garfield</li>
  <li>Sylvester</li>
</ol>

## **`input`**
Creates a input box. The placeholder attribute displays text in the input element before the user inputs anything.  
```html
<input type="text" placeholder="cat photo URL">
```
|View|
|---|
<input type="text" placeholder="cat photo URL"> <br>

## **`form`**

Allows to build web forms that can submit data to a server. Ex.:
```html
<form action="/url-where-you-want-to-submit-form-data"></form>
```
The *input* tag is one of the most common children of *form* elements. The children elements in a *form* tag that hold data **must** have a `name` attribute. Otherwise when submitting the form the data held by the elements missing the name attribute may not be submitted or accepted by a server.

### **`id` vs `name` Attribute**

Both can uniquely identify an element. However the role of the `name` attribute goes beyond that in `form` elements. We can say *id's* are convenient and reliable to use for frontend (JS, CSS) and *name's* by the backend, since this is what the backend receives and processes.

## **`button`**
Creates a button that by clicking it will send the data from your form to the URL you specified with your form's action attribute. Ex.:
```html
<button type="submit">this button submits the form</button>
```
<button type="submit">this button submits the form</button>

## **Ratio buttons** 
In HTML they are a type of input. Each button can be nested in its own label element to be associated with it. All related radio buttons should have the same name attribute to create a radio button group. It is considered best practice to set a for attribute on the label element, with a value that matches the value of the id attribute of the input element. This allows assistive technologies to create a linked relationship between the label and the child input element. Ex:
```html
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
```
|View|
|---|
<label for="indoor"> 
  <input id="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<br>

Checkbox: Another type of input. It follows the exact same syntax as the ratio buttons. Ex.:
```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>
```
|View|
|---|
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving</label>

## **Submitted value** 
When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type radio and checkbox report their values from the value attribute. If you omit the value attribute, the submitted form data uses the default value, which is on. Ex.: indoor-outdoor=on, which is not useful. So the value attribute needs to be set to something to identify the option. Ex.:
```html
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
```
|View|
|---|
<label for="indoor"> 
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor 
</label>
<label for="outdoor"> 
  <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor 
</label>
<br>

Check Radio Buttons and Checkboxes by Default. Ex.:
```html
<input type="radio" name="test-name" checked>
```
<input type="radio" name="test-name" checked>
<br>

## **`div`**. 
Its general purpose is a container of other elements. It can be styled with CSS or manipulated with JavaScript.

## **Default structure**
At the top of your document, you need to tell the browser which version of HTML your page is using. You tell the browser this information by adding the `<!DOCTYPE ...>` tag on the first line, where the ... part is the version of HTML. For HTML5, you use `<!DOCTYPE html>`. The `!` and uppercase DOCTYPE is important, especially for older browsers. The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.

The html is not case sensitive. The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like *XHTML*.

## **`head` and `body`**
Any markup with information about your page would go into the `head` tag. Then any markup with the content of the page would go into the `body` tag. Metadata elements, such as link, meta, title, style, script, and  base typically go inside the head element. Ex.:
```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```

## HTML is Not Case Sensitive
HTML tags are not case sensitive.

## `title` Attribute
The title attribute defines some extra information about an element. The value of the title attribute will be displayed as a tooltip when you mouse over the element.

## `iFrame`

Used to display a web page within a web page. <br>
Syntax:
```html
<iframe src="url" title="description">

```
An iframe can be used as the target frame for a link
```html
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>

<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```
<br>

## `noscript`
Users that have disabled scripts in their browser and browser without support for JavaScript will show the text written inside the *noscript* element.
```html
<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>
<noscript>Sorry, your browser does not support JavaScript!</noscript>
```

<br>

## Web Worker
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished. A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. <br>
**Note**: Normally web workers are not used for simple scripts, but for more CPU intensive tasks.

<br>

---
# **MISC**

## Restrictions on spaces and lines

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will automatically remove any extra spaces and lines when the page is displayed:
```html
<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>
```

## `<em>` (Screen readers). 
A screen reader will pronounce the words in `<em>` with an emphasis, using verbal stress.

## `<b>` Last resort
For bold text according to the HTML5 specification, the `<b>` tag should be used as a **LAST** resort when no other tag is more appropriate. 

## `<title>`, Importance in SEOs
The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

## **Meta, refresh page**
```html
<meta http-equiv="refresh" content="30">
```
<br>

## `URL` breakdown
Uniform Resource Locator. <br>
- `scheme://prefix.domain:port/path/filename`
  - *scheme* - defines the type of Internet service (most common is http or https)
  - *prefix* - defines a domain prefix (default for http is www)
  - *domain* - defines the Internet domain name (like w3schools.com)
  - *port* - defines the port number at the host (default for http is 80)
  - *path* - defines a path at the server (If omitted: the root directory of the site)
  - *filename* - defines the name of a document or resource
- *URL Encoding*. URLs can only be sent over the Internet using the ASCII character-set. URL encoding converts non-ASCII characters with a "%" followed by hexadecimal digits. URLs cannot contain spaces. URL encoding normally replaces a space with a plus (+) sign, or %20.

## `Input` restrictions
Are not foolproof, and JavaScript provides many ways to add illegal input. To safely restrict input, it must also be checked by the receiver (the server)!

## Height and width of images 
**Tip**: Always specify both the height and width attributes for images. If height and width are set, the space required for the image is reserved when the page is loaded. Without these attributes, the browser does not know the size of the image, and cannot reserve the appropriate space to it. The effect will be that the page layout will change during loading (while the images load).

## Media support
Only *MP4*, *WebM*, and *Ogg* video are supported by the HTML standard.

##  **<Scripts>**
Placing scripts at the bottom of the `<body>` element improves the display speed, because script interpretation slows down the display.

## **Editing Website Live on Browser**

```js
document.designMode = 'on'
//edit page then
document.designMode = 'off'
```