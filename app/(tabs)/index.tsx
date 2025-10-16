import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  BentoGrid,
  FooterSection,
  IntroSection,
  ProfileHeader,
  QuoteSection
} from '@/components/home-screen';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <IntroSection />
      <BentoGrid />
      <QuoteSection />
      <FooterSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
