# Technology Roadmaps

A visually appealing web application that displays a list of various technologies along with their respective roadmaps. This application features interactive components, search functionality, and responsive design.

## Features

- **Interactive Technology Cards**: View key information about each technology
- **Detailed Roadmaps**: Expandable roadmaps showing current state, near future, and long-term vision
- **Search Functionality**: Search technologies by name, description, or category
- **Category Filtering**: Filter technologies by category (Web, AI & ML, Cloud, Data)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, contemporary design with smooth animations

## Technologies Featured

The application includes roadmaps for 12 technologies across various domains:
- React
- Node.js
- Python
- Artificial Intelligence
- Cloud Computing
- Blockchain
- Machine Learning
- DevOps
- Edge Computing
- Data Science
- Mobile Development
- Cyber Security

## Setup and Running Locally

The application is completely static and requires no backend, database, or authentication system. Follow these steps to run it locally:

### Method 1: Direct File Opening

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` directly in your web browser

```bash
# Clone the repository
git clone https://github.com/your-username/technology-roadmaps.git

# Navigate to the project directory
cd technology-roadmaps

# Open in default browser (macOS)
open index.html

# Or open in specific browser
google-chrome index.html
```

### Method 2: Using a Local Server

For a more realistic development environment, you can serve the application using a simple HTTP server:

#### Using Python (Python 3.x)

```bash
# Navigate to the project directory
cd technology-roadmaps

# Start the Python HTTP server
python -m http.server 8000

# Open your browser and go to http://localhost:8000
```

#### Using Node.js with http-server

```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd technology-roadmaps

# Start the server
http-server

# Open your browser and go to http://localhost:8080
```

#### Using Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The application will open in your default browser with hot reloading

## Deployment

The application can be easily deployed to various static hosting platforms:

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to your repository on GitHub
3. Click on "Settings" > "Pages"
4. Under "Source", select "Deploy from a branch"
5. Choose the `main` branch and `/ (root)` folder
6. Click "Save"
7. Your site will be available at `https://<username>.github.io/<repository>`

### Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Click "Drag and drop your site folder here" or connect to your Git repository
3. Netlify will automatically detect the static site
4. Click "Deploy site"
5. Your site will be available at a Netlify subdomain (e.g., `your-site.netlify.app`)

### Vercel

1. Go to [Vercel](https://vercel.com/)
2. Click "Import Project" and connect to your Git repository
3. Vercel will automatically detect the static site
4. Click "Deploy"
5. Your site will be available at a Vercel subdomain (e.g., `your-site.vercel.app`)

## Project Structure

```
technology-roadmaps/
├── index.html            # Main HTML file
├── styles.css            # CSS styling
├── script.js             # JavaScript functionality
├── data.js               # Technology roadmap data
└── README.md             # This documentation file
```

## Customization

You can easily customize the application by:

### Adding New Technologies

Edit the `data.js` file and add a new technology object to the `technologies` array:

```javascript
{
    id: 13,
    name: "New Technology",
    category: "web", // or "ai", "cloud", "data", "security"
    icon: "fas fa-star", // Font Awesome icon class
    description: "A brief description of the new technology.",
    roadmap: [
        {
            title: "Current State (2025)",
            items: [
                {
                    year: "2025",
                    milestone: "Initial Release",
                    description: "The technology is first introduced to the market."
                }
            ]
        },
        // Add more phases as needed
    ]
}
```

### Modifying Styles

Edit the `styles.css` file to change colors, fonts, spacing, or other visual elements. The CSS uses CSS variables at the top of the file for easy theme customization:

```css
:root {
    --primary-color: #3b82f6;
    --primary-dark: #2563eb;
    --secondary-color: #10b981;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f9fafb;
    --bg-dark: #1f2937;
    --card-bg: #ffffff;
    /* ... other variables */
}
```

## Browser Compatibility

The application is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes and is not licensed for commercial use.