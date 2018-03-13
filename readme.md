# My React knowledge

in this repo, i should find all the info needed for me to create a React app.

this app is a collection of:
- Express server, that serves static files, that's all what it does.
- a pre-script that generates ES5 compatible react code inside the public folder, by translating what's in the src folder, this is for generating multi-language versions.


# Tech involved
here's the tech that i use.

## Developement envirement
i use this on my PC:
- VSCode.
- NodeJS (with NPM).
- Chrome (with React Developer Tools) as the main dev browser, Firefox and Edge.

## Programming Languages needed
not much:
- JavaScript (ES5, ES6).
- HTML5.
- CSS3.
- INI.
- Markdown.


## NPM dependencies
For dev i use:
- ESLint, configured for React and babel.
- i don't feel like using Webpack-Dev-Server, not yet at least.

For production ( and the rest ) i use:
- Express: for serving the static files.
- React and React-Dom: for react related stuff.
- Webpack: for packing and spliting all the code, usefull for lazy-loading technic.
- Babel: used to translate the code to ES5 code, so that it would be compatible all the way back to IE8.