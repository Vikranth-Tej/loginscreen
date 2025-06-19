import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface LoadingButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  gradientColors?: string[];
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  title,
  isLoading = false,
  variant = 'primary',
  size = 'medium',
  gradientColors = ['#667eea', '#764ba2'],
  style,
  disabled,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    
    if (size === 'small') baseStyle.push(styles.smallButton);
    if (size === 'large') baseStyle.push(styles.largeButton);
    if (disabled || isLoading) baseStyle.push(styles.disabledButton);
    
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText];
    
    if (variant === 'outline') baseStyle.push(styles.outlineText);
    if (size === 'small') baseStyle.push(styles.smallText);
    if (size === 'large') baseStyle.push(styles.largeText);
    
    return baseStyle;
  };

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={[...getButtonStyle(), style]}
        disabled={disabled || isLoading}
        {...props}
      >
        <LinearGradient
          colors={disabled || isLoading ? ['#D1D5DB', '#9CA3AF'] : gradientColors}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={getTextStyle()}>{title}</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[
        ...getButtonStyle(),
        variant === 'outline' && styles.outlineButton,
        variant === 'secondary' && styles.secondaryButton,
        style,
      ]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' ? '#667eea' : '#FFFFFF'}
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  smallButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  largeButton: {
    paddingVertical: 20,
    paddingHorizontal: 32,
  },
  disabledButton: {
    opacity: 0.6,
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#667eea',
  },
  secondaryButton: {
    backgroundColor: '#F3F4F6',
  },
  outlineText: {
    color: '#667eea',
  },
  smallText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 18,
  },
});