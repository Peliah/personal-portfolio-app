import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  BentoGrid,
  FooterSection,
  IntroSection,
  ProfileHeader,
  QuoteSection
} from '@/components/home-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <ProfileHeader />
        <IntroSection />
        <BentoGrid />
        <QuoteSection />
        <FooterSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 100, // Add padding for floating tab bar
  },
});
