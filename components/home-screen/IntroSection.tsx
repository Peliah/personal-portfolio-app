import React from 'react';
import { StyleSheet } from 'react-native';

import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';

export function IntroSection() {
    return (
        <NeoBrutalismCard variant="default" style={styles.introCard}>
            <NeoBrutalismText variant="body" style={styles.introText}>
                Hi hi!! I&apos;m Peliah. By day I&apos;m a Software Developer, by nature I&apos;m a creative soul.
                Welcome to my little corner of your phone.
            </NeoBrutalismText>
        </NeoBrutalismCard>
    );
}

const styles = StyleSheet.create({
    introCard: {
        marginBottom: 24,
        padding: 20,
    },
    introText: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
    },
});
