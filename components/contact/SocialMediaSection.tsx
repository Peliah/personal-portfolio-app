import React from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';

import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';
import { Ionicons } from '@expo/vector-icons';

export function SocialMediaSection() {
    const handleLinkPress = async (url: string) => {
        try {
            const canOpen = await Linking.canOpenURL(url);
            if (canOpen) {
                await Linking.openURL(url);
            }
        } catch (error) {
            console.error('Error opening link:', error);
        }
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/pelayah-epoupa-12830a198/',
            icon: 'logo-linkedin' as keyof typeof Ionicons.glyphMap,
            color: '#0077B5',
            size: 'large' as const,
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/peliah.dev',
            icon: 'logo-instagram' as keyof typeof Ionicons.glyphMap,
            color: '#E4405F',
            size: 'medium' as const,
        },
        {
            name: 'Twitter',
            url: 'https://x.com/pelayah_epoupa',
            icon: 'logo-twitter' as keyof typeof Ionicons.glyphMap,
            color: '#1DA1F2',
            size: 'small' as const,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Peliah',
            icon: 'logo-github' as keyof typeof Ionicons.glyphMap,
            color: '#333333',
            size: 'large' as const,
        },
        {
            name: 'Email',
            url: 'mailto:pelepoupa@gmail.com',
            icon: 'mail-outline' as keyof typeof Ionicons.glyphMap,
            color: '#EA4335',
            size: 'medium' as const,
        },
        {
            name: 'Upwork',
            url: 'https://upwork.com/freelancers/your-upwork-username',
            icon: 'briefcase-outline' as keyof typeof Ionicons.glyphMap,
            color: '#14A800',
            size: 'small' as const,
        },
    ];

    const getSizeStyles = (size: 'small' | 'medium' | 'large') => {
        switch (size) {
            case 'small':
                return { width: 60, height: 60, iconSize: 24 };
            case 'medium':
                return { width: 80, height: 80, iconSize: 32 };
            case 'large':
                return { width: 100, height: 100, iconSize: 40 };
            default:
                return { width: 80, height: 80, iconSize: 32 };
        }
    };

    return (
        <View style={styles.container}>
            <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
                Connect With Me
            </NeoBrutalismText>

            <View style={styles.scrambleGrid}>
                {socialLinks.map((social, index) => {
                    const { width, height, iconSize } = getSizeStyles(social.size);

                    const cardStyle = {
                        ...styles.socialCard,
                        width,
                        height,
                        ...(index % 3 === 0 ? styles.cardOffset : {}),
                        ...(index % 4 === 1 ? styles.cardRotate : {}),
                    };

                    return (
                        <TouchableOpacity
                            key={social.name}
                            onPress={() => handleLinkPress(social.url)}
                            style={styles.iconContainer}
                        >
                            <NeoBrutalismCard
                                variant="default"
                                style={cardStyle}
                            >
                                <Ionicons
                                    name={social.icon}
                                    size={iconSize}
                                    color={social.color}
                                />
                            </NeoBrutalismCard>
                        </TouchableOpacity>
                    );
                })}
            </View>
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
    scrambleGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 12,
        paddingHorizontal: 8,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialCard: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    cardOffset: {
        marginTop: 20,
    },
    cardRotate: {
        transform: [{ rotate: '5deg' }],
    },
});
