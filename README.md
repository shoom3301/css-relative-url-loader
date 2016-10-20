# css-relative-url-loader

Loader for webpack.

Replaces the relative paths in the css files in the path relative to the root directory of the application. 
The root parameter is required.

# Usage
```
const root = '/projects/angular2/';

// wepback.config.js
...
{
    test: /.less$/,
    exclude: /node_modules/,
    loader: ['raw-loader', 'less-loader', 'css-relative-url-loader?root=' + root]
}
```

# Example

```
components
 |
 | my-component
 |  |
 |  | assets
 |  | |
 |  | | my-image.jpg
 |  | |
 |  | css
 |  | |
 |  | | style.css
```
 
`background: url('./../assets/my-image.jpg');`
will be replace with -> `background: url('components/my-component/assets/my-image.jpg');`