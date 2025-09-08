# Modern Portfolio Website

## 🚀 Overview

A modern, responsive portfolio website built with React and modern web technologies. Features smooth animations, dark theme, and dynamic content from GitConnected API.

## ✨ Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **Dynamic Content**: Automatically pulls data from GitConnected API
- **Interactive**: Hover effects, smooth scrolling, and engaging UI
- **Contact Form**: Working contact form with EmailJS integration
- **Performance**: Optimized for fast loading and smooth performance

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **SCSS** - Advanced styling with CSS variables
- **Axios** - API data fetching
- **EmailJS** - Contact form functionality
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - Scroll-based animations
- **React Type Animation** - Typing animation effects

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/gowtham369/Gowtham_Portfolio.git
cd Gowtham_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Configuration

### EmailJS Setup
To enable the contact form:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Update the EmailJS configuration in `src/Components/Contact.js`:
```javascript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID', 
  e.target,
  'YOUR_PUBLIC_KEY'
);
```

### GitConnected API
The portfolio automatically fetches data from GitConnected. To use your own data:
1. Create a profile at [GitConnected](https://gitconnected.com/)
2. Update the API endpoint in `src/App.js`:
```javascript
const response = await axios.get('https://gitconnected.com/v1/portfolio/YOUR_USERNAME');
```

## 🎨 Customization

### Colors
Update the color scheme in `src/Assets/Style.scss`:
```scss
:root {
  --primary: #6366f1;
  --secondary: #f59e0b;
  --accent: #10b981;
  // ... other colors
}
```

### Content
Modify the default content in each component file:
- `src/Components/Hero.js` - Hero section content
- `src/Components/About.js` - About section
- `src/Components/Skills.js` - Skills and technologies
- `src/Components/Projects.js` - Project showcase
- `src/Components/Experience.js` - Work experience

## 📱 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Personal information and overview
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with links
5. **Experience** - Work history timeline
6. **Contact** - Contact form and information

## 🚀 Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

Or build for production:
```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Gowtham Ravipati - [GitHub](https://github.com/gowtham369)

---

⭐ Star this repo if you found it helpful!
