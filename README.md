# React Native Login Screen

A beautiful, fully-featured login screen built with React Native and Expo. This project demonstrates modern UI design principles, form validation, and proper authentication flow structure.

## 🚀 Features

- **Beautiful UI Design**: Modern gradient background with glassmorphism effects
- **Form Validation**: Real-time email and password validation with visual feedback
- **Password Toggle**: Show/hide password functionality with eye icons
- **Responsive Design**: Optimized for all device sizes and orientations
- **Smooth Animations**: Fade-in and slide-up animations on load
- **Loading States**: Interactive loading button with proper feedback
- **TypeScript Support**: Fully typed components and utilities
- **Backend Integration Ready**: JSON API structure for easy backend integration

## 📱 Screenshots

The login screen features:
- App logo with Shield icon and branding
- Email input with validation and mail icon
- Password input with show/hide toggle and lock icon
- Responsive login button with gradient styling
- Forgot password and sign up links
- Real-time form validation status indicator

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd react-native-login-screen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   This will start the Expo development server. You can then:
   - Press `i` to open iOS Simulator
   - Press `a` to open Android Emulator
   - Scan the QR code with Expo Go app on your physical device

## 🏗️ Project Structure

```
├── app/
│   ├── index.tsx              # Main login screen component
│   └── _layout.tsx            # Root layout configuration
├── components/
│   ├── CustomInput.tsx        # Reusable input component
│   └── LoadingButton.tsx      # Button component with loading states
├── utils/
│   └── validation.ts          # Form validation utilities
├── api/
│   └── auth.json             # Backend API structure documentation
└── README.md
```

## 🔧 Key Components

### Login Screen (`app/index.tsx`)
The main login screen component featuring:
- State management for form data and validation
- Animated entrance effects
- Real-time form validation
- Responsive design with keyboard handling

### Custom Input (`components/CustomInput.tsx`)
Reusable input component with:
- Icon support (left and right)
- Error state handling
- Customizable styling
- TypeScript props interface

### Loading Button (`components/LoadingButton.tsx`)
Professional button component with:
- Loading states with spinner
- Multiple variants (primary, secondary, outline)
- Gradient backgrounds
- Size variations

### Validation Utils (`utils/validation.ts`)
Comprehensive validation functions for:
- Email format validation (RFC 5322 compliant)
- Password strength requirements
- Input sanitization
- Form completeness checking

## 📡 Backend Integration

The project includes a comprehensive API documentation in `api/auth.json` that defines:

### Authentication Endpoints
- **POST /api/auth/login** - User login
- **POST /api/auth/signup** - User registration  
- **POST /api/auth/forgot-password** - Password reset

### Request/Response Structure
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

### Error Handling
- Input validation errors
- Authentication failures
- Rate limiting
- Account lockout scenarios

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` (Blue gradient start)
- **Secondary**: `#764ba2` (Purple gradient middle)
- **Accent**: `#f093fb` (Pink gradient end)
- **Success**: `#10B981` (Green)
- **Error**: `#EF4444` (Red)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Titles**: 28px, Weight 700
- **Subtitles**: 16px, Weight 400
- **Body Text**: 16px, Weight 400
- **Small Text**: 14px, Weight 400

### Spacing System
- Based on 8px grid system
- Consistent padding and margins
- Responsive breakpoints

## 🔒 Security Features

- Input sanitization to prevent XSS attacks
- Secure password input with toggle visibility
- Email format validation
- Password strength requirements
- Form validation before submission

## 📱 Platform Support

- **iOS**: Full support with platform-specific optimizations
- **Android**: Full support with Material Design elements
- **Web**: Responsive web interface with keyboard navigation

## 🧪 Testing

To test the login functionality:

1. Enter a valid email address (e.g., `test@example.com`)
2. Enter a password (minimum 6 characters)
3. Observe real-time validation feedback
4. Click "Sign In" to see an alert with the entered credentials
5. Test "Forgot Password" and "Sign Up" links

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Expo** for the excellent development platform
- **Lucide React Native** for beautiful icons
- **React Native Reanimated** for smooth animations
- **Linear Gradient** for stunning visual effects

## 📞 Support

If you have any questions or need help with the implementation:

1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Contact the development team

---

**Happy Coding! 🚀**