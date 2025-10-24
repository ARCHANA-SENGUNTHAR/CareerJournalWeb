#  CAREER MATE- A MERN AND AI POWERED JOURNAL PERSONALIZED FOR UNIVERSITY STUDENTS

A **Smart Career Journaling Platform** with **AI-powered writing detection**, **goal tracking**, and **streak management**.
Built using **React (Frontend)**, **Node.js + MongoDB (Backend)**, and **FastAPI (AI Microservice)**.

---

## 🗂️ Folder Structure

```
CareerJournalWeb/
├── ai-service/           # Python FastAPI AI detection microservice
│   ├── main.py
│   ├── venv/
│   ├── requirements.txt
│   └── .gitignore
│
├── backend/              # Node.js + Express + MongoDB backend
│   ├── config/db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   ├── server.js
│
├── frontend/             # React frontend
│   ├── src/
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── package.json
└── README.md
```

---

# 🛠️ Setup & Installation

Follow these steps carefully to install all dependencies and set up the development environment.

---

## 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/CareerJournalWeb.git
cd CareerJournalWeb
```

---

## 2. AI Microservice Setup (FastAPI + Transformers)

### Navigate to AI service:

```bash
cd ai-service
```

### Create a Virtual Environment:

```bash
python -m venv venv
```

Activate it:

* **Windows**

  ```bash
  venv\Scripts\activate
  ```
* **macOS / Linux**

  ```bash
  source venv/bin/activate
  ```

### Install Dependencies:

If `requirements.txt` exists:

```bash
pip install -r requirements.txt
```

Otherwise, create one manually:

```
fastapi
uvicorn
transformers
torch
nltk
requests
```

---

## 3. Backend Setup (Node.js + MongoDB)

### Navigate to Backend:

```bash
cd ../backend
```

### Install Dependencies:

```bash
npm install
```

### Create Environment Variables:

Create a `.env` file in `/backend/` and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 4. Frontend Setup (React)

### Navigate to Frontend:

```bash
cd ../frontend
```

### Install Dependencies:

```bash
npm install
```

### Create Environment Variables:

Create `.env` in `/frontend/` and add:

```
REACT_APP_API_URL=http://localhost:5000
```

---

# 🚀 Running Procedure

Follow these steps **in separate terminals** to run all services.

---

## Step 1: Run AI Microservice

```bash
cd ai-service
uvicorn main:app --reload --port 8000
```

The AI API will be available at:
**[http://127.0.0.1:8000/detect](http://127.0.0.1:8000/detect)**

**Sample Test (POST):**

---

## Step 2: Run Backend Server

```bash
cd backend
npm run dev
```

The backend server runs at:
**[http://localhost:5000](http://localhost:5000)**

---

## Step 3: Run Frontend

```bash
cd frontend
npm start
```

The frontend app runs at:
**[http://localhost:3000](http://localhost:3000)**

---

## Step 4: Run Frontend + Backend Together

From the **root folder (CareerJournalWeb/)**:

```bash
npm run dev
```

*(Ensure your root `package.json` contains:)*

```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm start --prefix frontend\""
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  }
}
```

Then start the AI service separately as mentioned in Step 1.

---

# 🧑‍💻 Tech Stack Summary

### 🌐 Frontend

* React
* React Router
* Context API
* Tailwind CSS

### ⚙️ Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication

### 🧠 AI Microservice

* FastAPI
* Transformers (HuggingFace)
* PyTorch
* NLTK

---

# 👥 Authors & Maintainers

| Name           | Role              | Responsibilities          |
| -------------- | ----------------- | ------------------------- |
| **Archana**    | Lead Developer    | Frontend + Backend + AI Integration |
| **Hemalatha P N** | Frontend Developer | Web App UI           |
| **Anisabarvin A** | AI Specialist     | Model Researcher       |
| **Anika V** | DB Specialist     | DB management        |
---
