import {
    NeoBrutalismBorderRadius,
    NeoBrutalismBorderWidth,
    NeoBrutalismColors,
    NeoBrutalismShadows,
    NeoBrutalismSpacing
} from '@/constants/neo-brutalism';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

export type NeoBrutalismCardVariant = 'default' | 'accent' | 'dark' | 'light';

interface NeoBrutalismCardProps {
    children: React.ReactNode;
    variant?: NeoBrutalismCardVariant;
    padding?: 'sm' | 'base' | 'lg' | 'xl';
    style?: ViewStyle;
    shadow?: boolean;
    border?: boolean;
}

export function NeoBrutalismCard({
    children,
    variant = 'default',
    padding = 'base',
    style,
    shadow = true,
    border = true,
}: NeoBrutalismCardProps) {
    const getVariantStyles = () => {
        switch (variant) {
            case 'default':
                return {
                    backgroundColor: NeoBrutalismColors.background.primary,
                    borderColor: NeoBrutalismColors.border.primary,
                };
            case 'accent':
                return {
                    backgroundColor: NeoBrutalismColors.accent.neonYellow,
                    borderColor: NeoBrutalismColors.border.primary,
                };
            case 'dark':
                return {
                    backgroundColor: NeoBrutalismColors.primary.black,
                    borderColor: NeoBrutalismColors.border.primary,
                };
            case 'light':
                return {
                    backgroundColor: NeoBrutalismColors.background.secondary,
                    borderColor: NeoBrutalismColors.border.secondary,
                };
            default:
                return {
                    backgroundColor: NeoBrutalismColors.background.primary,
                    borderColor: NeoBrutalismColors.border.primary,
                };
        }
    };

    const getPaddingStyles = () => {
        switch (padding) {
            case 'sm':
                return NeoBrutalismSpacing.sm;
            case 'base':
                return NeoBrutalismSpacing.base;
            case 'lg':
                return NeoBrutalismSpacing.lg;
            case 'xl':
                return NeoBrutalismSpacing.xl;
            default:
                return NeoBrutalismSpacing.base;
        }
    };

    const variantStyles = getVariantStyles();
    const paddingValue = getPaddingStyles();

    const cardStyles = [
        styles.card,
        {
            backgroundColor: variantStyles.backgroundColor,
            borderColor: variantStyles.borderColor,
            borderWidth: border ? NeoBrutalismBorderWidth.thick : 0,
            borderRadius: NeoBrutalismBorderRadius.base,
            padding: paddingValue,
        },
        shadow ? NeoBrutalismShadows.base : NeoBrutalismShadows.none,
        style,
    ];

    return <View style={cardStyles}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        // Base card styles are applied dynamically
    },
});
