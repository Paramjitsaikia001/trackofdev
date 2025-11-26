# Frontend Project Structure

This document outlines the organized structure of the Frontend project and how to use the reusable utility classes.

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer, MainLeft, MainRight)
│   ├── navigation/      # Navigation components (MobileNav)
│   ├── ui/             # Reusable UI components (Logo, LoadingPage, etc.)
│   ├── forms/          # Form components (Registration, Review)
│   ├── pages/          # Page components (Explore, Contact, Development, Language)
│   └── DevelopmentRoutes/  # Development-specific routes
├── assets/
│   ├── images/         # Image assets
│   ├── icons/          # Icon assets (SVG files)
│   └── fonts/          # Font files
├── utils/
│   └── styles.js       # Reusable Tailwind utility classes
├── constants/
│   └── routes.js       # Route constants
└── hooks/              # Custom React hooks (future use)
```

## 🎨 Utility Classes

The project uses centralized utility classes in `src/utils/styles.js` to maintain consistency and reduce code duplication.

### Available Style Objects:

#### Button Styles
```javascript
import { buttonStyles } from '../utils/styles';

// Primary button
<button className={buttonStyles.primary}>Click me</button>

// Secondary button
<button className={buttonStyles.secondary}>Click me</button>

// Back button
<button className={buttonStyles.back}>Back</button>

// Icon button
<button className={buttonStyles.icon}>Icon</button>
```

#### Input Styles
```javascript
import { inputStyles } from '../utils/styles';

// Primary input
<input className={inputStyles.primary} />

// Search input
<input className={inputStyles.search} />

// Review input
<input className={inputStyles.review} />
```

#### Layout Styles
```javascript
import { layoutStyles } from '../utils/styles';

// Container
<section className={layoutStyles.container}>

// Header
<section className={layoutStyles.header}>

// Navigation
<nav className={layoutStyles.nav}>
```

#### Text Styles
```javascript
import { textStyles } from '../utils/styles';

// Title
<h1 className={textStyles.title}>Title</h1>

// Subtitle
<h2 className={textStyles.subtitle}>Subtitle</h2>

// Body text
<p className={textStyles.body}>Body text</p>

// Logo text
<h1 className={textStyles.logo}>Logo</h1>
```

#### Card Styles
```javascript
import { cardStyles } from '../utils/styles';

// Primary card
<div className={cardStyles.primary}>

// Review card
<div className={cardStyles.review}>
```

#### Icon Styles
```javascript
import { iconStyles } from '../utils/styles';

// Material icon
<span className={iconStyles.material}>icon_name</span>

// Search icon
<span className={iconStyles.search}>search</span>

// Navigation icon
<span className={iconStyles.nav}>arrow_back_ios</span>
```

## 🛣️ Route Constants

All routes are centralized in `src/constants/routes.js`:

```javascript
import { ROUTES } from '../constants/routes';

// Use in navigation
<Link to={ROUTES.HOME}>Home</Link>
<Link to={ROUTES.DEVELOPMENT}>Development</Link>
```

## 🎯 Best Practices

1. **Always use utility classes** from `styles.js` instead of writing inline Tailwind classes
2. **Import components** from their respective folders or use the index file
3. **Use route constants** instead of hardcoding route strings
4. **Keep components focused** on a single responsibility
5. **Use semantic folder names** for better organization

## 🔧 Adding New Styles

To add new utility classes:

1. Add the class to the appropriate object in `src/utils/styles.js`
2. Use descriptive names that indicate the purpose
3. Follow the existing naming convention
4. Update this README if adding new style categories

## 📱 Component Organization

- **Layout**: Components that define the overall page structure
- **Navigation**: Components related to site navigation
- **UI**: Reusable, presentational components
- **Forms**: Components that handle user input and form logic
- **Pages**: Top-level page components that compose other components 