# 📚 LegalHuB

**LegalHuB** is a web-based platform designed to simplify access to legal resources. Users can explore legal terms, download state-specific legal documents, understand their rights, read comprehensive legal guides, and apply for legal services through official links — all in one place.

---

## 🚀 Features

- ✅ **Legal Dictionary** – AI-powered explanations of complex legal terms.
- ✅ **Download Legal Forms** – Access and download state-specific legal documents.
- ✅ **Apply for Legal Services** – Redirects to official legal application portals.
- ✅ **Legal Rights Database** – Browse essential civil, fundamental, and employment rights.
- ✅ **Legal Articles & Guides** – Learn from structured and easy-to-read legal content.
- ✅ **Smart Search** – Search across legal terms, rights, and documents efficiently.

---

## 📸 Screenshots

### 🏠 Homepage

![Homepage](<img width="1280" height="642" alt="image" src="https://github.com/user-attachments/assets/1bf94170-22a3-460f-8fc9-4eaa8a5153f0" />)
![Frequently asked Question](<img width="1280" height="632" alt="image" src="https://github.com/user-attachments/assets/70b5d515-6367-493d-81bb-d65bcb1ffaea" />
)

---

### 📘 Legal Dictionary

![Legal Dictionary](<img width="1280" height="641" alt="image" src="https://github.com/user-attachments/assets/c65ef2ad-f0cf-4649-b401-ef2f4d032fcb" />
)

---

### 📘 Fundamental Right 

![Fundamental Right ](<img width="1280" height="641" alt="image" src="https://github.com/user-attachments/assets/58b619a6-fad8-4520-8069-706939c23c4b" />
)

---

### 📘About page

![About page](<img width="1280" height="647" alt="image" src="https://github.com/user-attachments/assets/5e599beb-47e6-42ad-976f-62428167a620" />

)

---

### 📘 Explore Legal Article

![Legal Dictionary](<img width="1280" height="629" alt="image" src="https://github.com/user-attachments/assets/6eae7681-8bed-46bb-be13-0455d7eda139" />

)
<img width="1280" height="642" alt="image" src="https://github.com/user-attachments/assets/43eec961-ab50-4e42-9b57-23e802567712" />

---

### 📘 Registartion page 

![Legal Dictionary](<img width="1280" height="643" alt="image" src="https://github.com/user-attachments/assets/02556661-b321-477c-9cb0-78e4489ef4ec" />)
<img width="1280" height="642" alt="image" src="https://github.com/user-attachments/assets/5a73c26e-e226-4708-94ba-e27395af279e" />
<img width="1280" height="642" alt="image" src="https://github.com/user-attachments/assets/1843bc6b-05b4-45af-baa3-c0c184db03b1" />



---

### 📘 Profile

![Legal Dictionary](<img width="1280" height="642" alt="image" src="https://github.com/user-attachments/assets/3356057c-9e37-4e00-8404-51269bac7bd4" /> 
<img width="1280" height="639" alt="image" src="https://github.com/user-attachments/assets/2ca226df-2f3b-4b6f-bb41-e8c5b64348f2" /> 
<img width="1280" height="772" alt="image" src="https://github.com/user-attachments/assets/41e17063-8b7e-468e-bff0-fefad56c5c96" />
<img width="1280" height="636" alt="image" src="https://github.com/user-attachments/assets/10f6f5bb-7ec6-4a3b-9b83-0d17d728f392" />

)

---

### 📘 Legal Dictionary

![Legal Dictionary](<img width="1280" height="569" alt="image" src="https://github.com/user-attachments/assets/d39f258f-60be-4a86-a522-b3443d3749e9" />

)


## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Free Tier or Atlas)
- **AI Integration:** Chatbase (for AI chatbot responses)
- **Templating Engine:** EJS
- **Authentication:** Passport.js

---

## ⚙️ Installation

### 📌 Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- `.env` file with necessary API keys

### 📥 Setup Instructions

#### 1. Clone the repository

```bash
   git clone https://github.com/yourusername/LegalHuB

   cd LegalHuB
```

#### 2. Install dependencies

```bash
   npm install
```

#### 3. Set up environment variables

- Create a .env file in the root directory and add the following:

---

## 🧑‍💻 Environment Setup

1. Copy the example environment file:

---

```bash
   cp .env.sample .env
```

---

2. Update the .env file with your configuration:

---

```bash
   # Server Configuration
   PORT=8000
   SESSION_SECRET=mysecrectkey

   # CORS Configuration
   CORS_ORIGIN=*
   # CORS_ORIGIN=http://localhost:4000

   #DB_URL=
   DB_URL=mongodb+srv://<username>:<password>@cluster0.weuhr.mongodb.net
   # Uncomment if needed for frontend security

   DB_URL=

   NODE_ENV=development

   MISTRAL_API_KEY=

   ADMIN_SECRECT_KEY=mysupersecretkey
```

---

## 🔐 Mistral AI API Integration

### ⚙️ Setting Up Mistral API Key

To enable Mistral AI-powered features in LegalHuB, follow the steps below:

