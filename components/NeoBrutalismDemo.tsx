import {
    NeoBrutalismButton,
    NeoBrutalismCard,
    NeoBrutalismInput,
    NeoBrutalismText
} from '@/components/neo-brutalism';
import { NeoBrutalismColors, NeoBrutalismSpacing } from '@/constants/neo-brutalism';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export function NeoBrutalismDemo() {
    const { themeMode, isNeoBrutalism } = useTheme();
    const [inputValue, setInputValue] = useState('');
    const [multilineValue, setMultilineValue] = useState('');

    const backgroundColor = isNeoBrutalism
        ? NeoBrutalismColors.background.primary
        : '#FFFFFF';

    return (
        <ScrollView style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <NeoBrutalismText variant="heading" uppercase>
                    Neo-Brutalism UI
                </NeoBrutalismText>
                <NeoBrutalismText variant="subheading" color="secondary">
                    Bold, Raw, Unapologetic Design
                </NeoBrutalismText>
            </View>

            {/* Buttons Section */}
            <NeoBrutalismCard variant="default" style={styles.section}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                    Buttons
                </NeoBrutalismText>

                <View style={styles.buttonRow}>
                    <NeoBrutalismButton
                        title="Primary"
                        variant="primary"
                        onPress={() => console.log('Primary pressed')}
                    />
                    <NeoBrutalismButton
                        title="Secondary"
                        variant="secondary"
                        onPress={() => console.log('Secondary pressed')}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <NeoBrutalismButton
                        title="Accent"
                        variant="accent"
                        onPress={() => console.log('Accent pressed')}
                    />
                    <NeoBrutalismButton
                        title="Danger"
                        variant="danger"
                        onPress={() => console.log('Danger pressed')}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <NeoBrutalismButton
                        title="Success"
                        variant="success"
                        onPress={() => console.log('Success pressed')}
                    />
                    <NeoBrutalismButton
                        title="Disabled"
                        variant="primary"
                        disabled
                        onPress={() => console.log('Disabled pressed')}
                    />
                </View>

                <NeoBrutalismText variant="caption" color="muted" style={styles.description}>
                    Different button variants with bold styling and solid shadows
                </NeoBrutalismText>
            </NeoBrutalismCard>

            {/* Cards Section */}
            <NeoBrutalismCard variant="default" style={styles.section}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                    Cards
                </NeoBrutalismText>

                <View style={styles.cardRow}>
                    <NeoBrutalismCard variant="default" padding="sm" style={styles.smallCard}>
                        <NeoBrutalismText variant="caption" uppercase>Default</NeoBrutalismText>
                    </NeoBrutalismCard>

                    <NeoBrutalismCard variant="accent" padding="sm" style={styles.smallCard}>
                        <NeoBrutalismText variant="caption" uppercase>Accent</NeoBrutalismText>
                    </NeoBrutalismCard>
                </View>

                <View style={styles.cardRow}>
                    <NeoBrutalismCard variant="dark" padding="sm" style={styles.smallCard}>
                        <NeoBrutalismText variant="caption" color="inverse" uppercase>Dark</NeoBrutalismText>
                    </NeoBrutalismCard>

                    <NeoBrutalismCard variant="light" padding="sm" style={styles.smallCard}>
                        <NeoBrutalismText variant="caption" uppercase>Light</NeoBrutalismText>
                    </NeoBrutalismCard>
                </View>

                <NeoBrutalismText variant="caption" color="muted" style={styles.description}>
                    Card variants with thick borders and solid shadows
                </NeoBrutalismText>
            </NeoBrutalismCard>

            {/* Typography Section */}
            <NeoBrutalismCard variant="default" style={styles.section}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                    Typography
                </NeoBrutalismText>

                <NeoBrutalismText variant="heading" style={styles.typographyExample}>
                    Heading Text
                </NeoBrutalismText>

                <NeoBrutalismText variant="subheading" style={styles.typographyExample}>
                    Subheading Text
                </NeoBrutalismText>

                <NeoBrutalismText variant="body" style={styles.typographyExample}>
                    Body text with bold styling
                </NeoBrutalismText>

                <NeoBrutalismText variant="caption" style={styles.typographyExample}>
                    Caption text
                </NeoBrutalismText>

                <NeoBrutalismText variant="accent" color="accent" style={styles.typographyExample}>
                    Accent Text
                </NeoBrutalismText>

                <NeoBrutalismText variant="caption" color="muted" style={styles.description}>
                    Bold typography with strong hierarchy and letter spacing
                </NeoBrutalismText>
            </NeoBrutalismCard>

            {/* Inputs Section */}
            <NeoBrutalismCard variant="default" style={styles.section}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                    Inputs
                </NeoBrutalismText>

                <NeoBrutalismInput
                    label="Default Input"
                    placeholder="Enter text here..."
                    value={inputValue}
                    onChangeText={setInputValue}
                    variant="default"
                />

                <NeoBrutalismInput
                    label="Accent Input"
                    placeholder="Accent style input"
                    variant="accent"
                />

                <NeoBrutalismInput
                    label="Multiline Input"
                    placeholder="Enter multiple lines..."
                    value={multilineValue}
                    onChangeText={setMultilineValue}
                    multiline
                    numberOfLines={3}
                    variant="default"
                />

                <NeoBrutalismInput
                    label="Disabled Input"
                    placeholder="This is disabled"
                    disabled
                    variant="light"
                />

                <NeoBrutalismText variant="caption" color="muted" style={styles.description}>
                    Input fields with bold borders and focus states
                </NeoBrutalismText>
            </NeoBrutalismCard>

            {/* Color Palette Section */}
            <NeoBrutalismCard variant="default" style={styles.section}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                    Color Palette
                </NeoBrutalismText>

                <View style={styles.colorGrid}>
                    <View style={[styles.colorSwatch, { backgroundColor: NeoBrutalismColors.primary.black }]}>
                        <NeoBrutalismText variant="caption" color="inverse">Black</NeoBrutalismText>
                    </View>
                    <View style={[styles.colorSwatch, { backgroundColor: NeoBrutalismColors.primary.red }]}>
                        <NeoBrutalismText variant="caption" color="inverse">Red</NeoBrutalismText>
                    </View>
                    <View style={[styles.colorSwatch, { backgroundColor: NeoBrutalismColors.primary.blue }]}>
                        <NeoBrutalismText variant="caption" color="inverse">Blue</NeoBrutalismText>
                    </View>
                    <View style={[styles.colorSwatch, { backgroundColor: NeoBrutalismColors.primary.green }]}>
                        <NeoBrutalismText variant="caption" color="primary">Green</NeoBrutalismText>
                    </View>
                    <View style={[styles.colorSwatch, { backgroundColor: NeoBrutalismColors.accent.neonYellow }]}>
                        <NeoBrutalismText variant="caption" color="primary">Yellow</NeoBrutalismText>
                    </View>
                    <View style={[styles.colorSwatch, { backgroundColor: NeoBrutalismColors.accent.neonPink }]}>
                        <NeoBrutalismText variant="caption" color="inverse">Pink</NeoBrutalismText>
                    </View>
                </View>

                <NeoBrutalismText variant="caption" color="muted" style={styles.description}>
                    High-contrast color palette for bold visual impact
                </NeoBrutalismText>
            </NeoBrutalismCard>

            {/* Features Section */}
            <NeoBrutalismCard variant="accent" style={styles.section}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                    Neo-Brutalism Features
                </NeoBrutalismText>

                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • Bold, attention-grabbing typography
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • High-contrast color schemes
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • Thick, solid borders
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • Solid, unblurred shadows
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • Geometric shapes and asymmetry
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • Raw, unpolished aesthetics
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.featureItem}>
                    • Minimal gradients and effects
                </NeoBrutalismText>
            </NeoBrutalismCard>

            {/* Current Theme Status */}
            <NeoBrutalismCard variant="dark" style={styles.section}>
                <NeoBrutalismText variant="subheading" color="inverse" uppercase style={styles.sectionTitle}>
                    Current Theme
                </NeoBrutalismText>

                <NeoBrutalismText variant="body" color="inverse" style={styles.statusText}>
                    Theme Mode: {themeMode}
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" color="inverse" style={styles.statusText}>
                    Neo-Brutalism Active: {isNeoBrutalism ? 'Yes' : 'No'}
                </NeoBrutalismText>

                <NeoBrutalismText variant="caption" color="muted" style={styles.description}>
                    Switch to Neo-Brutalism theme in the theme selector to see full effect
                </NeoBrutalismText>
            </NeoBrutalismCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: NeoBrutalismSpacing.base,
    },
    header: {
        marginBottom: NeoBrutalismSpacing.xl,
        alignItems: 'center',
    },
    section: {
        marginBottom: NeoBrutalismSpacing.lg,
    },
    sectionTitle: {
        marginBottom: NeoBrutalismSpacing.lg,
    },
    description: {
        marginTop: NeoBrutalismSpacing.base,
        fontStyle: 'italic',
    },
    buttonRow: {
        flexDirection: 'row',
        gap: NeoBrutalismSpacing.base,
        marginBottom: NeoBrutalismSpacing.base,
        flexWrap: 'wrap',
    },
    cardRow: {
        flexDirection: 'row',
        gap: NeoBrutalismSpacing.base,
        marginBottom: NeoBrutalismSpacing.base,
    },
    smallCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 60,
    },
    typographyExample: {
        marginBottom: NeoBrutalismSpacing.sm,
    },
    colorGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: NeoBrutalismSpacing.sm,
        marginBottom: NeoBrutalismSpacing.base,
    },
    colorSwatch: {
        width: 80,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: NeoBrutalismColors.border.primary,
    },
    featureItem: {
        marginBottom: NeoBrutalismSpacing.sm,
    },
    statusText: {
        marginBottom: NeoBrutalismSpacing.sm,
    },
});
