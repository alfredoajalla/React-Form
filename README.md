# React Form Application

This project is a simple React application that demonstrates form handling and validation using **React Hook Form** and **Zod**. It features reusable components and a validation schema to ensure data integrity.

## Features

- Modular and reusable form components.
- Validation using **Zod** schema.
- Error handling with real-time feedback.
- Controlled inputs managed by **React Hook Form**.

## Project Structure

```
src/
├── components/
│   ├── CustomForm/
│   │   └── CustomForm.tsx
│   ├── CustomInput/
│   │   └── CustomInput.tsx
├── models/
│   └── index.ts
├── App.tsx
├── App.css
```

### Components

- **CustomForm**: The main form component, integrating validation logic and input components.
- **CustomInput**: A reusable input component that supports error handling and React Hook Form's controlled fields.

### Models

- **schema**: The validation schema for the form, defined with **Zod**.
- **FormValues**: Type definitions inferred from the Zod schema for strong typing throughout the application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser at `http://localhost:3000`.

## Usage

This application features a basic form with the following fields:

- **Name**
- **Email**
- **Password**
- **Confirm Password**

### Validation Rules

- **Name**: Required.
- **Email**: Must be a valid email address.
- **Password**: Minimum of 6 characters.
- **Confirm Password**: Must match the password.

When the form is submitted, valid data is logged to the console.

## Technologies Used

- **React**: Frontend library.
- **React Hook Form**: For form state management.
- **Zod**: Schema-based validation.
- **TypeScript**: Strongly typed language for safer development.
