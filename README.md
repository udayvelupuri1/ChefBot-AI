
# 🍳 ChefBot AI (Claude Recipe Generator)

ChefBot AI is a fun and interactive React app that lets users input a list of ingredients and generates a delicious recipe using AI. It leverages the power of **Groq's LLM API (LLaMA3)** to generate recipes dynamically in **Markdown format**.

---

## 🚀 Features

- 🧠 Uses AI to generate creative recipes
- 📝 Accepts user-inputted ingredients
- 📃 Recipes are rendered with clean markdown formatting
- 🥗 Encourages users to try cooking with what they have on hand
- ⚡ Powered by **LLaMA3** model via Groq API

---

## 🧩 Tech Stack

- **React** (with functional components and hooks)
- **Groq API** (LLaMA3 model)
- **ReactMarkdown** for rendering formatted recipe output
- **Vite** for fast development and bundling

---

## 📂 Project Structure

```

/src
├── /components
│    ├── IngredientsList.jsx
│    └── ClaudeRecipe.jsx
├── App.jsx
├── Main.jsx
├── ai.js
└── index.jsx
/public
└── index.html

````

---

## 🔑 Environment Variables

Make sure to create a `.env` file in your root folder with the following:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
````

---

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/chefbot-ai.git
   cd chefbot-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set your API Key**
   Add your `VITE_GROQ_API_KEY` to a `.env` file in the root directory.

4. **Start the development server**

   ```bash
   npm run dev
   ```


---

## 📜 License

MIT License

---

## 🙌 Acknowledgements

* [Groq](https://groq.com/) for their blazing-fast API and LLaMA3 access
* [React Markdown](https://github.com/remarkjs/react-markdown) for markdown rendering
* Inspiration from ChatGPT and Claude AI recipe ideas

---

## 📬 Contact

Created with ❤️ by Uday
📧 [velupuriudaykumar@gmail.com](mailto:velupuriudaykumar@gmail.com)
🌐 [udaykumarv.vercel.app](https://udaykumarv.vercel.app/)

```

