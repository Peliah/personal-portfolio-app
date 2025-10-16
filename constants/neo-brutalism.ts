/**
 * Neo-Brutalism Color Palette
 * Eye-friendly colors with bold contrasts
 * Inspired by brutalist architecture with comfortable viewing experience
 */

export const NeoBrutalismColors = {
    // Primary Colors - Bold but eye-friendly
    primary: {
        black: '#1a1a1a',
        white: '#FFFFFF',
        red: '#d32f2f',
        yellow: '#f9a825',
        blue: '#1976d2',
        green: '#388e3c',
        purple: '#7b1fa2',
        orange: '#f57c00',
    },

    // Secondary Colors - Muted and comfortable
    secondary: {
        darkGray: '#424242',
        lightGray: '#e0e0e0',
        darkRed: '#b71c1c',
        darkBlue: '#0d47a1',
        darkGreen: '#1b5e20',
        darkYellow: '#f57f17',
    },

    // Accent Colors - Eye-friendly but still bold
    accent: {
        neonPink: '#e91e63',
        neonGreen: '#4caf50',
        neonBlue: '#2196f3',
        neonYellow: '#ffeb3b',
        neonOrange: '#ff9800',
        neonPurple: '#9c27b0',
    },

    // Background Colors
    background: {
        primary: '#FFFFFF',
        secondary: '#f8f9fa',
        dark: '#1a1a1a',
        light: '#FFFFFF',
        accent: '#fff3e0',
    },

    // Text Colors
    text: {
        primary: '#1a1a1a',
        secondary: '#424242',
        inverse: '#FFFFFF',
        accent: '#d32f2f',
        muted: '#757575',
    },

    // Border Colors
    border: {
        primary: '#424242',
        secondary: '#757575',
        accent: '#d32f2f',
        thick: '#424242', // For thick borders
    },

    // Shadow Colors (solid, unblurred)
    shadow: {
        black: '#424242',
        dark: '#757575',
        accent: '#d32f2f',
    }
};

/**
 * Neo-Brutalism Typography Scale
 * Bold, attention-grabbing fonts with strong hierarchy
 */
export const NeoBrutalismTypography = {
    // Font Families
    fontFamily: {
        primary: 'System', // Bold system font
        secondary: 'System', // Regular system font
        accent: 'System', // Heavy system font
    },

    // Font Sizes - Large and bold
    fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 28,
        '4xl': 32,
        '5xl': 36,
        '6xl': 48,
        '7xl': 56,
        '8xl': 64,
        '9xl': 72,
    },

    // Font Weights - Bold and heavy
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },

    // Line Heights
    lineHeight: {
        tight: 1.1,
        normal: 1.2,
        relaxed: 1.3,
        loose: 1.4,
    },
};

/**
 * Neo-Brutalism Spacing Scale
 * Bold, generous spacing with strong visual separation
 */
export const NeoBrutalismSpacing = {
    xs: 4,
    sm: 8,
    base: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
    '5xl': 128,
};

/**
 * Neo-Brutalism Border Radius
 * Sharp, geometric shapes with minimal rounding
 */
export const NeoBrutalismBorderRadius = {
    none: 0,
    sm: 2,
    base: 4,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24,
    full: 9999,
};

/**
 * Neo-Brutalism Shadows
 * Solid, unblurred shadows for depth without softness
 */
export const NeoBrutalismShadows = {
    none: {
        shadowColor: 'transparent',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },
    sm: {
        shadowColor: NeoBrutalismColors.shadow.black,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 2,
    },
    base: {
        shadowColor: NeoBrutalismColors.shadow.black,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 4,
    },
    lg: {
        shadowColor: NeoBrutalismColors.shadow.black,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 6,
    },
    xl: {
        shadowColor: NeoBrutalismColors.shadow.black,
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 8,
    },
};

/**
 * Neo-Brutalism Border Widths
 * Bold borders for visual separation without being overwhelming
 */
export const NeoBrutalismBorderWidth = {
    none: 0,
    thin: 1,
    base: 2,
    thick: 3,
    thicker: 4,
    thickest: 6,
};
