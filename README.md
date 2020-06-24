![myContacts](https://github.com/savegdesigner/myContacts/blob/master/myContacts-logo.svg)

## A Web and Mobile application to keep your family and friends contacts organized. :iphone: :bookmark_tabs:

### About

The meaning of this project is simple. Put into practice what I've learned so far with the Stack Node.js, React.js and React Native.

### Design

The design was made on [**_Figma_**](https://www.figma.com/file/kuKSL5rHCEmXOiM3QtRHAt/myContacts-App?node-id=0%3A1)

### Project Preview

![myContacts Demo GIF](https://github.com/savegdesigner/myContacts/blob/master/myContacts.gif)

### Application Architecture

I also made a flowchart on [**_Whimsical_**](https://whimsical.com/TXT55ivNrv4JhhXUjWnjVs) to gather the Project ideas and to set a good overview as well.

### Current Application Status

- [x] Backend
- [x] Web Application
- [ ] Mobile Application (soon)

### Setup Project

1. Clone this repo: 

```
    git clone https://github.com/savegdesigner/myContacts.git
    cd myContacts

```

2. Install all packages: (in both folders: backend and web)

```
    yarn install

```

3. Setup MongoDB:

You can download the MongoDB Compass wich I use for my database.
https://www.mongodb.com/try/download/tools

Then start a new connection and create a Database named "myContacts"

4. Configuring server connection

In the backend folder, "src/server/db.ts" change the mongoose connection with your Local Mongo address wich can be found in the MongoDB Compass app.

```
    mongoose.connect('mongodb://localhost:27017/myContacts'})

```

### Running the App

Start both backend and web with:

```
    yarn run dev

```

The app should be running on port 8080 now...
Thank you! :relaxed:
