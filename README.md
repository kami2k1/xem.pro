# Entertainment Website - React Project

A modern entertainment platform built with React featuring multiple content categories including Sports, Movies, Anime, TV Shows, Adult Content, and Comics.

## 🚀 Features

- **Tab-based Navigation**: Interactive tabs using React Tabs library
- **Multiple Content Categories**: 
  - Thể Thao (Sports)
  - Phim Ảnh (Movies)
  - Anime
  - Truyền Hình (TV Shows)
  - 18+ (Adult Content)
  - Truyện Tranh (Comics)
- **Copy to Clipboard**: Easy URL copying functionality
- **Responsive Design**: Mobile-friendly interface
- **Modern Animations**: Smooth transitions and hover effects
- **Lazy Loading**: Optimized image loading

## 🛠️ Tech Stack

- **React 18+**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **React Tabs**: Tab navigation component
- **PropTypes**: Type checking for React props
- **Modern CSS**: Custom animations and responsive design

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎨 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── TelegramButton.jsx  # Telegram support button
│   ├── Background.jsx      # Background graphics
│   ├── TabSection.jsx      # Main tab container
│   └── TabContent.jsx      # Individual tab content
├── App.jsx                 # Main application component
├── App.css                 # Main stylesheet
└── main.jsx               # Application entry point
```

## 🎯 Features Breakdown

### Tab Navigation
- Interactive tab switching
- Smooth animations
- Keyboard accessibility
- Visual feedback for active states

### Copy Functionality
- One-click URL copying
- Visual success feedback
- Fallback for older browsers

### Responsive Design
- Mobile-optimized layout
- Touch-friendly interactions
- Adaptive spacing and sizing

### Performance
- Lazy image loading
- Optimized animations
- Efficient re-renders

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Browser Support

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 🎨 Customization

The project uses CSS variables and modern styling techniques. Key customization points:

- Colors: Edit CSS custom properties in `App.css`
- Animations: Modify keyframes and transitions
- Layout: Adjust grid and flexbox properties
- Content: Update tab data in `TabSection.jsx`

## 📄 License

This project is for educational and demonstration purposes.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
