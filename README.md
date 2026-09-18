# 🏢 Job Pulse

An automated tech job tracker that aggregates opportunities, filters them based on your exact preferences (stack, seniority, and work regime), and sends daily structured reports straight to your **Discord** channel. 

Built using **Node.js** and fully automated for **free** using **GitHub Actions** (no external servers required).

---

## ✨ Features

- **Automated Scheduling:** Runs automatically every single day via GitHub Actions (Cron Jobs).
- **Smart Filtering:** Built-in engine that filters out unwanted seniority levels (e.g., skipping Senior roles if you want Junior roles) and matches your tech stack.
- **Discord Integration:** Delivers clean, actionable Rich Embed notifications with direct links to the job postings.
- **Serverless & Free:** Zero hosting costs. It wakes up, runs the script, dispatches the alerts, and shuts down safely.

---

## 📂 Repository Architecture

```text
job-pulse/
├── .github/
│   └── workflows/
│       └── scraper-cron.yml   # GitHub Actions scheduler configuration
├── src/
│   ├── scrapers/              # Data fetching & scraping modules
│   │   └── linkedin.js
│   ├── filters.js             # Rule engine for keywords and tech stack
│   ├── notifier.js            # Discord Webhook integration layout
│   └── index.js               # Application core orchestrator
├── config.json                # User preference definitions
├── package.json               # Node.js dependencies and startup scripts
└── README.md                  # Documentation
```

---

## 🛠️ Configuration (`config.json`)

You can customize exactly what kind of opportunities you want to receive by editing the `config.json` file:

```json
{
  "keywords": ["Frontend", "Fullstack", "Junior"],
  "technologies": ["React", "TypeScript", "Node.js"],
  "workMode": "Remote",
  "excludeKeywords": ["Senior", "Lead"]
}
```

---

## 🚀 Getting Started

### Local Setup & Testing

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd job-pulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Get a Discord Webhook URL:**
   - Go to your Discord Server Settings -> Integrations -> Webhooks.
   - Create a new webhook and copy its URL.

4. **Run the script locally:**
   ```bash
   DISCORD_WEBHOOK_URL="your_discord_webhook_url_here" npm start
   ```

---

## 🤖 Deploying to GitHub Actions (Automation)

To make this script run automatically every day at **08:00 AM UTC** without keeping your computer turned on:

1. Push this complete code to your public GitHub repository.
2. Inside your repository page, click on **Settings** -> **Secrets and variables** -> **Actions**.
3. Click on **New repository secret**.
4. Set the Name to: `DISCORD_WEBHOOK_URL`
5. Set the Value to: *Your actual Discord webhook URL*.
6. Click **Add secret**.

*That's it! GitHub Actions will now trigger your script daily and securely use your secret webhook.*

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

(sorry for the long README, take some robux lol)  <img width="600" height="600" alt="image" src="https://github.com/user-attachments/assets/cdf85f8b-18b6-47f2-b6d4-8a05ed82b94d" />
