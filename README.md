# MDX Combiner Pro

MDX Combiner Pro is a web-based tool designed to simplify the process of combining multiple MDX (or MD) files into a single file. It provides a user-friendly interface for selecting, combining, and downloading merged Markdown and MDX content.

## Features

- **File Selection**: Easily select multiple MDX or MD files from your local system.
- **File Combination**: Merge selected files into a single document with customizable separators.
- **Format Selection**: Choose between .mdx and .md output formats.
- **Custom Separators**: Define your own separator to be inserted between combined files.
- **Filename Customization**: Set a custom prefix for the output filename.
- **Intelligent Filename Generation**: Automatically generates a filename based on input files and current timestamp.
- **Preview**: View the combined content before downloading.
- **Download**: Easily download the combined file with a single click.

## How to Use

1. Open the `mdx_combiner.html` file in a web browser.
2. Click "Select MDX Files" to choose the files you want to combine.
3. (Optional) Adjust the output format, file separator, and filename prefix as needed.
4. Click "Combine Files" to merge the selected files.
5. Review the combined content in the preview area.
6. Click "Download Combined File" to save the merged content as a single file.

## Technical Details

- **Language**: HTML, JavaScript
- **Styling**: Tailwind CSS
- **File Handling**: Uses the FileReader API for client-side file processing
- **Download**: Utilizes Blob and URL.createObjectURL for file downloads

## Development

To modify or enhance the tool:

1. Clone this repository: `git clone https://github.com/spragginsdesigns/mdx-combinefiles-project.git`
2. Open `mdx_combiner.html` in your preferred code editor.
3. Make desired changes to the HTML, JavaScript, or styles.
4. Test your changes by opening `mdx_combiner.html` in a web browser.

## Contributing

Contributions to improve MDX Combiner Pro are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Created by Austin Spraggins - feel free to contact me for any questions or feedback!

- GitHub: [@spragginsdesigns](https://github.com/spragginsdesigns)

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) for the styling
- All contributors and users of this tool
