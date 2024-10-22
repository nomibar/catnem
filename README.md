# catNem Extension

_published by nomibar_

**catNem** is a Visual Studio Code extension that provides a couple of useful features like counting diagnostics (errors and warnings) in the active editor and showing cat images in a webview panel.

## Features

### 1. Count Diagnostics
The extension allows you to count the number of errors and warnings in the currently active editor.

- **Command**: `catnem.countDiagnostics`
- **How it works**: This command scans the currently active text editor for diagnostic messages (such as errors and warnings) and shows the count in a pop-up message.
- **Example**: Run the command, and you'll see a message like `Erreurs: 2, Avertissements: 3` if there are two errors and three warnings in the active file.

### 2. Show Alternating Cat Images
The extension provides a command to display alternating cat images every 2 seconds in a new panel.

- **Command**: `catnem.showcat`
- **How it works**: This command opens a new webview panel that displays two alternating cat images every 2 seconds. The images are located in the `src` folder of the extension.
- **Example**: Run the command, and a panel will appear, showing the two cat images one after the other, alternating every 2 seconds.


### 3. Show Hello World
Say hello to the world with this simple command.

- **Command**: `catnem.helloWorld`
- **How it works**: This command shows a popup message that says "Hello, from Catnem!" when executed.
- **Example**: Open the Command Palette, run the `Catnem: Hello World` command, and a notification will appear with the greeting "Hello, from Catnem!".

### 4. Nem Errors

- **Command**: `catnem.nem`
- **How it works**: This command displays the number of errors and warnings in the active file, along with a severity index based on those counts. It then shows alternating images of cats, with the display switching between images every 2 seconds.
- **Example**: Run the `Catnem: Nem Errors` command, and a popup will appear showing the number of errors, warnings, and a severity index. A panel will open that alternates between different cat images every 2 seconds, depending on the severity of the diagnostics.




## Usage

1. Open Visual Studio Code.
2. Open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
3. Type `catNem` to see the list of available commands:
   - `catnem.countDiagnostics` - Count and display the number of errors and warnings in the current file.
   - `catnem.shoxcat` - Show alternating cat images every 2 seconds.

![Usage image](/assets/CATNEM%20EXTENTION.png)

## Demo Video

![Demo exemple](/assets/exemple.gif)

## Requirements

This extension requires Visual Studio Code version `1.94.0` or later.



## Installation

To install the extension:

1. Clone or download the repository.
2. Run `npm install` to install dependencies.
3. Open the folder in Visual Studio Code.
4. Press `F5` to run the extension in the Extension Development Host.

## Known Issues

- No known issues at the moment. Please report any issues you encounter.

## Release Notes

### 0.0.1

- Initial release of the catNem extension.
  - Added command `catnem.countDiagnostics` to count errors and warnings.
  - Added command `catnem.helloworld` to say hello.
  - Added command `catnem.showcat` to show alternating cat images.
  - Added the command `catnem.nem` to show alternating cat images depending on the number of your errors

---

**Enjoy using catNem!**

[to the original repository](https://github.com/nomibar/catnem)