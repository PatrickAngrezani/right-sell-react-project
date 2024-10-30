# Venda Certo - Comercial BPO

This project is a frontend application for **Venda Certo**, a company specializing in commercial BPO, offering solutions for prospecting, sales and customer support. The application was developed in React wih TypeScript and uses Material-UI for a modern and responsive interface.

## Table of Contents

- [Overview](#Overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Main Components](#main-components)
- [Styles and UX](#styles-and-ux)
- [Futures Improvements](#futures-improvements)

## Overview

**Venda Certo** was founded in 2019 to connect top professionals in the market (LDR, SDR, BDR, Closer, CRM, Marketing, Copywriter and Customer Success) wih companies, managing a complete sales funnel from start to finish. This system enables companies to outsource commercial processes to improve efficiency and increase sales.

## Features

- **Custom Header** with navigation and social media links.
- **Prospecting and Commercial BPO Section** highlighting the company's services and mission.
- **About Us** with detailed information about the company's history and values
- **Our Services**: A list of services offered by the company with detailed descriptions.
- **Clients**: Showcasing key clients of Venda Certo.

## Technologies Used

- **React** with **TypeScript** - For building frontend components.
- **Material-UI** - A component library for modern and responsive design.
- **Emotion** - For CSS-in-JS styling, integrated with Material-UI.

## Installation and Setup

### Prerequisites

- Node.js (>=14)
- npm

### Steps

1. Clone the repository:

```bash
git clone https://github.com/PatrickAngrezani/right-sell-spa
cd right-sell-spa
```

2. Install Dependencies:

```bash
npm install
```

3. Start the development server

```bash
npm start
```

4. Open your browser and go to http://localhost:3001

## Project Structure

```plaintext
src/
├── assets/              # Images and icons
├── components/          # Project components
│   ├── Header.tsx       # Header with logo, links, and social media icons
│   ├── Hero.tsx         # Intro section
│   ├── Services.tsx     # Services components
│   ├── Segments.tsx     # Market segment components
│   ├── Clients.tsx      # Clients section
│   └── Footer.tsx       # Footer with additional information
├── App.tsx              # Main component that organizes sections
└── index.tsx            # Application entry point
```

## Main Components

### Header

The `Header` component displays the brand, navigation links and social media icons (Instagram and LinkedIn) with hover effects.

### Hero

The `Hero` section is the main introduction, highlighting the "Prospecting and Commercial BPO" text with green bar and a brief description of the company's mission.

### Services

`Services` displays the company's offerings, such as client prospecting, sales support, etc., in styled cards using Material-UI.

### Clients

The `Clients` sections shows the logos of the company's main clients, building credibility and demonstrating Venda Certo's industry experience.

## Styles and UX

This project uses Material-UI and Emotion to create a consistent, modern user experience with:

- **Responsive design**: optimized for mobile compatibility.
- **Hover effects**: on buttons and icons for visual feedback.
- **Cohesive style**: using a green and black color scheme to reflect the brand's visual identify.

## Futures Improvements

- **User Authentication**: Implement login for registered users.
- **API Integration**: For dynamic data on services and clients.
- **Detailed Service Pages**: Specific information for each service offered.
