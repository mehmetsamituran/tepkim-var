# Tepkim Var - Boycott Brands App

## 📖 Overview
**Tepkim Var** is a web application that empowers users to express their opinions by voting for brands they wish to boycott. The app allows users to submit votes with a unique email address, select categories for their votes, and provides an admin interface for managing brands and categories.

---

## ✨ Features
- 🚫 **Vote for Boycotts**: Users can vote for brands they want to boycott.
- 📧 **Unique Email Validation**: Each vote requires a unique email address.
- 🗂️ **Category Selection**: Users can categorize their votes.
- 🔧 **Admin Interface**: Admins can manage categories, brands, and view voting statistics.

---

## 📂 Project Structure
```
boycott-brands-app
├── public
│   ├── index.html          # Main HTML document
│   └── styles
│       └── main.css        # CSS styles for the application
├── src
│   ├── components
│   │   ├── BrandList.tsx   # Component to display brands
│   │   ├── VoteForm.tsx    # Component for submitting votes
│   │   └── CategoryManager.tsx # Component for managing categories
│   ├── pages
│   │   ├── HomePage.tsx    # Main page of the application
│   │   └── AdminPage.tsx   # Admin interface for managing the app
│   ├── services
│   │   └── api.ts          # API service for backend communication
│   ├── types
│   │   └── index.ts        # TypeScript types and interfaces
│   └── App.tsx             # Main application component
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

---

## 🚀 Installation
Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd boycott-brands-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🖥️ Usage
To start the application locally, run:
```bash
npm start
```
This will launch the app in your default web browser at `http://localhost:3000`.

---

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact
For any questions or feedback, feel free to reach out:
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [GitHub Profile](https://github.com/mehmetsamituran)
