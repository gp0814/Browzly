# 🌐 Browzly - AI-Powered Web Browsing Assistant

<div align="center">

![Browzly Logo](https://img.shields.io/badge/Browzly-AI%20Assistant-blue?style=for-the-badge&logo=google-chrome)

**An intelligent Chrome extension powered by AI to enhance your browsing experience**

[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Spring AI](https://img.shields.io/badge/Spring%20AI-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-ai)
[![Gemini API](https://img.shields.io/badge/Gemini%20API-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-4285F4?style=flat-square&logo=google-chrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)

[Demo](#-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [API](#-api-documentation)

</div>

---

## 🚀 Overview

Browzly is an innovative Chrome extension that brings the power of AI directly to your browser. Built with a robust Spring Boot backend and powered by Google's Gemini AI, it provides intelligent assistance while you browse the web. Whether you need content summarization, translation, or contextual help, Browzly is your smart browsing companion.

## ✨ Features

### 🤖 AI-Powered Assistance
- **Smart Content Analysis**: Analyze any webpage content with advanced AI
- **Instant Summarization**: Get quick summaries of long articles and documents
- **Contextual Q&A**: Ask questions about the current page content
- **Multi-language Support**: Translate and understand content in multiple languages

### 🎯 Browser Integration
- **Seamless Chrome Extension**: Lightweight and fast browser integration
- **One-Click Activation**: Easy access through browser toolbar
- **Real-time Processing**: Instant AI responses without page refresh
- **Privacy-Focused**: Secure data handling and processing

### 🔧 Technical Excellence
- **Robust Backend**: Built with Spring Boot for reliability and scalability
- **Modern AI Integration**: Powered by Spring AI framework
- **RESTful API**: Clean and well-documented API endpoints
- **Responsive Design**: Works perfectly across all screen sizes

## 🛠 Tech Stack

### Backend
- **Framework**: Spring Boot 3.x
- **AI Integration**: Spring AI
- **API**: Gemini API (Google)
- **Build Tool**: Maven/Gradle
- **Java Version**: 17+

### Frontend (Chrome Extension)
- **Languages**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Modern CSS with responsive design
- **Architecture**: Modular component-based structure

## 📦 Installation

### Prerequisites

- Java 17 or higher
- Node.js (for extension development)
- Chrome Browser
- Gemini API Key from Google AI Studio

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/gp0814/Browzly.git
   cd Browzly
   ```

2. **Configure API Keys**
   ```bash
   # Create application.properties or application.yml
   cp src/main/resources/application.properties.example src/main/resources/application.properties
   ```
   
   Add your Gemini API key:
   ```properties
   spring.ai.gemini.api-key=your-gemini-api-key-here
   server.port=8080
   ```

3. **Build and Run**
   ```bash
   # Using Maven
   ./mvnw clean install
   ./mvnw spring-boot:run
   
   # Using Gradle
   ./gradlew build
   ./gradlew bootRun
   ```

4. **Verify Backend**
   ```bash
   curl http://localhost:8080/health
   ```

### Chrome Extension Setup

1. **Navigate to Extension Directory**
   ```bash
   cd chrome-extension
   ```

2. **Update Configuration**
   Edit `config.js` to point to your backend:
   ```javascript
   const API_BASE_URL = 'http://localhost:8080';
   ```

3. **Load Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `chrome-extension` folder

## 🎮 Usage

### Getting Started

1. **Launch the Backend**: Make sure your Spring Boot application is running
2. **Activate Extension**: Click the Browzly icon in your Chrome toolbar
3. **Start Browsing**: Navigate to any webpage and use Browzly's features

### Core Features

#### 📝 Content Summarization
```javascript
// Click the summarize button or use shortcut
// Get instant AI-powered summaries of any webpage
```

#### 🤔 Ask Other similar suggestions
```javascript
// Click on the suggest button
// Get contextual suggestions powered by Gemini AI
```

#### 🌍 Translation
```javascript
// Select text and translate to your preferred language
// Support for 100+ languages
```


## 🏗 Project Structure

```
Browzly/
├── src/main/java/
│   └── com/browzly/
│       ├── BrowzlyApplication.java
│       ├── controller/
│       ├── service/
│       ├── model/
│       └── config/
├── chrome-extension/
│   ├── manifest.json
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.css
│   │   └── popup.js
│   ├── content/
│   │   └── content.js
│   └── background/
│       └── background.js
├── src/main/resources/
│   └── application.properties
└── README.md
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow Java coding standards
- Write clean, readable JavaScript
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing powerful AI capabilities
- **Spring Team** for the excellent Spring Boot and Spring AI frameworks
- **Chrome Extensions Team** for the robust extension platform

## 📞 Support

Having issues? We're here to help!

- 🐛 **Bug Reports**: [Open an issue](https://github.com/gp0814/Browzly/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/gp0814/Browzly/discussions)
- 📧 **Email**: [your-email@example.com]

## 🗺 Roadmap

- [ ] Dark/Light theme toggle
- [ ] Advanced content filtering
- [ ] Voice input support
- [ ] Mobile companion app
- [ ] Integration with more AI models
- [ ] Offline mode capabilities

---

<div align="center">

**Made with ❤️ by [Gaurav](https://github.com/gp0814)**

⭐ Star this repo if you find it helpful!

</div>
