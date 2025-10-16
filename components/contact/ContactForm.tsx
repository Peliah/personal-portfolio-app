import React, { useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import { NeoBrutalismButton, NeoBrutalismCard, NeoBrutalismInput, NeoBrutalismText } from '@/components/neo-brutalism';

export function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        console.log('Sending message:', { name, email, message });
        // Here you would typically send the message to your backend
        alert('Message sent! (This is a demo)');

        // Clear form
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleScheduleCall = async () => {
        const calendlyUrl = 'https://calendly.com/peliah';
        try {
            const canOpen = await Linking.canOpenURL(calendlyUrl);
            if (canOpen) {
                await Linking.openURL(calendlyUrl);
            }
        } catch (error) {
            console.error('Error opening Calendly:', error);
        }
    };

    return (
        <View style={styles.container}>
            <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                Get In Touch
            </NeoBrutalismText>

            <NeoBrutalismCard variant="default" style={styles.formCard}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.formTitle}>
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

            <NeoBrutalismCard variant="accent" style={styles.scheduleCard}>
                <NeoBrutalismText variant="subheading" uppercase style={styles.scheduleTitle}>
                    Schedule A Call
                </NeoBrutalismText>

                <NeoBrutalismText variant="body" style={styles.scheduleDescription}>
                    Ready to discuss your project? Book a call with me to get started!
                </NeoBrutalismText>

                <NeoBrutalismButton
                    title="Schedule Call"
                    variant="success"
                    size="lg"
                    fullWidth
                    onPress={handleScheduleCall}
                />
            </NeoBrutalismCard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    sectionTitle: {
        marginBottom: 16,
        textAlign: 'center',
    },
    formCard: {
        marginBottom: 20,
        padding: 20,
    },
    formTitle: {
        marginBottom: 20,
        textAlign: 'center',
    },
    scheduleCard: {
        padding: 20,
        alignItems: 'center',
    },
    scheduleTitle: {
        marginBottom: 12,
        textAlign: 'center',
    },
    scheduleDescription: {
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 24,
    },
});
