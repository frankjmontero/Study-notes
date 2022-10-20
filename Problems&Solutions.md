# Css

## Query

### Problem

Performing a selection using element.closest | querySelector for an ID and classnames that were just a number throws the following error: 'Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'tr.5' is not a valid selector.'

### Solution

You are allowed to use IDs that start with a digit in your HTML5 documents:

The value must be unique amongst all the IDs in the element's home subtree and must contain at least one character. The value must not contain any space characters.

There are no other restrictions on what form an ID can take; in particular, IDs can consist of just digits, start with a digit, start with an underscore, consist of just punctuation, etc.

But querySelector method uses CSS3 selectors for querying the DOM and CSS3 doesn't support ID selectors that start with a digit:

In CSS, identifiers (including element names, classes, and IDs in selectors) can contain only the characters `[a-zA-Z0-9]` and ISO 10646 characters U+00A0 and higher, plus the hyphen (-) and the underscore (\_); they cannot start with a digit, two hyphens, or a hyphen followed by a digit.

Use a value like b22 for the ID attribute and your code will work.

Since you want to select an element by ID you can also use .getElementById method:

document.getElementById('22')

# Git

## Github submodules

### Problem

Having a project in a git repository, you add or have another directory inside that project with a .git folder (another git repository), then when trying to push the main outer git repository the files in the inner repository are not pushed.

### Solution

This is a normal behavior of git. In Github the inner repository in the project is called **submodule**. If this is not what you intend, do the following:

1. Go to the submodule and delete its .git folder.
2. In a terminal go to the root directory of the project (the one who's repository you are going to keep and use) and run the following command:

```
git rm --cached [dir]
```

> Replace `dir` with the directory of the submodule.

3. Now you can run `git add` to add the directory back.
