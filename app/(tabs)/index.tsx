import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  NeoBrutalismButton,
  NeoBrutalismCard,
  NeoBrutalismText
} from '@/components/neo-brutalism';
import { ThemeSelector } from '@/components/ThemeSelector';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <NeoBrutalismText variant="heading" uppercase>
          Welcome
        </NeoBrutalismText>
        <NeoBrutalismText variant="subheading" color="secondary">
          I&apos;m a passionate developer creating amazing mobile experiences
        </NeoBrutalismText>

        <View style={styles.themeControls}>
          <ThemeToggleButton />
          <ThemeSelector />
        </View>
      </View>

      {/* About Section */}
      <NeoBrutalismCard variant="default" style={styles.sectionCard}>
        <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
          About Me
        </NeoBrutalismText>
        <NeoBrutalismText variant="body" style={styles.sectionText}>
          I&apos;m a full-stack developer with expertise in React Native, mobile app development,
          and modern web technologies. I love creating user-friendly applications that
          solve real-world problems.
        </NeoBrutalismText>
        <View style={styles.sectionActions}>
          <NeoBrutalismButton
            title="View Projects"
            variant="primary"
            size="base"
            onPress={() => console.log('View projects')}
          />
          <NeoBrutalismButton
            title="Get In Touch"
            variant="accent"
            size="base"
            onPress={() => console.log('Contact')}
          />
        </View>
      </NeoBrutalismCard>

      {/* Skills Section */}
      <NeoBrutalismCard variant="accent" style={styles.sectionCard}>
        <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
          Skills
        </NeoBrutalismText>
        <View style={styles.skillsGrid}>
          <View style={styles.skillItem}>
            <NeoBrutalismText variant="body" color="primary">React Native</NeoBrutalismText>
          </View>
          <View style={styles.skillItem}>
            <NeoBrutalismText variant="body" color="primary">TypeScript</NeoBrutalismText>
          </View>
          <View style={styles.skillItem}>
            <NeoBrutalismText variant="body" color="primary">Node.js</NeoBrutalismText>
          </View>
          <View style={styles.skillItem}>
            <NeoBrutalismText variant="body" color="primary">Expo</NeoBrutalismText>
          </View>
          <View style={styles.skillItem}>
            <NeoBrutalismText variant="body" color="primary">UI/UX Design</NeoBrutalismText>
          </View>
          <View style={styles.skillItem}>
            <NeoBrutalismText variant="body" color="primary">Mobile Development</NeoBrutalismText>
          </View>
        </View>
      </NeoBrutalismCard>

      {/* Experience Section */}
      <NeoBrutalismCard variant="dark" style={styles.sectionCard}>
        <NeoBrutalismText variant="subheading" color="inverse" uppercase style={styles.sectionTitle}>
          Experience
        </NeoBrutalismText>
        <NeoBrutalismText variant="body" color="inverse" style={styles.sectionText}>
          With over 3 years of experience in mobile development, I&apos;ve worked on various
          projects ranging from startup MVPs to enterprise applications. I specialize
          in creating scalable, maintainable code.
        </NeoBrutalismText>
        <View style={styles.sectionActions}>
          <NeoBrutalismButton
            title="Download CV"
            variant="primary"
            size="base"
            onPress={() => console.log('Download CV')}
          />
          <NeoBrutalismButton
            title="LinkedIn"
            variant="success"
            size="base"
            onPress={() => console.log('LinkedIn')}
          />
        </View>
      </NeoBrutalismCard>

      {/* Call to Action */}
      <NeoBrutalismCard variant="light" style={styles.ctaCard}>
        <NeoBrutalismText variant="subheading" uppercase style={styles.sectionTitle}>
          Ready to Work Together?
        </NeoBrutalismText>
        <NeoBrutalismText variant="body" style={styles.sectionText}>
          Let&apos;s discuss your next project and bring your ideas to life with cutting-edge
          mobile technology and beautiful design.
        </NeoBrutalismText>
        <NeoBrutalismButton
          title="Start a Project"
          variant="danger"
          size="lg"
          fullWidth
          onPress={() => console.log('Start project')}
        />
      </NeoBrutalismCard>

      <View style={styles.footer}>
        <NeoBrutalismText variant="caption" color="muted" style={styles.footerText}>
          Built with React Native & Neo-Brutalism Design
        </NeoBrutalismText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  themeControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
  },
  sectionCard: {
    marginBottom: 20,
  },
  ctaCard: {
    marginBottom: 20,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  sectionText: {
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionActions: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  skillItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
  },
  headerPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  footerText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
