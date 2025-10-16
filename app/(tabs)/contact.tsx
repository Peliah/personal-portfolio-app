import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ContactForm, SocialMediaSection } from '@/components/contact';
import { NeoBrutalismText } from '@/components/neo-brutalism';
import { ThemeSelector } from '@/components/ThemeSelector';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ContactScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <NeoBrutalismText variant="heading" uppercase>
                        Get In Touch
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="subheading" color="secondary">
                        Let&apos;s collaborate and build something amazing together
                    </NeoBrutalismText>

                    <View style={styles.themeControls}>
                        <ThemeToggleButton />
                        <ThemeSelector />
                    </View>
                </View>

                <SocialMediaSection />
                <ContactForm />

                <View style={styles.footer}>
                    <NeoBrutalismText variant="caption" color="muted" style={styles.footerText}>
                        Let&apos;s create something extraordinary together!
                    </NeoBrutalismText>
                </View>
            </ScrollView>
        </SafeAreaView>
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
