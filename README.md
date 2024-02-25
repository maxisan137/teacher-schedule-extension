# TNTU Teacher Schedule Browser Extension

This project is a browser extension meant to be used in the TNTU e-learning portal. It adds a link to each of professors schedule when viewing a course (normally appearing to the right of the web page).

This saves a lot of time when trying to find a specific professor.

Has been tested to work on the following desktop browsers:

 - Google Chrome
 - Opera
 - Firefox

## Installation

Get the latest version from releases. Unzip the folder anywhere you want on your system.

In your browser, open the extensions panel and add the extension.

### For Chrome or Opera:
 - Navigate to `chrome://extensions` ( or `opera://extensions` if using Opera)
 - Enable Developer Mode in the top right corner
 - Click the **Load unpacked** button in top left corner
 - Select the extension folder that you unzipped
 - Check that the extension has been added and enabled

### For Firefox:
 - Navigate to `about:debugging`
 - Navigate to **This Firefox**
 - Click the **Load Temporary Add-on** button
 - Select the `manifest.json` file within the release folder
 - Now Navigate to `about:addons` - the extension should now appear in the list
 - Click on it and enable permission to access data on TNTU website


## Building from source

To build from source, you need to have Node installed on your system. Clone this repo, navigate to the root directory and build the project with the following commands:

```shell
npm install
npm run build
```

After this, you can install the extension in your browser, as described in the [Installation](#installation) section.
