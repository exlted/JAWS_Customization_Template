# JAWS_Customization_Template
To produce a customization for JAWS, you'll create a folder similar to the "example" folder in this repository.

The way that the customization works, is that the file structure is defined by the index.json file. The webpage served by JAWS requests the specified index.json file, then parses through it, and adds the files mentioned into the DOM of the page so they get pulled in as well.

The JSON is essentially an array of broken out HTML tags, by folowing the example you should be able to include the files you want to include.