1. Go to the [Mistral AI Platform](https://console.mistral.ai/) and create an account (if you haven't already).
2. Navigate to **API Keys** and generate a new key.
3. Add the following entry to your `.env` file:

    ```env
    MISTRAL_API_KEY=your_mistral_api_key_here
    ```

---

3. Start the server

```bash
   npm start or npm run dev
```

The server will run on `http://localhost:8000`

---

## 🤝 How to Contribute

We welcome contributions to help improve **LegalHuB**! 🚀 Whether you're fixing bugs, improving documentation, or building new features — your support makes a difference.

---

### 🍴 Fork the Repository

1. Navigate to the [LegalHuB GitHub repository](https://github.com/dipexplorer/LegalHuB).
2. Click the **Fork** button in the top-right corner to create a personal copy of the repository.

---

### 🔄 Clone Your Forked Repository

1. Clone the repository to your local machine:

```bash
   git clone https://github.com/your-username/LegalHuB.git
```

2. Navigate to the project directory:

```bash
   cd LegalHuB
```

3. 🌿 Create a New Branch
    - Create a new branch for your changes:

```bash
   git checkout -b feature/your-feature-name
```

4. Make Your Changes✏️
    - Add your desired features, fix bugs, or improve documentation. 🛠️

5. 📦 Stage the Changes
    - Add modified files to the staging area:

```bash
   git add .
```

6. 📝 Commit Your Changes
    - Commit your changes with a clear, descriptive message:

```bash
   git commit -m "Add [feature/fix]: short description of what you changed"
```

7. ⬆️ Push to Your Fork
    - Push the changes to your forked GitHub repository:

```bash
   git push origin feature/your-feature-name
```

8. 📬 Create a Pull Request
    - Visit your forked repository on GitHub.

    - Click on "Compare & pull request".

    - Add a title and description of your changes.

    - Submit the pull request for review.

---

## 💡 Tips for a Great Contribution

- Follow consistent code style.

- Write descriptive commit messages.

- Make sure the project builds without errors.

- Reference any related issue numbers (e.g., Fixes #123).

---

## 📂 Project Structure

```plaintext
LegalHuB/
├── init/                   # Seed scripts for rights & documents
│   ├── documents.data.js
│   ├── index.documents.js
│   ├── index.rights.js
│   └── rights.data.js
│
├── src/                    # Main application source
│   ├── controllers/        # Business logic for each route
│   ├── db/                 # MongoDB database connection
│   ├── middlewares/        # Auth, error, upload middleware
│   ├── models/             # Mongoose schemas
│   ├── public/             # Static files (CSS, JS, images)
│   ├── routes/             # Express.js route definitions
│   ├── uploads/            # Uploaded files (PDFs etc.)
│   ├── utils/              # Helpers: error handling, responses, Cloudinary
│   ├── views/              # EJS templates (includes, layouts, pages)
│   ├── app.js              # Express app config
│   ├── constants.js        # Global constants
│   ├── index.js            # Server entry point
│   └── readme.md           # Dev-specific readme
│
├── .env.sample             # Example environment config
├── .gitignore              # Git ignored files
├── .prettierrc             # Prettier config
├── .prettierignore
├── CODE_OF_CONDUCT.md
├── LICENSE
├── package.json
├── package-lock.json
└── README.md               # Project overview and setup
```

---

## 🌐 API Endpoints

### 📘 Legal Dictionary

- **GET** `/api/dictionary/:term`  
  Returns an AI-generated explanation for a legal term.

---

### 📄 Legal Forms & Documents

- **GET** `/api/forms`  
  Retrieve all available legal forms.

- **GET** `/api/forms/:id`  
  Get a specific form by its ID.

- **GET** `/api/forms/download/:id`  
  Download a specific legal form.

---

### 🧾 Legal Rights

- **GET** `/api/rights`  
  Fetch all legal rights from the database.

- **GET** `/api/rights/:id`  
  Retrieve a specific legal right by ID.

---

### 🔍 Smart Search

- **GET** `/api/search?q=your_query`  
  Searches across legal dictionary, rights, and forms.

#### 🔁 Example Response

```json
{
    "dictionary_results": ["Tenant Rights - Explanation"],
    "rights_results": ["Right to Safe Housing"],
    "form_results": ["Rental Agreement Form"]
}
```

---

## 🔍 Smart Search Logic

The Smart Search feature performs a unified query across:

- Legal terms in the dictionary database
- User rights stored in MongoDB
- Legal forms and their descriptions

The results are ranked and returned in a categorized format to ensure relevance and clarity.

---

## 🎨 UI Pages

- **Home** (`/`) – Introductory landing page with navigation
- **Legal Dictionary** (`/dictionary`) – Look up legal terms
- **Legal Forms** (`/forms`) – Download or view forms by category
- **Legal Rights** (`/rights`) – Explore civil and employment rights

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For significant changes, please open an issue first to discuss your proposed modifications.

---

## 📬 Contact

For support, collaboration, or legal partnerships, please contact:  
📧 **legalhub.help@gmail.com**

---

**LegalHuB** – Empowering users with accessible legal information.
