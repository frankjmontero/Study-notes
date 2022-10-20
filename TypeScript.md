# **`The Basics`**

A _type_ is the concept of describing which values can be passed to fn and which will crash. JavaScript only truly provides dynamic typing. The alternative is to use a _static_ type system to make predictions about what code is expected before it runs.

## Installation

```
npm install -g typescript
# Globally

npm i typescript
# locally installed
# or
npm i -D typescript
# and
npm i typescript --save-dev
# installs on development environment
```

## **Compiler**

```
tsc -w -p Test.ts
```

Recompiles the given file automatically every time a change is saved.
