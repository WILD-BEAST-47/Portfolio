# Creative UI/UX Designer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Creative, eye-catching design with electric brand colors
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth animations and hover effects
- **3D Elements**: Advanced 3D components for enhanced user experience
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Built with accessibility best practices

## 📁 Project Structure

```
portfolio/
├── assets/                 # Static assets
│   ├── hero-bg.jpg        # Hero background image
│   ├── project-1.jpg      # Project images
│   ├── project-2.jpg
│   └── project-3.jpg
├── components/            # React components
│   ├── ui/               # shadcn/ui components library
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (50+ components)
│   ├── 3d/               # 3D components
│   │   └── GlobalMouseFollower.tsx
│   ├── Navigation.tsx    # Main navigation
│   ├── HeroSection.tsx   # Hero section
│   ├── AboutSection.tsx  # About section
│   ├── PortfolioSection.tsx # Portfolio/Projects
│   ├── SkillsSection.tsx # Skills section
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx        # Footer
├── hooks/                # Custom React hooks
│   ├── use-toast.ts      # Toast notifications
│   └── use-mobile.tsx    # Mobile detection
├── lib/                  # Utility libraries
│   └── utils.ts          # Utility functions
├── pages/                # Page components
│   ├── Index.tsx         # Home page
│   └── NotFound.tsx      # 404 page
├── src/                  # Source files
│   ├── main.tsx          # Entry point
│   ├── App.tsx           # Main App component
│   └── index.css         # Global styles
└── index.html            # HTML template
```

## 🎨 Design System

### Color Palette
- **Primary**: Electric Purple (`hsl(280 100% 70%)`)
- **Secondary**: Electric Blue (`hsl(195 100% 60%)`)
- **Accent**: Electric Yellow (`hsl(45 100% 65%)`)
- **Background**: Dark theme with gradient overlays

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Animations
- **Float**: Gentle floating animations
- **Pulse Glow**: Glowing pulse effects
- **Morphing Shapes**: Organic shape transformations
- **Smooth Transitions**: 250ms ease-in-out transitions

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **3D Graphics**: Three.js (via 3D components)
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Vite

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 Sections

### 1. Navigation
- Fixed header with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting

### 2. Hero Section
- Compelling headline and description
- Call-to-action buttons
- Animated background elements
- Scroll indicator

### 3. About Section
- Personal introduction
- Experience statistics
- Visual design elements
- Professional background

### 4. Skills Section
- Interactive skill bars
- Categorized skills (Design, Prototyping, Development)
- Additional skills tags
- Animated progress indicators

### 5. Portfolio Section
- Project showcase with filtering
- Interactive project cards
- Technology tags
- Hover effects and overlays

### 6. Contact Section
- Contact form with validation
- Social media links
- Professional contact information
- Interactive form elements

### 7. Footer
- Copyright information
- Social links
- Additional navigation
- Brand elements

## 🎯 Key Features

- **Responsive Design**: Works perfectly on all screen sizes
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant design
- **Modern UI**: Latest design trends and interactions
- **3D Elements**: Advanced visual effects
- **Form Validation**: Robust contact form handling
- **Smooth Scrolling**: Enhanced user experience

## 🔧 Customization

### Colors
Update the CSS custom properties in `src/index.css`:
```css
:root {
  --primary: 280 100% 70%;
  --secondary: 195 100% 60%;
  --accent: 45 100% 65%;
}
```

### Content
- Update component content in the respective `.tsx` files
- Replace project images in the `assets/` folder
- Modify personal information in components

### Styling
- Use Tailwind CSS classes for styling
- Leverage the design system utilities
- Add custom animations in `src/index.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ using modern web technologies** 