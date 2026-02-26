# Insurance Company App - Proof of Concept (POC)

## 1. Micro-Frontend Architecture Overview

This project serves as a Proof of Concept (POC) for an insurance application built using a React-based Micro-Frontend architecture. The solution comprises three distinct applications:

### 1.1 Container App

The shell application that acts as the host. It manages the authentication process (sign-in/sign-up) and orchestrates the loading and composition of the micro-frontends.

### 1.2 Users App

A micro-frontend responsible for rendering user profile information and determining eligibility for various insurance offers.

### 1.3 Insurance App

A micro-frontend designed to display existing insurance policy details and facilitate premium payments.

---

## 2. Features & Functionality

### 2.1 Container App

- **Data Seeding:** Initializes local storage with user and insurance data upon startup.
- **Authentication:** Provides a login interface accepting an email address.
- **Sign-in Logic:**
  - Validates email format.
  - Sanitizes input to prevent Cross-Site Scripting (XSS) attacks (adhering to OWASP Top 10).
  - Verifies user existence:
    - _Success:_ Redirects to the dashboard and loads the Users micro-frontend.
    - _Failure:_ Retains the user on the login screen with an error message.
- **Navigation:** Displays a sidebar menu and the logged-in user's name.
- **View Profile Details:** Loads the Users micro-frontend to show profile data.
- **View Insurance Details:** Loads the Insurance micro-frontend to show policy data.
- **Send Message:** Dispatches a custom event broadcast to all loaded micro-frontends to display a notification.
- **Logout:** Terminates the session and redirects to the login page.

### 2.2 Users App

- **Background Processing:** Utilizes a background worker to calculate insurance offer eligibility based on user demographics (age, gender, income).
- **Profile Display:** Renders user details.
- **Event Listening:** Consumes messages dispatched by the Container app.

### 2.3 Insurance App

- **API Simulation:** Uses a background worker to simulate API calls, displaying a "fun fact" periodically.
- **Policy Display:** Renders insurance policy details.
- **Premium Payment:**
  - _Pay the Premium:_ Reveals payment options.
  - _Cancel:_ Hides the payment interface.
- **Event Listening:** Consumes messages dispatched by the Container app.

---

## 3. Setup & Execution

**Prerequisites:** Ensure Node.js and npm are installed on your machine.

Follow these steps to run the application:

1. Clone or download the repository.
2. Open the project in an IDE (e.g., Visual Studio Code).
3. You will find three directories: `container`, `users`, and `insurance`.
4. Open a terminal and execute the following commands for each application:

### Step 1: Run the Users App

```bash
cd users
npm install
npm start
```

##### Users’ app will now be running at http://localhost:3001. Same can be verified in browser.

### Then run the Insurance App

```bash
cd insurance
npm install
npm start
```

##### Insurance app will now be running at http://localhost:3002. Same can be verified in browser.

### And then run the Container App

```bash
cd container
npm install
npm start
```

##### Container app will now be running at http://localhost:3000. Same can be verified in browser.

- All apps are now running. Use the container app running at http://localhost:8082 to validate the functionality.
- Inside the insurance folder under src folder you’ll see a file named seeder.js. Open it and copy any of the email Id from the static user.
- Ender the copied email id on the login screen and click login.

## Please note, having node js and npm installed on your machine is a must to run React app.
