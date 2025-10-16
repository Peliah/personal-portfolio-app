import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import {
  NeoBrutalismButton,
  NeoBrutalismCard,
  NeoBrutalismText
} from '@/components/neo-brutalism';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: '100%',
    height: 200,
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
