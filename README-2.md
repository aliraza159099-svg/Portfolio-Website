# Ali Raza - Professional Portfolio

A premium, modern developer portfolio website built with **HTML5, CSS3, and Vanilla JavaScript**. This is Stage 1 of the portfolio project - the public-facing frontend.

## ✨ Features

- **Dark Theme**: Premium dark design with cyan/violet accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: CSS and JavaScript animations with reduced-motion support
- **Lightbox Gallery**: Beautiful fullscreen image viewer for certificates and results
- **Mobile Menu**: Animated hamburger menu for mobile devices
- **Professional Sections**:
  - Hero section with profile photo
  - About section
  - Education timeline
  - Skills showcase (with learning indicators)
  - Learning journey timeline
  - Projects showcase
  - Academic results with certificates
  - Contact section

## 📁 File Structure

```
portfolio/
│
├── index.html                 # Main homepage
├── certificates.html          # Certificates page
├── style.css                  # All styling
├── script.js                  # JavaScript functionality
│
├── assets/
│   ├── profile.jpg            # Your profile photo
│   │
│   ├── results/
│   │   ├── bs-cis.jpg         # BS CIS result card
│   │   ├── fsc.jpg            # FSc result card
│   │   └── matric.jpg         # Matriculation result card
│   │
│   └── certificates/
│       ├── ai-python.jpg      # AI Using Python certificate
│       ├── communication-softskills.jpg  # Communication cert
│       └── fbise-merit.jpg    # FBISE Merit certificate
│
└── README.md                  # This file
```

## 🚀 Getting Started

### 1. **Create the Assets Directory**

Create a folder structure for your images:

```bash
mkdir -p assets/results
mkdir -p assets/certificates
```

### 2. **Add Your Profile Photo**

Place your professional profile photo at:
```
assets/profile.jpg
```

The image should be:
- Professional business photo
- Square or portrait orientation
- High quality (at least 1000x1000px)
- JPG or PNG format

**Important**: The photo displayed in the project is a professional headshot. Use your own professional photo or create one with a photographer.

### 3. **Add Result Card Images**

Upload your academic result cards/certificates to:
- `assets/results/bs-cis.jpg` - BS CIS CGPA document
- `assets/results/fsc.jpg` - FSc result card
- `assets/results/matric.jpg` - Matriculation result card

These are the images I've provided in the uploads folder. Simply save them as JPG files in the results directory.

### 4. **Add Certificate Images**

Upload your certificate images to:
- `assets/certificates/ai-python.jpg` - AI Using Python certificate
- `assets/certificates/communication-softskills.jpg` - Communication and Soft Skills
- `assets/certificates/fbise-merit.jpg` - FBISE Merit certificate

## ✏️ Customization

### Update Contact Information

Open `index.html` and find the Contact section. Replace:

```html
<!-- Line ~450 -->
<a href="mailto:your.email@example.com" class="btn btn-contact email-btn">
    <!-- Change to your actual email -->
</a>

<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
    <!-- Change to your LinkedIn profile URL -->
</a>

<a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <!-- Change to your GitHub profile URL -->
</a>
```

### Update Project Links

Open `index.html` and find the Projects section. Update:

```html
<p>Live: <code>Add your live link</code></p>
<p>GitHub: <code>Add your GitHub link</code></p>
```

### Add or Remove Sections

The HTML is structured with clear section comments. You can:
- Add new project cards (copy and paste a project-card div)
- Modify skills categories
- Add more education entries
- Update the learning journey timeline

## 🌐 Running Locally

### Option 1: Simple Local Server (Recommended)

Using Python 3:
```bash
python -m http.server 8000
```

Using Python 2:
```bash
python -m SimpleHTTPServer 8000
```

Using Node.js (with `http-server`):
```bash
npx http-server
```

Then open: `http://localhost:8000` in your browser

### Option 2: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Opening

Simply open `index.html` in your browser:
```
File > Open File > Select index.html
```

(Note: Some features may work better with a local server)

## 🎨 Customizing Design

All design variables are in `style.css` at the top:

```css
:root {
    --primary-color: #0f172a;      /* Dark background */
    --accent-color: #06b6d4;       /* Cyan accent */
    --text-primary: #f1f5f9;       /* White text */
    --violet: #a855f7;             /* Violet accent */
}
```

You can modify:
- Colors
- Font sizes
- Spacing
- Animation speeds
- Border radius

## 📱 Responsive Breakpoints

The design is responsive at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ♿ Accessibility Features

- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels
- Reduced motion support
- High color contrast

## 🎬 Animation Controls

The site respects `prefers-reduced-motion` preference. Users with reduced motion preference will see minimal animations automatically.

## 🔮 Future Stage 2 - Admin Portal

This portfolio is designed to easily connect to a backend:

- Certificate data structure is ready for database
- Result cards follow a consistent format
- Project cards are reusable components
- Easy to replace hardcoded data with API calls

## 📝 SEO

Included SEO features:
- Meta descriptions
- Open Graph tags
- Proper semantic HTML
- Page titles
- Favicon support

## 🐛 Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

## 📧 Contact Information

When ready, update:
- Email: `your.email@example.com`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- GitHub: `https://github.com/yourprofile`

## 📜 License

This portfolio is personal property. Customization and personal use only.

---

## Quick Checklist Before Deployment

- [ ] Added profile photo to `assets/profile.jpg`
- [ ] Added result cards to `assets/results/`
- [ ] Added certificates to `assets/certificates/`
- [ ] Updated email address
- [ ] Updated LinkedIn URL
- [ ] Updated GitHub URL
- [ ] Updated project links
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Tested lightbox functionality
- [ ] Tested mobile menu

---

**Built with 💙 for Ali Raza**

This is Stage 1 - The Public Frontend. Next stage will include Admin Portal and Database Integration.
