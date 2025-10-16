import { ThemeSelector } from '@/components/ThemeSelector';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export function ThemeDemo() {
    const backgroundColor = useThemeColor({}, 'background');
    const textColor = useThemeColor({}, 'text');
    const cardBackground = useThemeColor({}, 'cardBackground');
    const borderColor = useThemeColor({}, 'border');
    const tintColor = useThemeColor({}, 'tint');
    const successColor = useThemeColor({}, 'success');
    const warningColor = useThemeColor({}, 'warning');
    const errorColor = useThemeColor({}, 'error');
    const infoColor = useThemeColor({}, 'info');

    const { isDark, themeMode } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <Text style={[styles.title, { color: textColor }]}>
                    Theme Demo
                </Text>
                <View style={styles.controls}>
                    <ThemeToggleButton />
                    <ThemeSelector />
                </View>
            </View>

            <View style={styles.statusContainer}>
                <Text style={[styles.statusText, { color: textColor }]}>
                    Current Theme: {isDark ? 'Dark' : 'Light'}
                </Text>
                <Text style={[styles.statusText, { color: textColor }]}>
                    Theme Mode: {themeMode}
                </Text>
            </View>

            <View style={[styles.card, { backgroundColor: cardBackground, borderColor }]}>
                <Text style={[styles.cardTitle, { color: textColor }]}>
                    Color Palette
                </Text>

                <View style={styles.colorRow}>
                    <View style={[styles.colorBox, { backgroundColor: tintColor }]} />
                    <Text style={[styles.colorLabel, { color: textColor }]}>Tint</Text>
                </View>

                <View style={styles.colorRow}>
                    <View style={[styles.colorBox, { backgroundColor: successColor }]} />
                    <Text style={[styles.colorLabel, { color: textColor }]}>Success</Text>
                </View>

                <View style={styles.colorRow}>
                    <View style={[styles.colorBox, { backgroundColor: warningColor }]} />
                    <Text style={[styles.colorLabel, { color: textColor }]}>Warning</Text>
                </View>

                <View style={styles.colorRow}>
                    <View style={[styles.colorBox, { backgroundColor: errorColor }]} />
                    <Text style={[styles.colorLabel, { color: textColor }]}>Error</Text>
                </View>

                <View style={styles.colorRow}>
                    <View style={[styles.colorBox, { backgroundColor: infoColor }]} />
                    <Text style={[styles.colorLabel, { color: textColor }]}>Info</Text>
                </View>
            </View>

            <View style={[styles.card, { backgroundColor: cardBackground, borderColor }]}>
                <Text style={[styles.cardTitle, { color: textColor }]}>
                    Theme Features
                </Text>
                <Text style={[styles.featureText, { color: textColor }]}>
                    • Automatic system theme detection
                </Text>
                <Text style={[styles.featureText, { color: textColor }]}>
                    • Manual light/dark mode toggle
                </Text>
                <Text style={[styles.featureText, { color: textColor }]}>
                    • Theme preference persistence
                </Text>
                <Text style={[styles.featureText, { color: textColor }]}>
                    • Comprehensive color palette
                </Text>
                <Text style={[styles.featureText, { color: textColor }]}>
                    • Smooth theme transitions
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    controls: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    statusContainer: {
        marginBottom: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    statusText: {
        fontSize: 16,
        marginBottom: 4,
    },
    card: {
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    colorRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    colorBox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        marginRight: 12,
    },
    colorLabel: {
        fontSize: 16,
    },
    featureText: {
        fontSize: 16,
        marginBottom: 8,
        lineHeight: 24,
    },
});
