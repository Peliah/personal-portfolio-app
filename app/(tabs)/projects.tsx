import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ProjectCard, ProjectsHeader } from '@/components/projects';
import { projects } from '@/data/projectData';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProjectsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <ProjectsHeader />

                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 100,
    },
});