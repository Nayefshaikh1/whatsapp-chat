#  Whatsapp-chat

Whatsapp-chat is a simple chat application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. It allows users to create, read, update, and delete (CRUD) chat messages. The app also implements middleware for error handling and utilizes **method-override** for supporting HTTP methods like PUT and DELETE in forms.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Chat Management**: Perform CRUD operations on chat messages.
- **Dynamic UI**: Render dynamic views using **EJS**.
- **Error Handling**: Centralized error handling with custom middleware.
- **Method Override**: Supports PUT and DELETE HTTP methods in forms.
- **Responsive Design**: Styled with custom CSS for better UI.

---

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for routing and middleware.
- **MongoDB**: Database for storing chat data.
- **EJS**: Templating engine for rendering dynamic HTML.
- **CSS**: For styling.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/whatsapp-chat.git
   cd whatsapp-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server locally or connect to a MongoDB Atlas database.

4. Update the database connection string in the code:
   ```javascript
   await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
   ```

5. Start the development server:
   ```bash
   nodemon index.js
   ```

6. Access the application in your browser at:
   ```
   http://localhost:8080/
   ```

---

## Usage
- Navigate to `/chats` to view all chats.
- Use the "New Chat" button to create a new chat.
- Edit or delete existing chats using the respective buttons.

---

## Folder Structure
```plaintext
mine-whatsapp/
├── models/
│   ├── chat.js
├── public/
│   ├── css/
│   │   ├── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
├── app.js
├── package.json
├── ExpressError.js
```

---

## Routes

### Chat Routes
- **`GET /chats`**: View all chats.
- **`GET /chats/new`**: Render form to create a new chat.
- **`POST /chats`**: Create a new chat.
- **`GET /chats/:id/edit`**: Render form to edit an existing chat.
- **`PUT /chats/:id`**: Update an existing chat.
- **`DELETE /chats/:id`**: Delete a chat.

### Error Handling
- Centralized error handling via `ExpressError` middleware.

---

## Contributing
Contributions are welcome! Follow these steps to contribute:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


