# Create a new Page

The component can have any name, but you must export it as a default export.

# Dynamic routing

Next first looks for component in a individual file that matches the route before displaying the component returned in the dynamic route

```
Folder structure:

pages/[products].js
pages/t-shirt.js
```

- The endpoint `/t-shirt` will display the component returned by t-shirt.js.
- The endpoint `/pants will display the component in [products].js`


# `<Link>`

`<Link>` allows you to do client-side navigation to a different page in the application.

Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.

If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag

In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

# `getStaticProps`

Note: In production mode, `getStaticProps` runs on at build time. In development mode on each request instead.

Note: In Next.js, the lib folder does not have an assigned name like the pages folder, so you can name it anything. It's usually convention to use lib or utils.

Because it’s meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.

# Implement `getStaticPaths`

Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

# Index files

The index files in the pages folder match the root route of that folder or any other folder inside pages. For instance:

- pages/index.js = /
- pages/blogs.js = pages/blogs/index.js = /blogs

