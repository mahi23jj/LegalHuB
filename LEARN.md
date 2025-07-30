# 📘 Learn About LegalHuB

Welcome to **LegalHuB** — a web-based legal support platform designed to make legal information accessible, understandable, and actionable for everyone.

This guide will help you understand **how LegalHuB works**, its **technical components**, and how you can contribute or expand it.

---

## 🎯 Project Overview

**LegalHuB** empowers users to:

- Understand complex legal terms using AI.
- Download state-specific legal forms.
- Learn about their rights (e.g., employment, fundamental).
- Read legal guides and articles.
- Search across laws, rights, and documents in one place.

---

## 🛠️ Tech Stack Overview

| Layer              | Technology                 |
| ------------------ | -------------------------- |
| **Backend**        | Node.js, Express.js        |
| **Database**       | MongoDB (Free Tier)        |
| **Templating**     | EJS (Embedded JS)          |
| **AI Chatbot**     | Chatbase + OpenAI API      |
| **Authentication** | Passport.js                |
| **Search**         | Smart Search Functionality |

---

## 🧠 How the Platform Works

### 1. **Legal Dictionary (AI-powered)**

- User enters a legal term.
- Server sends the term to **OpenAI API** via backend.
- Response is parsed and displayed using EJS.

### 2. **Legal Forms**

- Forms are stored in MongoDB (with state/category).
- Users can browse or filter by category.
- Backend supports **downloading forms** or redirecting to official apply links.

### 3. **Legal Rights**

- Fundamental and employment rights are stored in MongoDB.
- Accessible via the `/rights` page.
- Each right contains a title, description, category, and source link.

### 4. **Legal Articles & Guides**

- Articles are structured as Markdown or HTML content rendered through EJS.
- Aimed at educating users in simple language.

### 5. **Smart Search**

- User types a query in the search bar.
- Backend searches across:
    - Dictionary terms
    - Rights titles/descriptions
    - Forms metadata
- Results are merged and shown by relevance.

---

## 🏗️ Monorepo Folder Structure

```plaintext
LegalHuB/
├── __tests__/              # Unit and integration tests
│   └── server.test.js
│
├── .github/                # GitHub Actions workflows
│   └── workflows/
│       └── integration.yml
│
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

## ⚙️ Core Components

### 🔌 `controllers/`

Handles business logic for each module:

- **`dictionary.controller.js`** – AI-based legal term explanation using OpenAI
- **`document.controller.js`** – Upload, download, and view legal forms
- **`rights.controller.js`** – CRUD operations for legal rights
- **`article.controller.js`** – Legal content (guides, blogs, etc.)
- **`search.controller.js`** – Smart unified search across modules
- **`user.controller.js`** – Auth, profile management using Passport.js
- **`healthCheck.js`** – Monitoring and uptime checking endpoint

---

### 🧠 `models/`

MongoDB schemas managed via Mongoose:

- `document.model.js`
- `rights.model.js`
- `article.model.js`
- `user.model.js`

---

### 🌐 `routes/`

Each controller is paired with a route file for clean API structure.

**Example API Routes:**

| Method | Endpoint            | Function           |
| ------ | ------------------- | ------------------ |
| GET    | `/api/rights`       | `getAllRights()`   |
| POST   | `/api/documents`    | `uploadDocument()` |
| GET    | `/api/search?q=...` | `smartSearch()`    |

---

### 🧾 `views/`

Built with EJS for dynamic templating.

- **Layouts:**
    - `layouts/boilerplate.ejs` – Base HTML structure
- **Includes:**
    - `includes/navbar.ejs`, `footer.ejs`, `flash.ejs`
- **Pages:**
    - `pages/documents.ejs`, `articles.ejs`, `rights.ejs`, `dictionary.ejs`
- **User Auth:**
    - `users/login.ejs`, `profile.ejs`, `updateUser.ejs`

---

### 🧪 `__tests__/`

Testing suite (e.g., using Jest or Supertest):

- `server.test.js` – API-level tests

---

### ⚙️ `middlewares/`

- `auth.middleware.js` – Authentication via Passport.js
- `multer.middleware.js` – Handles file uploads (PDFs/images)

---

### ☁️ `utils/cloudinary.js`

Handles all uploads to **Cloudinary**, including PDFs and images.

---

### 🌱 `init/`

Seeding scripts for initial data:

- **Documents** – State-specific legal forms
- **Rights** – Default rights (fundamental, employment, etc.)

---

### 🧪 `.github/workflows/integration.yml`

GitHub Actions CI/CD:

- Runs test suites
- Enforces code quality on PRs
- Optional: Automates deployments

---

## 🚀 Smart Search Engine

The backend `/api/search?q=` route:

- Supports **regex** or **full-text** search on:
    - `dictionary`
    - `rights`
    - `documents`
- Aggregates and returns ranked results:

```json
{
  "dictionary_results": [...],
  "rights_results": [...],
  "form_results": [...]
}
```

## 🧑‍💻 Environment Setup

1. Copy the example environment file:

```bash
cp .env.sample .env
```

2. Update the .env file with your configuration:

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

## 🙋 Contribute

We welcome contributions!

- Read the [CONTRIBUTING.md](CONTRIBUTING.md)
- Open issues, suggest features, or submit pull requests
- Follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## 📫 Questions or Suggestions?

- 📧 Email: [dipexplorerid23@gmail.com](mailto:dipexplorerid23@gmail.com)
- 🐛 Open an Issue: [GitHub Issues](https://github.com/YOUR-USERNAME/LegalHuB/issues) <!-- Replace with your actual repo URL -->

## 🫶 Thank You

Thanks for exploring **LegalHuB**!  
Let’s build a legally aware and accessible web — together.
