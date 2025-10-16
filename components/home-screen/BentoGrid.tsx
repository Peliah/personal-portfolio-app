import React from 'react';
import { Alert, Linking, StyleSheet, TouchableOpacity, View } from 'react-native';

import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';

export function BentoGrid() {
    const handleCallPress = async () => {
        const phoneNumber = '+237650810984';
        const phoneUrl = `tel:${phoneNumber}`;

        try {
            const canOpen = await Linking.canOpenURL(phoneUrl);
            if (canOpen) {
                await Linking.openURL(phoneUrl);
            } else {
                Alert.alert(
                    'Cannot Make Call',
                    'Your device cannot make phone calls or the phone app is not available.',
                    [{ text: 'OK' }]
                );
            }
        } catch (error) {
            console.error('Error opening phone dialer:', error);
            Alert.alert(
                'Error',
                'Unable to open phone dialer. Please try again.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <View style={styles.bentoGrid}>
            <NeoBrutalismCard variant="accent" style={styles.bentoCardFull}>
                <NeoBrutalismText variant="subheading" color="primary" uppercase style={styles.bentoTitle}>
                    What They Say About Me
                </NeoBrutalismText>
                <NeoBrutalismText variant="body" color="primary" style={styles.bentoText}>
                    &ldquo;Dushane brings creativity and technical excellence to every project. A true professional!&rdquo;
                </NeoBrutalismText>
                <NeoBrutalismText variant="caption" color="primary" style={styles.bentoSubtext}>
                    — Client Testimonial
                </NeoBrutalismText>
            </NeoBrutalismCard>

            <View style={styles.bentoRow}>
                <NeoBrutalismCard variant="light" style={styles.bentoCardWide}>
                    <NeoBrutalismText variant="subheading" uppercase style={styles.bentoTitle}>
                        Satisfied Clients
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="heading" style={styles.bentoNumber}>
                        50+
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="secondary" style={styles.bentoSubtext}>
                        Projects Completed
                    </NeoBrutalismText>
                </NeoBrutalismCard>

                <NeoBrutalismCard variant="dark" style={styles.bentoCardNarrow}>
                    <TouchableOpacity onPress={handleCallPress}>
                        <NeoBrutalismText variant="subheading" color="inverse" uppercase style={styles.bentoTitle}>
                            Let&apos;s Talk
                        </NeoBrutalismText>
                        <NeoBrutalismText variant="body" color="inverse" style={styles.bentoText}>
                            Ready to start your project?
                        </NeoBrutalismText>
                    </TouchableOpacity>
                </NeoBrutalismCard>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bentoGrid: {
        marginBottom: 24,
        gap: 4,
    },
    bentoRow: {
        flexDirection: 'row',
        gap: 4,
    },
    bentoCardFull: {
        padding: 20,
    },
    bentoCardWide: {
        flex: 0.7,
        padding: 20,
    },
    bentoCardNarrow: {
        flex: 0.4,
        padding: 20,
    },
    bentoTitle: {
        marginBottom: 12,
        fontSize: 14,
    },
    bentoText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 8,
    },
    bentoNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    bentoSubtext: {
        fontSize: 12,
        fontStyle: 'italic',
    },
});
