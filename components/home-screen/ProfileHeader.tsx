import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { NeoBrutalismText } from '@/components/neo-brutalism';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export function ProfileHeader() {
    return (
        <>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=P' }}
                    style={styles.profileImage}
                />
            </View>

            <View style={styles.nameContainer}>
                <View style={styles.nameSection}>
                    <NeoBrutalismText variant="heading" uppercase style={styles.name}>
                        Peliah
                    </NeoBrutalismText>
                    <View style={styles.statusDot} />
                </View>
                <ThemeToggleButton />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    profileImage: {
        width: '100%',
        height: 400,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: '#424242',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32,
        paddingHorizontal: 8,
    },
    nameSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    statusDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4CAF50',
        shadowColor: '#4CAF50',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 8,
    },
});
