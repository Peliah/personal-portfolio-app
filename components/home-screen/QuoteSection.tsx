import React from 'react';
import { StyleSheet } from 'react-native';

import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';

export function QuoteSection() {
    return (
        <NeoBrutalismCard variant="dark" style={styles.quoteCard}>
            <NeoBrutalismText variant="body" color="inverse" style={styles.quoteText}>
                &ldquo;Act as if it were impossible to fail, For in the realm of endless possibilities lies the path to greatness.&rdquo;
            </NeoBrutalismText>
            <NeoBrutalismText variant="caption" color="inverse" style={styles.quoteAuthor}>
                — Unknown
            </NeoBrutalismText>
        </NeoBrutalismCard>
    );
}

const styles = StyleSheet.create({
    quoteCard: {
        marginBottom: 24,
        padding: 20,
    },
    quoteText: {
        fontSize: 18,
        lineHeight: 28,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 12,
    },
    quoteAuthor: {
        textAlign: 'right',
        fontStyle: 'italic',
        opacity: 0.8,
    },
});
