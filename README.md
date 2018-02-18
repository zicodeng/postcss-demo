# PostCSS Demo

This repo demonstrates some powerful features of PostCSS and how to set it up with Webpack.

## Features

### Autoprefixer

Parse CSS and add vendor prefixes to CSS rules.

### babel-plugin-react-css-modules

Transforms styleName to className using compile time CSS module resolution.

### postcss-cssnext

Write future CSS today.

This plugin includes Autoprefixer plugin by default.

VSCode does not natively support nesting rule syntax in `.css` files. We need to install **PostCSS syntax** plugin to remove all the warnings or rename file to `postcss` extension.

### postcss-import

Share CSS across multiple different stylesheets.

### postcss-simple-vars

Define SASS-like variables.

Unfortunately, VSCode does not natively support `$` symbol. It will not throw any warnings, but `.css` files will look wierd. A solution to this is to define all variables in a `.scss` file and use **postcss-scss** plugin to parse that `.scss` file.

### postcss-scss

This module does not compile SCSS. It simply parses mixins as custom at-rules & variables as properties, so that PostCSS plugins can then transform SCSS source code alongside CSS.

### Lost

A powerful grid system that relies on `calc()` to create the grid.

### postcss-custom-media

## Pros

* Faster than any preprocessors: https://github.com/postcss/postcss/issues/64
* So many powerful plugins available.

## Cons

* VSCode does not natively support advanced CSS syntax such as nesting and variables, nor there are any good plugins that support it.
* If we use **PostCSS syntax** plugin or rename our `.css` files to `.postcss`, we would end up losing features from some CSS plugins that support CSS shortcut and validation such as **CSS IntelliSense**. Some discussions: https://github.com/Microsoft/vscode/issues/17419
