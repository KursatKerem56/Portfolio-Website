# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Showcase your projects, skills, and expertise with style.

## Features

- 🎨 Modern, clean design with gradient accents
- 📱 Fully responsive and mobile-friendly
- ⚡ Built with Vite for fast development
- 🎯 Smooth scroll navigation
- 📧 Contact form integration ready
- 🎭 Hero section with call-to-action
- 📊 Skills showcase with proficiency bars
- 🚀 Project portfolio grid
- 🔗 Social media links

## Sections

- **Header** - Sticky navigation with social links
- **Hero** - Eye-catching introduction with CTA buttons
- **About** - Personal bio and key highlights
- **Projects** - Featured project showcase (6 projects)
- **Skills** - Technical skills and proficiency levels
- **Contact** - Contact form and information
- **Footer** - Quick links and social connections

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project:

```bash
cd Portfolio-Website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── About.jsx & About.css
│   ├── Projects.jsx & Projects.css
│   ├── Skills.jsx & Skills.css
│   ├── Contact.jsx & Contact.css
│   └── Footer.jsx & Footer.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Update Your Information

1. **Hero Section** - Edit src/components/Hero.jsx with your name and headline
2. **About Section** - Update src/components/About.jsx with your bio
3. **Projects** - Modify the projects array in src/components/Projects.jsx
4. **Skills** - Update skill categories in src/components/Skills.jsx
5. **Contact** - Update contact info in src/components/Contact.jsx
6. **Social Links** - Update URLs in Header and Footer components

### Color Customization

The primary colors are defined in CSS files. Key gradient colors:

- Primary: `#667eea` to `#764ba2`
- Modify in any `.css` file to change the theme

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **Lucide React** - Icon library
- **CSS3** - Styling with gradients and animations

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and customize it for your own portfolio!
