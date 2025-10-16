import React from 'react';
import { Image, Linking, StyleSheet, View } from 'react-native';

import { NeoBrutalismButton, NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';
import { Project } from '@/types/project';

// Import project images
const projectImages: { [key: string]: any } = {
    'resolve.png': require('@/assets/imgs/resolve.png'),
    'chat-bot.png': require('@/assets/imgs/chat-bot.png'),
    'meet-n-greet-1.png': require('@/assets/imgs/meet-n-greet-1.png'),
    'e-library-237.png': require('@/assets/imgs/e-library-237.png'),
    'collers.png': require('@/assets/imgs/collers.png'),
    'sorting-algorithm.png': require('@/assets/imgs/sorting-algorithm.png'),
    'file-transmorpher.png': require('@/assets/imgs/file-transmorpher.png'),
    'color-guess.png': require('@/assets/imgs/color-guess.png'),
    'lecture_upload.png': require('@/assets/imgs/lecture_upload.png'),
};

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const handleLinkPress = async (url: string) => {
        if (url) {
            try {
                const canOpen = await Linking.canOpenURL(url);
                if (canOpen) {
                    await Linking.openURL(url);
                }
            } catch (error) {
                console.error('Error opening link:', error);
            }
        }
    };

    return (
        <NeoBrutalismCard variant="default" style={styles.projectCard}>
            <View style={styles.imageContainer}>
                <Image
                    source={projectImages[project.image] || { uri: `https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=${project.title}` }}
                    style={styles.projectImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <NeoBrutalismText variant="subheading" uppercase style={styles.projectTitle}>
                        {project.title}
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="caption" color="accent" style={styles.projectTag}>
                        {project.tag}
                    </NeoBrutalismText>
                </View>

                <NeoBrutalismText variant="body" style={styles.projectDescription}>
                    {project.description}
                </NeoBrutalismText>

                <View style={styles.technologiesContainer}>
                    {project.technologies.map((tech, index) => (
                        <View key={index} style={styles.techChip}>
                            <NeoBrutalismText variant="caption" color="primary">
                                {tech}
                            </NeoBrutalismText>
                        </View>
                    ))}
                </View>

                <View style={styles.actionsContainer}>
                    {project.links.github && (
                        <NeoBrutalismButton
                            title="GitHub"
                            variant="secondary"
                            size="sm"
                            onPress={() => handleLinkPress(project.links.github)}
                        />
                    )}
                    {project.links.live && (
                        <NeoBrutalismButton
                            title="Live Demo"
                            variant="accent"
                            size="sm"
                            onPress={() => handleLinkPress(project.links.live)}
                        />
                    )}
                </View>
            </View>
        </NeoBrutalismCard>
    );
}

const styles = StyleSheet.create({
    projectCard: {
        marginBottom: 20,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    projectImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    contentContainer: {
        padding: 4,
    },
    headerContainer: {
        marginBottom: 12,
    },
    projectTitle: {
        marginBottom: 4,
        fontSize: 18,
    },
    projectTag: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    projectDescription: {
        marginBottom: 16,
        lineHeight: 22,
    },
    technologiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 16,
    },
    techChip: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#424242',
    },
    actionsContainer: {
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
    },
});
