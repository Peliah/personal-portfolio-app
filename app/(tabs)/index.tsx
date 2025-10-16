import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import {
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

      {/* Intro Section */}
      <NeoBrutalismCard variant="default" style={styles.introCard}>
        <NeoBrutalismText variant="body" style={styles.introText}>
          Hi hi!! I&apos;m Peliah. By day I&apos;m a Software Developer, by nature I&apos;m a creative soul.
          Welcome to my little corner of your phone.
        </NeoBrutalismText>
      </NeoBrutalismCard>

      {/* Quote Section */}
      <NeoBrutalismCard variant="dark" style={styles.quoteCard}>
        <NeoBrutalismText variant="body" color="inverse" style={styles.quoteText}>
          &ldquo;Act as if it were impossible to fail, For in the realm of endless possibilities lies the path to greatness.&rdquo;
        </NeoBrutalismText>
        <NeoBrutalismText variant="caption" color="inverse" style={styles.quoteAuthor}>
          — Unknown
        </NeoBrutalismText>
      </NeoBrutalismCard>


      <View style={styles.footer}>
        <NeoBrutalismText variant="caption" color="muted" style={styles.footerText}>
          Built with React Native by &copy;Peliah
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
  introCard: {
    marginBottom: 24,
    padding: 20,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
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
