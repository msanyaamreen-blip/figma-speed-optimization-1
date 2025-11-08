# Amphitrite Water Treatment Website - HTML Version

This is the plain HTML, CSS, and JavaScript version of the Amphitrite Water Treatment website with a **Java Spring Boot backend**.

## Project Structure

```
html-version/
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css          # All CSS styles (converted from Tailwind)
├── js/
│   └── script.js           # All JavaScript functionality
├── java-backend/           # Java Spring Boot backend
│   ├── src/
│   │   └── main/
│   │       ├── java/       # Java source code
│   │       └── resources/  # Configuration files
│   ├── pom.xml            # Maven dependencies
│   └── README.md          # Backend setup instructions
└── README.md              # This file
```

## Features

✅ **Fully Responsive Design** - Works on mobile, tablet, and desktop
✅ **Java Spring Boot Backend** - RESTful API for email handling
✅ **Email Integration** - Consultation and newsletter forms via Resend
✅ **Interactive Components** - Carousels, accordions, smooth scrolling
✅ **Modern Animations** - Fade-in effects, hover transitions
✅ **Form Validation** - Client and server-side validation
✅ **Toast Notifications** - User feedback for actions

## Quick Start

### Option 1: Java Backend (Recommended)

#### Prerequisites:
- Java 17 or higher
- Maven 3.6+
- Resend API key

#### Steps:

1. **Navigate to the Java backend directory:**
   ```bash
   cd java-backend
   ```

2. **Configure environment variables:**
   ```bash
   # On Windows (Command Prompt)
   set RESEND_API_KEY=your_resend_api_key_here
   set RECIPIENT_EMAIL=sanyaamreen.4813@gmail.com

   # On Mac/Linux
   export RESEND_API_KEY=your_resend_api_key_here
   export RECIPIENT_EMAIL=sanyaamreen.4813@gmail.com
   ```

3. **Install dependencies:**
   ```bash
   mvn clean install
   ```

4. **Run the server:**
   ```bash
   mvn spring-boot:run
   ```

5. **Open the frontend:**
   - Open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python
     python -m http.server 3000
     
     # Node.js (if you have http-server installed)
     npx http-server -p 3000
     ```

6. **Access the website:**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8080/api`

**See [java-backend/README.md](java-backend/README.md) for detailed backend setup instructions.**

### Option 2: Node.js Backend (Legacy)

If you prefer Node.js, the `server.js` file is still available:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure `.env` file:**
   ```
   RESEND_API_KEY=your_resend_api_key_here
   RECIPIENT_EMAIL=sanyaamreen.4813@gmail.com
   PORT=3001
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   - Visit `http://localhost:3001`

## API Endpoints

### Java Backend (Port 8080)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/consultation` | Send consultation request |
| POST | `/api/newsletter` | Newsletter subscription |

### Request Examples

**Consultation Form:**
```json
POST /api/consultation
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "ABC Industries",
  "service": "Effluent Treatment Plant (ETP)"
}
```

**Newsletter:**
```json
POST /api/newsletter
{
  "email": "john@example.com"
}
```

## Frontend Configuration

To switch between backends, update `js/script.js`:

```javascript
// For Java backend (default)
const API_BASE_URL = 'http://localhost:8080/api';

// For Node.js backend
// const API_BASE_URL = 'http://localhost:3001/api';
```

## Deployment

### Deploy Java Backend

#### Heroku:
```bash
cd java-backend
heroku create amphitrite-backend
heroku config:set RESEND_API_KEY=your_key
git push heroku main
```

#### AWS Elastic Beanstalk:
1. Build JAR: `mvn clean package`
2. Upload `target/water-treatment-backend-1.0.0.jar`
3. Configure environment variables

#### Docker:
```bash
cd java-backend
docker build -t amphitrite-backend .
docker run -p 8080:8080 -e RESEND_API_KEY=your_key amphitrite-backend
```

### Deploy Frontend

Upload these files to any static hosting:
- **Netlify**: Drag and drop the folder
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push to `gh-pages` branch
- **AWS S3**: Upload via AWS Console

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit color variables in `css/styles.css`:
```css
:root {
  --primary-blue-green: #2C5F6F;
  --accent-teal: #00D4AA;
  /* Add your colors */
}
```

### Content
Edit text content directly in `index.html`

### Functionality
Modify behavior in `js/script.js`

## Technologies

**Frontend:**
- HTML5
- CSS3 (converted from Tailwind CSS)
- Vanilla JavaScript (ES6+)

**Backend:**
- Java 17
- Spring Boot 3.2.0
- Spring WebFlux (HTTP client)
- Maven (build tool)
- Resend API (email service)

## Support

For questions or issues:
- Email: sanyaamreen.4813@gmail.com
- Check the backend README: [java-backend/README.md](java-backend/README.md)

## License

© 2025 Amphitrite Technologies. All rights reserved.