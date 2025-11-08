# Amphitrite Water Treatment - Java Spring Boot Backend

This is the Java Spring Boot backend for the Amphitrite Water Treatment consultation system.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Java 17 or higher** - [Download Java](https://www.oracle.com/java/technologies/downloads/)
- **Maven 3.6+** - [Download Maven](https://maven.apache.org/download.cgi)
- **Resend API Key** - [Get API Key](https://resend.com/)

## Project Structure

```
java-backend/
├── src/
│   └── main/
│       ├── java/com/amphitrite/
│       │   ├── AmphitriteApplication.java      # Main Spring Boot application
│       │   ├── config/
│       │   │   └── WebConfig.java              # CORS and static resources config
│       │   ├── controller/
│       │   │   └── EmailController.java        # REST API endpoints
│       │   ├── dto/
│       │   │   ├── ApiResponse.java            # Generic API response
│       │   │   ├── ConsultationRequest.java    # Consultation form DTO
│       │   │   └── NewsletterRequest.java      # Newsletter subscription DTO
│       │   ├── exception/
│       │   │   └── GlobalExceptionHandler.java # Global exception handling
│       │   └── service/
│       │       └── EmailService.java           # Email sending service
│       └── resources/
│           └── application.properties          # Application configuration
├── pom.xml                                      # Maven dependencies
├── .env.example                                 # Environment variables example
└── README.md                                    # This file
```

## Setup Instructions

### 1. Clone or Navigate to the Project

```bash
cd public/html-version/java-backend
```

### 2. Configure Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Edit the `.env` file and add your credentials:

```properties
RESEND_API_KEY=re_your_actual_api_key_here
RECIPIENT_EMAIL=sanyaamreen.4813@gmail.com
```

### 3. Set Environment Variables

#### On Windows (Command Prompt):
```cmd
set RESEND_API_KEY=re_your_actual_api_key_here
set RECIPIENT_EMAIL=sanyaamreen.4813@gmail.com
```

#### On Windows (PowerShell):
```powershell
$env:RESEND_API_KEY="re_your_actual_api_key_here"
$env:RECIPIENT_EMAIL="sanyaamreen.4813@gmail.com"
```

#### On Mac/Linux:
```bash
export RESEND_API_KEY=re_your_actual_api_key_here
export RECIPIENT_EMAIL=sanyaamreen.4813@gmail.com
```

### 4. Install Dependencies

```bash
mvn clean install
```

### 5. Run the Application

```bash
mvn spring-boot:run
```

The server will start at `http://localhost:8080`

## API Endpoints

### 1. Health Check
**GET** `/api/health`

Returns server status.

**Response:**
```json
{
  "success": true,
  "message": "Server is running"
}
```

### 2. Send Consultation Request
**POST** `/api/consultation`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "ABC Industries",
  "service": "Effluent Treatment Plant (ETP)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation request sent successfully!"
}
```

### 3. Newsletter Subscription
**POST** `/api/newsletter`

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Newsletter subscription successful!"
}
```

## Frontend Integration

Update the API URLs in your JavaScript files to point to the Java backend:

```javascript
// In js/script.js
const API_BASE_URL = 'http://localhost:8080/api';

// Consultation form
fetch(`${API_BASE_URL}/consultation`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});

// Newsletter subscription
fetch(`${API_BASE_URL}/newsletter`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});
```

## Building for Production

### Create JAR file:
```bash
mvn clean package
```

The JAR file will be created in `target/water-treatment-backend-1.0.0.jar`

### Run the JAR:
```bash
java -jar target/water-treatment-backend-1.0.0.jar
```

## Deployment Options

### 1. Deploy to Heroku
```bash
# Install Heroku CLI
heroku login
heroku create amphitrite-backend
heroku config:set RESEND_API_KEY=your_key
heroku config:set RECIPIENT_EMAIL=your_email
git push heroku main
```

### 2. Deploy to AWS Elastic Beanstalk
- Upload the JAR file to Elastic Beanstalk
- Configure environment variables in the console

### 3. Deploy to Docker
Create a `Dockerfile`:
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/water-treatment-backend-1.0.0.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

Build and run:
```bash
docker build -t amphitrite-backend .
docker run -p 8080:8080 -e RESEND_API_KEY=your_key amphitrite-backend
```

## Development

### Hot Reload
The project includes Spring Boot DevTools for automatic restart on code changes.

### Running Tests
```bash
mvn test
```

### Code Quality
```bash
mvn verify
```

## Troubleshooting

### Port Already in Use
If port 8080 is already in use, change it in `application.properties`:
```properties
server.port=8081
```

### Email Not Sending
1. Verify your Resend API key is correct
2. Check that the API key has not expired
3. Ensure the recipient email is valid
4. Check server logs for detailed error messages

### Maven Build Fails
1. Ensure Java 17+ is installed: `java -version`
2. Ensure Maven is installed: `mvn -version`
3. Clear Maven cache: `mvn clean`

## Technologies Used

- **Spring Boot 3.2.0** - Web framework
- **Spring WebFlux** - Reactive HTTP client for Resend API
- **Spring Validation** - Request validation
- **Jackson** - JSON processing
- **Lombok** - Reduce boilerplate code
- **Maven** - Build tool

## License

© 2025 Amphitrite Technologies. All rights reserved.

## Support

For technical support, contact: sanyaamreen.4813@gmail.com
