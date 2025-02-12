# 💖 Tinder Clone - Swipe & Match

A **React Native (Expo)** app built for the **Full Time Force** take-home challenge.  
This app is a Tinder clone, featuring **swipe gestures, user matching, and a GitHub commit history section inside the app**.  


## 🚀 Features  

✅ **Swipe Left/Right** – Just like Tinder!  
✅ **Real-time Matching** – Find your perfect match!  
✅ **GitHub Commit History Viewer** – See project commits inside the app.  
✅ **Navigation** – Built using React Navigation for smooth screen transitions.  
✅ **Beautiful UI** – Styled with Styled Components.  
✅ **Unit & UI Tests** – Fully tested with Jest & React Native Testing Library.  


## 🛠️ Tech Stack  

| **Technology**                        | **Purpose**                                                  |  
|---------------------------------------|-------------------------------------------------------------|  
| **React Native (Expo)**               | Core framework for mobile development                        |  
| **TypeScript**                        | Strongly typed JavaScript for better dev experience          |  
| **Styled Components**                 | Elegant, component-scoped styling                            |  
| **React Navigation**                  | Seamless screen navigation                                  |  
| **GitHub API**                        | Fetch and display commit history inside the app             |  
| **Jest + React Native Testing Library**| Unit & UI testing                                           |  
| **Husky**                             | Git hooks for linting and formatting before commits          |  
| **Commitlint**                        | Lint commit messages to follow a conventional format         |  
| **Lint-Staged**                       | Run linters on pre-committed files                           |  
| **Prettier**                          | Code formatter for consistent code style                    |  


## 🏗️ Installation & Setup  

### 1️⃣ Clone the Repository  
To get started, clone the repository to your local machine:  
```sh
git clone https://github.com/mauripavan/tinder-clone.git  
cd tinder-clone  
```

### 2️⃣ Install Dependencies  
Once you have cloned the repo, install all necessary dependencies by running:
```sh
npm install  
```

### 3️⃣ Start the Expo Server  
Now, start the Expo server to run the app on your device or emulator:
```sh
npm start
```

### 4️⃣ Run on Emulator (Optional)
If you'd prefer to run it on an emulator, you can use the following commands:

**For Android:**
```sh
npm run android
```
**For iOS:**
```sh
npm run ios
```
(Note: Requires Xcode installed on macOS for iOS emulator)


## 🔗 GitHub Commit History Viewer
This app includes a section that fetches and displays the latest GitHub commits using the GitHub API.

📍 Where to find it?
There is a "Commit History" section in the app, displaying recent commits.


## 🔍 Running Tests
To run the tests and ensure the app is working as expected, use the following command:

```sh
npm run test
```


## 🧑‍💻 Git Hooks & Code Formatting
This project is configured with Husky, Commitlint, Lint-Staged, and Prettier to ensure consistent code quality.

**Husky**
Husky is used to enforce pre-commit and pre-push hooks. You’ll find the following hooks in .husky/:

pre-commit: Runs lint-staged to lint and format files before they are committed.
commit-msg: Runs commitlint to ensure commit messages follow a consistent format.

**Commitlint**
Commitlint ensures commit messages adhere to the Conventional Commits standard, e.g.,
```sh
npm run commit
```
```sh
feat: add new swipe feature  
fix: correct card alignment issue  
```

**Lint-Staged**
Lint-Staged is used to run Prettier and ESLint on staged files before they are committed. This ensures only properly formatted and linted code is committed.


## 📜 License
This project was built as part of a take-home challenge for **Full Time Force.**


🔥 Made with ❤️ by Mauricio Pavan 🔥