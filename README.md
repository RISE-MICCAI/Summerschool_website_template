

# MICCAI Summer School 2025 Website

This repository contains the source code for the **MICCAI Summer School 2025** website. The website provides information about the event, including the program schedule, mentorship opportunities, challenges, speaker materials, local hubs, and testimonials.

## **Table of Contents**
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Enhancements Needed](#enhancements-needed)
- [License](#license)

---

## **Project Overview**
The website is built using:
- **HTML** for structure
- **CSS** for styling
- **JavaScript** for interactivity
- **GitHub Pages** for deployment

The site is designed to be responsive and accessible, providing a seamless experience across devices.

---

## **Features**
- **Program Schedule**: Detailed daily schedule for the event.
- **Mentorship Program**: Information about mentorship opportunities.
- **Challenges**: Details about the medical imaging challenge.
- **Speaker Materials**: Placeholder for downloadable materials.
- **Local Hubs**: Information about event hubs worldwide.
- **Testimonials**: Feedback from past participants.
- **Gallery**: A responsive image gallery showcasing event highlights.

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/miccai-summer-school.git
cd miccai-summer-school
```

### **2. Install Dependencies**
If you are using a build tool like Gulp or Node.js, install dependencies:
```bash
npm install
```

### **3. Run Locally**
For a simple static server, use Python:
```bash
python3 -m http.server
```
Visit `http://localhost:8000` in your browser.

### **4. Deploy**
The site is automatically deployed to **GitHub Pages** via the `gh-pages` branch. Push changes to the `main` branch to trigger deployment.

---

## **Folder Structure**
```
miccai-summer-school/
│
├── 

index.html

                # Main entry point
├── pages/                    # Additional pages
│   └── gallery.html          # Gallery page
├── partials/                 # Reusable HTML components
│   ├── header.html           # Header component
│   ├── footer.html           # Footer component
│   ├── navigation.html       # Navigation bar
│   └── other sections...     # Other reusable sections
├── css/                      # Stylesheets
│   └── main.css              # Main CSS file
├── js/                       # JavaScript files
│   ├── navigation.js         # Navigation interactivity
│   └── main.js               # General interactivity
├── images/                   # Image assets
│   └── gallery/              # Gallery images
├── .github/
│   └── workflows/            # GitHub Actions workflows
│       └── gh-page.yml       # Workflow for GitHub Pages deployment
└── 

README.md

                 # Project documentation
```

---

## **Contributing**

We welcome contributions to improve the website! Follow these steps to contribute:

### **1. Fork the Repository**
Click the "Fork" button on the top right of this repository to create your own copy.

### **2. Clone Your Fork**
```bash
git clone https://github.com/your-username/miccai-summer-school.git
cd miccai-summer-school
```

### **3. Create a Branch**
Create a new branch for your feature or bug fix:
```bash
git checkout -b feature-name
```

### **4. Make Changes**
Edit the codebase and test your changes locally.

### **5. Commit and Push**
```bash
git add .
git commit -m "Add your message here"
git push origin feature-name
```

### **6. Submit a Pull Request**
Go to the original repository and click "New Pull Request." Provide a detailed description of your changes.

---

## **Enhancements Needed**

### **0. Structure of the project**
- Seperate modules/pages with partials for better organization


### **1. Accessibility Improvements**
- Add ARIA roles and labels where necessary.
- Ensure all interactive elements are keyboard-accessible.

### **2. SEO Enhancements**
- Add meta tags for better search engine optimization.
- Improve alt text for images.

### **3. Gallery Page**
- Add a lightbox feature for viewing images in full-screen mode.
- Optimize images for faster loading.

### **4. Footer**
- Add working links to resources (e.g., MICCAI Society, FAQ).
- Include a contact form for inquiries.

### **5. Responsiveness**
- Test and fix layout issues on smaller screens (e.g., mobile devices).
- Improve navigation for mobile users (e.g., collapsible menu).

### **6. JavaScript Enhancements**
- Refactor `navigation.js` and `main.js` for better modularity.
- Add error handling for clipboard interactions in `main.js`.

### **7. Deployment**
- Add a staging environment for testing changes before deploying to production.

### **8. Documentation**
- Add more detailed comments in the codebase.
- Create a `CONTRIBUTING.md` file with detailed contribution guidelines.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.
