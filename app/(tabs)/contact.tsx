import React from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import {
    NeoBrutalismButton,
    NeoBrutalismCard,
    NeoBrutalismInput,
    NeoBrutalismText
} from '@/components/neo-brutalism';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemeSelector } from '@/components/ThemeSelector';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { useNeoBrutalismColor } from '@/hooks/use-neo-brutalism-color';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    // Get theme-aware colors for the header
    const lightHeaderColor = useNeoBrutalismColor({}, 'background.secondary');
    const darkHeaderColor = useNeoBrutalismColor({}, 'background.primary');

    const handleSendMessage = () => {
        console.log('Sending message:', { name, email, message });
        // Here you would typically send the message to your backend
        alert('Message sent! (This is a demo)');
    };

    const openLink = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: lightHeaderColor, dark: darkHeaderColor }}
            headerImage={
                <View style={styles.headerPlaceholder}>
                    <NeoBrutalismText variant="heading" uppercase style={styles.headerText}>
                        Contact
                    </NeoBrutalismText>
                </View>
            }>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <NeoBrutalismText variant="heading" uppercase>
                        Get In Touch
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="subheading" color="secondary">
                        Let's collaborate and build something amazing together
                    </NeoBrutalismText>

                    <View style={styles.themeControls}>
                        <ThemeToggleButton />
                        <ThemeSelector />
                    </View>
                </View>

                {/* Contact Form */}
                <NeoBrutalismCard variant="default" style={styles.formCard}>
                    <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                        Send Message
                    </NeoBrutalismText>

                    <NeoBrutalismInput
                        label="Name"
                        placeholder="Your full name"
                        value={name}
                        onChangeText={setName}
                        variant="default"
                    />

                    <NeoBrutalismInput
                        label="Email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChangeText={setEmail}
                        variant="default"
                    />

                    <NeoBrutalismInput
                        label="Message"
                        placeholder="Tell me about your project..."
                        value={message}
                        onChangeText={setMessage}
                        variant="default"
                        multiline
                        numberOfLines={4}
                    />

                    <NeoBrutalismButton
                        title="Send Message"
                        variant="primary"
                        size="lg"
                        fullWidth
                        onPress={handleSendMessage}
                    />
                </NeoBrutalismCard>

                {/* Contact Methods */}
                <NeoBrutalismCard variant="accent" style={styles.contactCard}>
                    <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                        Contact Methods
                    </NeoBrutalismText>

                    <View style={styles.contactMethods}>
                        <NeoBrutalismButton
                            title="Email"
                            variant="secondary"
                            size="base"
                            onPress={() => openLink('mailto:contact@example.com')}
                        />
                        <NeoBrutalismButton
                            title="LinkedIn"
                            variant="secondary"
                            size="base"
                            onPress={() => openLink('https://linkedin.com/in/yourprofile')}
                        />
                        <NeoBrutalismButton
                            title="GitHub"
                            variant="secondary"
                            size="base"
                            onPress={() => openLink('https://github.com/yourusername')}
                        />
                    </View>
                </NeoBrutalismCard>

                {/* Social Links */}
                <NeoBrutalismCard variant="dark" style={styles.socialCard}>
                    <NeoBrutalismText variant="subheading" color="inverse" uppercase style={styles.sectionTitle}>
                        Follow Me
                    </NeoBrutalismText>

                    <View style={styles.socialLinks}>
                        <View style={styles.socialItem}>
                            <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
                            <NeoBrutalismText variant="body" color="inverse">@yourusername</NeoBrutalismText>
                        </View>
                        <View style={styles.socialItem}>
                            <Ionicons name="logo-instagram" size={24} color="#E4405F" />
                            <NeoBrutalismText variant="body" color="inverse">@yourusername</NeoBrutalismText>
                        </View>
                        <View style={styles.socialItem}>
                            <Ionicons name="logo-dribbble" size={24} color="#EA4C89" />
                            <NeoBrutalismText variant="body" color="inverse">@yourusername</NeoBrutalismText>
                        </View>
                    </View>
                </NeoBrutalismCard>

                {/* Availability */}
                <NeoBrutalismCard variant="light" style={styles.availabilityCard}>
                    <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                        Availability
                    </NeoBrutalismText>

                    <NeoBrutalismText variant="body" style={styles.availabilityText}>
                        Currently available for freelance projects and full-time opportunities.
                        I'm always excited to work on new challenges and innovative projects.
                    </NeoBrutalismText>

                    <View style={styles.availabilityActions}>
                        <NeoBrutalismButton
                            title="Schedule Call"
                            variant="success"
                            size="base"
                            onPress={() => openLink('https://calendly.com/yourusername')}
                        />
                        <NeoBrutalismButton
                            title="Download CV"
                            variant="primary"
                            size="base"
                            onPress={() => console.log('Download CV')}
                        />
                    </View>
                </NeoBrutalismCard>

                <View style={styles.footer}>
                    <NeoBrutalismText variant="caption" color="muted" style={styles.footerText}>
                        Let's create something extraordinary together!
                    </NeoBrutalismText>
                </View>
            </ScrollView>
        </ParallaxScrollView>
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
    formCard: {
        marginBottom: 20,
    },
    contactCard: {
        marginBottom: 20,
    },
    socialCard: {
        marginBottom: 20,
    },
    availabilityCard: {
        marginBottom: 20,
    },
    sectionTitle: {
        marginBottom: 20,
    },
    contactMethods: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    socialLinks: {
        gap: 16,
    },
    socialItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    availabilityText: {
        marginBottom: 20,
        lineHeight: 24,
    },
    availabilityActions: {
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
        textAlign: 'center',
    },
});
