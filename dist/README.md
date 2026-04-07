# Static WordPress-ready Site Snapshot

This `dist/` folder contains a static HTML/CSS snapshot of your React site.

Files:
- `index.html` — standalone page with the same landing sections and interactive modals
- `style.css` — styles for the page including modal styles
- `README.md` — this file

## Features
- **Responsive design** matching the original site
- **Interactive buttons**:
  - Search button opens a search modal
  - User button opens an account modal
  - Calendar button opens a booking form modal
  - Mobile menu toggle
- **Working contact form** with basic validation
- **Portfolio Grid (Enhanced from PortfolioGrid.tsx)**:
  - **Category Filtering**: Filter portfolio items by Todos, Bodas, Eventos, Retratos with smooth animations
  - **Hover Overlay Controls**: Heart and ExternalLink action buttons appear on hover with backdrop blur effect
  - **Professional Branding**: "photostudiosimona Signature" text on each card
  - **Responsive Grid**: 3-column layout on desktop, 2 on tablet, 1 on mobile
- **Animations & Effects**:
  - Fade-in animations for sections on scroll
  - Hero scale effect on scroll
  - Hover animations for portfolio cards
  - **Image hover effects**: Cards change to detail images on hover
  - Smooth scrolling for anchor links
  - Staggered hero content animations
- **Enhanced Portfolio**: Larger image cards (320px minimum width) for better visibility with original 800×1000 image dimensions

## How to use in WordPress:
1. Upload the `dist` folder to your server or include the HTML/CSS content in a custom HTML block.
2. If using a file manager plugin, place `index.html` in a publicly accessible directory and open it directly.
3. For a WordPress page, copy the markup from `index.html` into a custom HTML block and copy the CSS into the page's Additional CSS or a theme stylesheet.

Note: This is a static version, not a React build. It captures the visual design and most interactive features of your original site, but some advanced React-specific animations (like the motion library effects) are approximated with CSS animations and JavaScript. For the full React experience, you'd need to build and deploy the actual React app.
