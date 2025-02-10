# Html-Simple-Editor

![JS Badge](https://img.shields.io/badge/JS-code-orange?logo=javascript&logoColor=white)

A simple visual editor that helps you edit your HTML without writing code.

### JS File:
👉 [The editor code](https://github.com/idont12/Html-simple-editor/blob/main/editable.js)

### Example:
👉 [Try it out here!](https://idont12.github.io/Html-simple-editor/Example)

## Features

- Add HTML sections from a list at the bottom of the page.
- Add/Remove classes by selecting from a list (Right-click → Add Class).
- Delete elements (Right-click → Delete).
- Copy HTML code.

## Quick Use

1. Open your HTML file.
2. Add the following code inside the `<head>` tag:  
   `<script defer src="https://cdn.jsdelivr.net/gh/idont12/Html-simple-editor@main/editable.js"></script>`
3. Run the project.
4. Edit the project as you like.
5. Copy the HTML using the "Copy HTML" button.
6. Paste the new HTML wherever you want.

## How to Use and Modify

1. [Download the JS file](https://github.com/idont12/Html-simple-editor/blob/main/editable.js).
2. Add the file to your project directory.
3. Modify the "Editable Customized" parameters in the JS file for your needs:
   - **styleContent**: Stores all the CSS for the editor. You can modify it as needed.
   - **htmlTemplates**: An object containing all the section templates users can add via "Add HTML Template".
   - **ManagerPopupFile**: Controls how image imports are handled:
     - `TriggeringClasses`: An array of classes that allow background style changes when clicked.
     - `TriggeringTag`: Defines which HTML tags (e.g., `<img>`) trigger a source change on click.
     - `SourcePath`: Defines the path for linked images.
   - **elementsToRemove**: Stores an array of elements that should be excluded when copying HTML.

4. Add a link to the JS file in your HTML.
5. Run the project.
