# Freelancer Portfolio Showcase

A modern, responsive, __freelancer portfolio showcase__ built with Next.js and MUI. 
This project demonstrates the ability to design and implement a **production quality frontend MVP** with clean architecture, reusable components, and polished UX **using Supabase**. 

---

## Table of Contents
- [Overview](#-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
   * [Prerequisites](#prerequisites)
   * [Install Dependencies](#install-dependencies)
   * [Run the Development Server](#run-the-development-server)
- [Build for Production](#build-for-production)
---

## Overview
This project is a __full-stack portfolio website__ aimed at showcasing my freelance work and technical skills in modern web development.  

It includes:  
- A __landing page__ with clean, responsive design.  
- __Authentication forms__ with email verification for new accounts and password reset functionality.  
- A __multi-step form__ to demonstrate complex UI interactions.
- A __form submission page__ to demonstrate _CRUD_ API usage capabilities. 
- A __user settings page__ to demonstrate UX awareness and to empower users to have more control over their data.
- Fully __responsive typography and layouts__ across devices.  
- A focus on __DRY, modular, and reusable components__.

The goal is to demonstrate __frontend expertise__, __API integration__, __Auth handling__, __Form development__, __Supabase__, __MVP creation__, __design sensibility__, and __modern React/MUI best practices__.

---

## Live Demo

The live demo is [here](https://www.connorkeenum.dev/).

## Features
- __Landing Page:__ Fully responsive hero section, navigation, and footer.  
- __Auth Forms:__ Sign in, Sign up, Forgot password, and Reset password flows with proper accessibility.  
- __Multi-Step Form:__ Demonstrates user input flows and step navigation and form validation.  
- __Form Submission:__ Demonstrates CRUD and Full-Stack capabilities. 
- __User Settings:__ Manage account, and change defaults, used to show awareness of UX and to empower the user.
- __Responsive Theme:__ Demonstrates attention to detail and enhances UX.
- __Responsive Typography:__ Custom MUI theme with responsive headers for all devices.  
- __Modern UI Components:__ Built with MUI and reusable React components.  
- __Supabase Backend:__ Uses Supabase to demonstrate API integration and Full-Stack skills.  

---

## Tech Stack
- __Next.js__ – React framework for server-rendered and static apps.  
- __React__ – Component-based UI development.  
- __MUI (Material-UI)__ – Modern UI library for React.  
- __React Hook Form__ – Form management and validation.
- __Supabase__ - Managed Postgres database offering Auth and Storage as a service.  
- __Next/Image__ – Optimized images with responsive support.  
- __React Icons__ – Iconography for modern design.  

---

## Project Structure

```Python
/Core # Constants and helper functions

/Application # Business Logic, Custom Hooks, and State Management
    /hooks # Business Logic for Components

/Infra # Mocked Infra calls to mock API
    /workflows # sequence of API calls

/UI # My Front End Components
    /styles # MUI theme, Global Styles
    /atoms # stateless, simple, and re-usable components
    /molecules # stateless, complex, and re-usable components
    /organisms # stateful, complex or simple, and re-usable components
    /templates # blank page layout

/pages # My pages in the website
```
---

## Getting Started

### Prerequisites
- Node.js >= 22  
- pnpm >= 10

### Install Dependencies
```bash
pnpm install
```

### Run the Development Server
```bash
pnpm run dev
```

Open http://localhost:3000 to view the project locally.

## Build for Production
```bash
pnpm run build
pnpm start
```

Usage

Navigate the landing page to see the portfolio showcase.
Interact with authentication forms to see validation and accessibility features.

Fill out the multi-step form to experience complex form flows.
See filled out form at the form submission.
Tweak user settings on the settings page when logged in.
All components are responsive and visually consistent with the MUI theme.

Future Enhancements

- Add dynamic portfolio projects fetched from an API or CMS.
- Implement user authentication with OAuth.