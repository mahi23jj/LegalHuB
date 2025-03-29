# LegalHuB

A web-based platform designed to help users understand legal terms, download state-specific legal documents, access legal rights, read legal guides, and find official application links in a simple and accessible way.

---

## 🚀 Features

✅ Legal Dictionary – AI-powered explanations of legal terms.  
✅ Download Legal Forms – Get state-specific legal documents.  
✅ Apply for Legal Services – Redirect users to official application links.  
✅ Legal Rights Database – Browse fundamental and employment rights.  
✅ Legal Articles & Guides – Read structured legal guides.  
✅ Smart Search – Search across laws, forms, and rights efficiently.

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB (Free Tier)
- AI Chatbot: Chatbase
- Templating Engine: EJS
- Authentication: passport.js

---

## ⚙️ Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas)
- `.env` file with API keys

### Setup

1. Clone the repository

bash
git clone https://github.com/yourusername/legal-help-platform.git
cd legal-help-platform

2. Install dependencies

bash
npm install

3. Set up environment variables  
   Create a `.env` file and add the following:

env
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=5000

4. Start the server

bash
npm start

The server will run on `http://localhost:8000`

---

## 📂 Project Structure

legal-help-platform/
│── controllers/ # Handles business logic  
│── models/ # Mongoose schemas  
│── routes/ # API endpoints  
│── views/ # EJS templates  
│── public/ # Static files (CSS, JS)  
│── utils/ # Utility functions  
│── middleware/ # Custom middleware  
│── config/ # Database & API config  
│── app.js # Main Express app  
│── server.js # Server entry point  
│── README.md # Project documentation  
│── package.json # Dependencies & scripts

---

## 🌍 API Endpoints

### Legal Dictionary (AI-powered)

- Search legal term

http
GET /api/dictionary/:term

Response: AI-generated explanation of the legal term

### Legal Forms & Documents

- Get all forms

http
GET /api/forms

- Get a specific form by ID

http
GET /api/forms/:id

- Download a form

http
GET /api/forms/download/:id

### Legal Rights

- Get all rights

http
GET /api/rights

- Get a specific right by ID

http
GET /api/rights/:id

### Smart Search

- Search across rights, forms, and dictionary

http
GET /api/search?q=your_query

---

## 🔍 Smart Search Implementation

The smart search works by:

1. Searching legal terms in the dictionary database
2. Searching rights stored in MongoDB
3. Searching legal forms and their descriptions
4. Returning combined results in a ranked order

Example API response for `/api/search?q=tenant rights`:

json
{
"dictionary_results": ["Tenant Rights - Explanation"],
"rights_results": ["Right to Safe Housing"],
"form_results": ["Rental Agreement Form"]
}
`

---

## 🎨 UI Pages

- Homepage (`/`) – Landing page with navigation.
- Legal Dictionary (`/dictionary`) – Search legal terms.
- Legal Forms (`/forms`) – View and download legal documents.
- Legal Rights (`/rights`) – Browse legal rights and guides.

---
