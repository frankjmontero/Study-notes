# **`npm`**

## **`npm install`**

### **`-D` Flag**

```nodejs
npm i -D
```

Equivalent to `--save-dev` saves installed dependencies in the devDependencies object of the package.json file. We do this to indicate that those dependencies should only be installed in a development environment. This means in any machine flagged as production (`NODE_ENV="production"`) if we run `npm install` those dependencies will not install.