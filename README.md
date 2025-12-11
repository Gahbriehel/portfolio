# Portfolio Project

This is a personal portfolio website built with React, TypeScript, and Vite.

## Features

- Responsive Design
- Interactive Animations (Framer Motion)
- Contact Form enabled with [EmailJS](https://www.emailjs.com/)

## Getting Started

### Prerequisites

- Node.js installed

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration (EmailJS)

This project uses EmailJS for the contact form functionality. To make it work:

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your EmailJS credentials:

   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

   > **Note**: You can find these values in your [EmailJS Dashboard](https://dashboard.emailjs.com/admin).

### Development

Start the development server:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```
