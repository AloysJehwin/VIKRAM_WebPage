# 🔌 Sensor Data Dashboard

This is a full-stack project that reads data from a sensor (mock or real), serves it via a Flask backend, and displays it in real-time on a Next.js dashboard. It also uploads the sensor data to MongoDB for storage.

---

## 🧰 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Flask](https://flask.palletsprojects.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Communication**: REST API

---

## 📁 Project Structure

```
sensor-dashboard/
├── backend/
│   ├── app.py                 # Flask backend with sensor + MongoDB logic
│   ├── requirements.txt       # Flask & MongoDB dependencies
│
├── frontend/
│   ├── pages/
│   │   └── index.tsx          # Next.js dashboard
│   ├── utils/
│   │   └── api.ts             # Helper for fetching/uploading data
│   ├── .env.local             # Environment variables
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### 🔐 `.env.local` (Frontend)

```env
NEXT_PUBLIC_HTTP_URL=http://192.168.2.90:5000
```

> Use your actual local IP or Flask hosting IP.

---

## 🚀 Getting Started

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/AloysJehwin/VIKRAM_WebPage.git
cd VIKRAM_WebPage
```

---

### 🐍 2. Backend Setup (Flask)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

> Flask runs at `http://192.168.2.90:5000/sensor-data`

---

### ⚛️ 3. Frontend Setup (Next.js)

```bash
cd ../frontend
npm install
npm run dev
```

> Visit the dashboard at `http://localhost:3000`

---

## 🧫 Example Sensor JSON

```json
{
  "temperature": 27.4,
  "humidity": 65,
  "light": true,
  "timestamp": "2025-04-14T14:00:00Z"
}
```

---

## 📡 MongoDB Connection (Backend)

Your `app.py` connects to MongoDB using:

```python
MONGO_URI = "mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>"
```

Store this in an `.env` file or replace directly in code (not recommended for production).

---

## 📄 License

MIT License © Aloys Jehwin
