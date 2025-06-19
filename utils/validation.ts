/**
 * Validation utilities for form inputs
 */

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

/**
 * Validates email format using RFC 5322 compliant regex
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
    return {
      isValid: false,
      message: 'Email address is required',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: 'Please enter a valid email address',
    };
  }

  return {
    isValid: true,
  };
};

/**
 * Validates password strength and requirements
 */
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return {
      isValid: false,
      message: 'Password is required',
    };
  }

  if (password.length < 6) {
    return {
      isValid: false,
      message: 'Password must be at least 6 characters long',
    };
  }

  if (password.length > 128) {
    return {
      isValid: false,
      message: 'Password must be less than 128 characters',
    };
  }

  // Optional: Check for password complexity
  // const hasUpperCase = /[A-Z]/.test(password);
  // const hasLowerCase = /[a-z]/.test(password);
  // const hasNumbers = /\d/.test(password);
  // const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return {
    isValid: true,
  };
};

/**
 * Validates form data completeness
 */
export const validateForm = (email: string, password: string): boolean => {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  
  return emailValidation.isValid && passwordValidation.isValid;
};

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>\"']/g, '');
};