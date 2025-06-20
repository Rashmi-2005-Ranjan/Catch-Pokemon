# 🎮 Catch-Pokemon

A simple and fun **React.js** application that lets users fetch and display Pokémon data from the [PokeAPI](https://pokeapi.co/). This project demonstrates key React concepts, modern JavaScript features, and robust error and state handling—all wrapped up in a neat user interface styled using basic CSS (no frameworks like Tailwind or Bootstrap).

---

## 🚀 Features

- 🔍 **Search Functionality** – Filter Pokémon by name in real-time.
- 🌐 **API Integration** – Fetch data from [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon?limit=...).
- 🔄 **Async/Await & Promise.all** – Handles multiple asynchronous API calls gracefully.
- ⚙️ **React Hooks** – Utilizes `useState`, `useEffect` for dynamic state & lifecycle management.
- ❗ **Error Handling** – Implements `try/catch` for safe async operations.
- 💡 **Loading & Error UI States** – User is informed if data is loading or if an error occurred.
- 🧠 **JavaScript Concepts** – Includes usage of `map`, `filter`, and conditional rendering.
- 🎨 **CSS Styling** – Clean and responsive UI built with vanilla CSS.

---

## 🧰 Tech Stack

- **Frontend**: React.js
- **API**: [PokeAPI](https://pokeapi.co/)
- **Styling**: Plain CSS (No Tailwind or Bootstrap)

---

## 🛠️ Installation & Running

```bash
# 1. Clone the repo
git clone https://github.com/Rashmi-2005-Ranjan/catch-pokemon.git
cd catch-pokemon

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will run on `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── Components              # Main logic for fetching & displaying data
├── index.css               # Custom styles
├── App.jsx                 # Root component
└── index.js                # Entry point
```

---

## 🧠 Concepts Covered

| Concept | Description |
|--------|-------------|
| `fetch()` | Used to call external API |
| `async/await` | Manage async code elegantly |
| `Promise.all()` | Run multiple async calls concurrently |
| `useState` | Store Pokémon data, loading & error states |
| `useEffect` | Fetch data on component mount |
| `try/catch` | Graceful error handling for network/API issues |
| `map()` | Display each Pokémon in a list |
| `filter()` | Search Pokémon dynamically |
| Conditional Rendering | Show loading/error/data based on app state |

---

## 🙌 Contributing

Feel free to fork, enhance, or open issues. Contributions are welcome!

> Built with ❤️ using React and the PokeAPI
