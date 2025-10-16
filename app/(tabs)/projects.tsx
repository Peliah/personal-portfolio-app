import { ScrollView, StyleSheet, View } from 'react-native';

import {
    NeoBrutalismButton,
    NeoBrutalismCard,
    NeoBrutalismText
} from '@/components/neo-brutalism';
import { ThemeSelector } from '@/components/ThemeSelector';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function ProjectsScreen() {
    // Get theme-aware colors for the header

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <NeoBrutalismText variant="heading" uppercase>
                    My Work
                </NeoBrutalismText>
                <NeoBrutalismText variant="subheading" color="secondary">
                    Showcasing my latest projects and creations
                </NeoBrutalismText>

                <View style={styles.themeControls}>
                    <ThemeToggleButton />
                    <ThemeSelector />
                </View>
            </View>

            {/* Project Cards */}
            <NeoBrutalismCard variant="default" style={styles.projectCard}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.projectTitle}>
                    Mobile Portfolio App
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.projectDescription}>
                    A React Native portfolio app built with Expo, featuring neo-brutalism design,
                    theme switching, and modern mobile development practices.
                </NeoBrutalismText>
                <View style={styles.projectTech}>
                    <NeoBrutalismText variant="caption" color="accent">React Native</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="accent">Expo</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="accent">TypeScript</NeoBrutalismText>
                </View>
                <View style={styles.projectActions}>
                    <NeoBrutalismButton
                        title="View Code"
                        variant="primary"
                        size="sm"
                        onPress={() => console.log('View code pressed')}
                    />
                    <NeoBrutalismButton
                        title="Live Demo"
                        variant="accent"
                        size="sm"
                        onPress={() => console.log('Live demo pressed')}
                    />
                </View>
            </NeoBrutalismCard>

            <NeoBrutalismCard variant="accent" style={styles.projectCard}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.projectTitle}>
                    E-Commerce Platform
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.projectDescription}>
                    A full-stack e-commerce solution with modern UI, payment integration,
                    and real-time inventory management.
                </NeoBrutalismText>
                <View style={styles.projectTech}>
                    <NeoBrutalismText variant="caption" color="primary">React</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="primary">Node.js</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="primary">MongoDB</NeoBrutalismText>
                </View>
                <View style={styles.projectActions}>
                    <NeoBrutalismButton
                        title="View Code"
                        variant="secondary"
                        size="sm"
                        onPress={() => console.log('View code pressed')}
                    />
                    <NeoBrutalismButton
                        title="Live Demo"
                        variant="danger"
                        size="sm"
                        onPress={() => console.log('Live demo pressed')}
                    />
                </View>
            </NeoBrutalismCard>

            <NeoBrutalismCard variant="dark" style={styles.projectCard}>
                <NeoBrutalismText variant="subheading" color="inverse" uppercase style={styles.projectTitle}>
                    AI Chat Application
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" color="inverse" style={styles.projectDescription}>
                    An intelligent chat application powered by AI, featuring natural language
                    processing and real-time messaging capabilities.
                </NeoBrutalismText>
                <View style={styles.projectTech}>
                    <NeoBrutalismText variant="caption" color="inverse">Python</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="inverse">OpenAI API</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="inverse">WebSocket</NeoBrutalismText>
                </View>
                <View style={styles.projectActions}>
                    <NeoBrutalismButton
                        title="View Code"
                        variant="primary"
                        size="sm"
                        onPress={() => console.log('View code pressed')}
                    />
                    <NeoBrutalismButton
                        title="Live Demo"
                        variant="success"
                        size="sm"
                        onPress={() => console.log('Live demo pressed')}
                    />
                </View>
            </NeoBrutalismCard>

            <NeoBrutalismCard variant="light" style={styles.projectCard}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.projectTitle}>
                    Weather Dashboard
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" style={styles.projectDescription}>
                    A responsive weather dashboard with location-based forecasts,
                    interactive maps, and detailed meteorological data visualization.
                </NeoBrutalismText>
                <View style={styles.projectTech}>
                    <NeoBrutalismText variant="caption" color="accent">Vue.js</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="accent">D3.js</NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="accent">Weather API</NeoBrutalismText>
                </View>
                <View style={styles.projectActions}>
                    <NeoBrutalismButton
                        title="View Code"
                        variant="primary"
                        size="sm"
                        onPress={() => console.log('View code pressed')}
                    />
                    <NeoBrutalismButton
                        title="Live Demo"
                        variant="accent"
                        size="sm"
                        onPress={() => console.log('Live demo pressed')}
                    />
                </View>
            </NeoBrutalismCard>

            <View style={styles.footer}>
                <NeoBrutalismText variant="caption" color="muted" style={styles.footerText}>
                    More projects coming soon...
                </NeoBrutalismText>
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
        alignItems: 'center',
    },
    themeControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginTop: 16,
    },
    projectCard: {
        marginBottom: 20,
    },
    projectTitle: {
        marginBottom: 12,
    },
    projectDescription: {
        marginBottom: 16,
        lineHeight: 24,
    },
    projectTech: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
    },
    projectActions: {
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
    },
    headerPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 48,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    footerText: {
        fontStyle: 'italic',
    },
});
