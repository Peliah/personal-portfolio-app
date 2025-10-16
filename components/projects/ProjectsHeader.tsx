import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NeoBrutalismText } from '@/components/neo-brutalism';

export function ProjectsHeader() {
    return (
        <View style={styles.header}>
            <NeoBrutalismText variant="heading" uppercase style={styles.title}>
                Here are some of my creations
            </NeoBrutalismText>
            <NeoBrutalismText variant="subheading" color="secondary" style={styles.subtitle}>
                Showcasing my latest projects and creations
            </NeoBrutalismText>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
        // alignItems: 'center',
    },
    title: {
        marginBottom: 8,
        // textAlign: 'center',
    },
    subtitle: {
        marginBottom: 16,
        // textAlign: 'center',
    },
    themeControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});
