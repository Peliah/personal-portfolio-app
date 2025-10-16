import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ProjectCard, ProjectsHeader } from '@/components/projects';
import { projects } from '@/data/projectData';

export default function ProjectsScreen() {
    return (
        <ScrollView style={styles.container}>
            <ProjectsHeader />

            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});