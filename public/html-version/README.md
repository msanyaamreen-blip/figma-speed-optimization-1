# Amphitrite Technologies - HTML Version

This is the plain HTML, CSS, and JavaScript version of the Amphitrite Technologies website, converted from the original Next.js TypeScript application.

## 📁 Project Structure

```
html-version/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── script.js       # JavaScript functionality
├── server.js           # Node.js backend for email
├── package.json        # Backend dependencies
├── .env.example        # Environment variables template
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Resend API key (for email functionality)

### Installation Steps

1. **Navigate to the html-version directory:**
   ```bash
   cd public/html-version
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Open the website:**
   - Open `index.html` in your browser, or
   - Visit `http://localhost:3001` (the server also serves static files)

## 🔧 Configuration

### Email Setup

The website uses [Resend](https://resend.com/) for sending consultation request emails.

**To get your Resend API key:**
1. Sign up at [https://resend.com/](https://resend.com/)
2. Go to API Keys section
3. Create a new API key
4. Copy the key and paste it into your `.env` file

**Email recipient:**
- All consultation requests are sent to: `sanyaamreen.4813@gmail.com`
- To change this, edit `server.js` line 37

### Port Configuration

The backend server runs on port 3001 by default. To change it:
- Edit the `PORT` variable in your `.env` file
- Update the API endpoint URLs in `js/script.js` (lines 77 and 122)

## 📋 Features

### What Works

✅ All page sections and layouts
✅ Responsive design (mobile, tablet, desktop)
✅ Navigation with smooth scrolling
✅ Mobile hamburger menu
✅ Contact form with email integration
✅ Newsletter subscription
✅ FAQ accordion
✅ Testimonials carousel
✅ Scroll animations
✅ Toast notifications

### API Endpoints

The backend server provides these endpoints:

- `POST /api/send-consultation` - Handle consultation form submissions
- `POST /api/newsletter-subscription` - Handle newsletter signups
- `GET /api/health` - Health check endpoint

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/styles.css` (lines 8-19):

```css
:root {
  --color-primary-blue-green: #2C5F6F;
  --color-primary-dark: #1E3A47;
  --color-accent-teal: #00D4AA;
  /* ... more colors ... */
}
```

### Changing Content

All content is in `index.html`. Search for specific sections and modify the text, images, or links.

### Changing Images

Replace image URLs in `index.html` with your own images. The current images are hosted on Supabase.

## 🚫 Known Limitations

Compared to the Next.js version:

1. **No Server-Side Rendering (SSR)** - All content is rendered client-side
2. **No Automatic Image Optimization** - Images load at full size
3. **No Built-in Routing** - Single page application only
4. **Manual SEO Management** - Meta tags must be manually updated
5. **No TypeScript** - Uses plain JavaScript instead

## 🔒 Security Notes

- Never commit your `.env` file to version control
- Keep your Resend API key secret
- The server uses CORS to allow requests from any origin (modify in production)
- Validate all form inputs on both client and server side

## 🌐 Deployment

### Option 1: Static Hosting + Serverless Functions

Deploy the HTML/CSS/JS to services like:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

Deploy the backend as serverless functions on the same platform.

### Option 2: Traditional Server

1. Upload all files to your web server
2. Install Node.js on the server
3. Run `npm install` and `npm start`
4. Configure a reverse proxy (nginx/Apache) to serve the files
5. Use PM2 or similar to keep the server running

### Option 3: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t amphitrite-website .
docker run -p 3001:3001 --env-file .env amphitrite-website
```

## 📞 Support

For questions or issues with this HTML version:
- Email: info@amphitrite.com
- Phone: +91 98410 12345

## 📄 License

MIT License - feel free to use this template for your own projects.

---

**Amphitrite Technologies** - Clean Water, Sustainable Future 🌊
