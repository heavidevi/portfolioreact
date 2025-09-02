# 🚀 Ali ADEEL - Portfolio

A modern, responsive portfolio website showcasing my journey as an aspiring MERN Stack Developer. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Live Demo

🔗 **Portfolio:** [https://portfolioreact-wheat.vercel.app/](https://portfolioreact-wheat.vercel.app/)

## 📋 Table of Contents

- [About](#about)
- [Projects](#projects)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact](#contact)

## 👨‍💻 About

Hi! I'm **Ali ADEEL**, an aspiring MERN Stack Developer passionate about creating modern, user-friendly web applications. This portfolio showcases my skills in frontend development, backend integration, and full-stack application development.

## 🎯 Projects

### 1. 📊 Assignment 1 - Business Website
**Tech Stack:** React, TypeScript, Tailwind CSS
- Modern business website with responsive design
- Multi-page navigation (Home, About, Services, Pricing, Contact)
- Interactive components and smooth animations
- Component-based architecture showcase

**Features:**
- 🎨 Modern UI/UX design
- 📱 Fully responsive layout
- ⚡ Fast loading and optimized performance
- 🧩 Reusable component architecture

### 2. 🚀 Assignment 2 - Advanced React Application
**Tech Stack:** React, Node.js, Express, APIs
- 🔗 **Live Demo:** [https://learning-projects-one.vercel.app/](https://learning-projects-one.vercel.app/)
- 📂 **GitHub:** [https://github.com/heavidevi/Learning-Projects](https://github.com/heavidevi/Learning-Projects)

**Features:**
- 🔌 Backend API integration
- 🔐 User authentication system
- 📊 Real-time data fetching
- 🎯 Advanced React patterns

### 3. 🔧 Assignment 3 - MERN Stack Recipe Application
**Tech Stack:** MongoDB, Express.js, React, Node.js
- 🔗 **Live Demo:** [https://recipe-book-app-pearl.vercel.app/](https://recipe-book-app-pearl.vercel.app/)
- 📂 **GitHub:** [https://github.com/heavidevi/Recipe-Book-App](https://github.com/heavidevi/Recipe-Book-App)

**Features:**
- 🗄️ MongoDB database integration
- 🔐 JWT authentication
- 📱 CRUD operations for recipes
- 🎨 Modern UI with React
- 🌐 RESTful API design

### 4. 🏨 Guest House Management System
**Tech Stack:** React, Node.js, MongoDB, Payment Integration
- 🔗 **Live Demo:** [https://guesthouse-website-mu.vercel.app/](https://guesthouse-website-mu.vercel.app/)
- 📂 **GitHub:** [https://github.com/heavidevi/Guesthouse-Website](https://github.com/heavidevi/Guesthouse-Website)

**Features:**
- 🏨 Room booking system
- 💳 Payment integration
- 📅 Calendar management
- 👥 Guest management
- 📧 Email notifications

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** - Modern UI library
- 🔷 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🚦 **React Router** - Client-side routing
- ⚡ **Vite** - Fast build tool

### Backend & Database
- 🟢 **Node.js** - Runtime environment
- 🚀 **Express.js** - Web framework
- 🍃 **MongoDB** - NoSQL database
- 🔐 **JWT** - Authentication

### Tools & Deployment
- 📁 **Git** - Version control
- 🚀 **Vercel** - Deployment platform
- 💻 **VS Code** - Development environment
- 📦 **npm** - Package manager

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI/UX
- 📱 **Responsive Layout** - Works on all devices
- ⚡ **Fast Performance** - Optimized loading times
- 🧩 **Component Architecture** - Reusable and maintainable code
- 🚦 **Smooth Navigation** - React Router integration
- 🎯 **Project Showcase** - Multiple display formats
- 🔗 **External Links** - Direct links to live projects
- 📊 **Professional Presentation** - Portfolio-ready design

## 🚀 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Navigate to portfolio directory**
```bash
cd portfolio
```

3. **Install dependencies**
```bash
npm install
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

## 💻 Usage

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Environment Setup
Create a `.env` file in the root directory:
```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 📁 Project Structure

```
portfolio/
├── portfolio/                  # Main application directory
│   ├── public/                # Static assets
│   │   ├── index.html        # Main HTML file
│   │   └── assets/           # Public assets
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable components
│   │   │   ├── Hero.tsx     # Hero section component
│   │   │   ├── ProjectCard.tsx # Project card component
│   │   │   └── ProjectList.tsx # Project listing component
│   │   ├── pages/           # Main pages
│   │   │   └── Home.tsx     # Homepage component
│   │   ├── projects/        # Individual project showcases
│   │   │   ├── Assignment1/ # Business website showcase
│   │   │   │   ├── Assignment1.tsx
│   │   │   │   ├── components/
│   │   │   │   ├── layouts/
│   │   │   │   └── pages/
│   │   │   ├── Assignment2/ # React application links
│   │   │   │   └── Assignment2.tsx
│   │   │   ├── Assignment3/ # MERN stack app links
│   │   │   │   └── Assignment3.tsx
│   │   │   └── guest-house/ # Hotel management links
│   │   │       └── guest-house.tsx
│   │   ├── App.tsx          # Main app component
│   │   ├── main.tsx         # Entry point
│   │   └── App.css          # Global styles
│   ├── package.json         # Dependencies and scripts
│   ├── vercel.json         # Vercel deployment config
│   ├── vite.config.ts      # Vite configuration
│   ├── tsconfig.json       # TypeScript configuration
│   └── tailwind.config.js  # Tailwind CSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

## 🚀 Deployment

This portfolio is deployed on Vercel with automatic deployments:

### Live Deployment
- **URL:** [https://portfolioreact-wheat.vercel.app/](https://portfolioreact-wheat.vercel.app/)
- **Platform:** Vercel
- **Auto-Deploy:** Enabled on GitHub push

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

### Vercel Configuration
The `vercel.json` file is configured for SPA routing:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🎯 Navigation

The portfolio includes the following routes:
- **`/`** - Homepage with Hero section and project gallery
- **`/assignment1/*`** - Assignment 1 showcase (embedded components)
- **`/assignment2/*`** - Assignment 2 project details with external links
- **`/assignment3/*`** - Assignment 3 MERN stack project with external links
- **`/guest-house/*`** - Guest House management system with external links

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add more interactive projects
- [ ] Include testimonials section
- [ ] Add dark mode toggle
- [ ] Implement analytics dashboard
- [ ] Add project filtering and search
- [ ] Include detailed skills section with progress bars
- [ ] Add resume download functionality

## 📞 Contact

**Ali ADEEL** - Aspiring MERN Stack Developer

- 📧 **Email:** [ali.adeel@example.com](mailto:ali.adeel@example.com)
- 💼 **LinkedIn:** [linkedin.com/in/ali-adeel](https://linkedin.com/in/ali-adeel)
- 🐱 **GitHub:** [github.com/heavidevi](https://github.com/heavidevi)
- 🌐 **Portfolio:** [portfolioreact-wheat.vercel.app](https://portfolioreact-wheat.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for seamless deployment
- **Vite** for fast development experience

---

⭐ **Star this repository if you find it helpful!**

**Made with ❤️ by Ali ADEEL**

*Last updated: January 2025*
