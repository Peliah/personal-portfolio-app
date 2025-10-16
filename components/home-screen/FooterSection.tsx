import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NeoBrutalismText } from '@/components/neo-brutalism';

export function FooterSection() {
  return (
    <View style={styles.footer}>
      <NeoBrutalismText variant="caption" color="muted" style={styles.footerText}>
        Built with React Native by &copy;Dushane
      </NeoBrutalismText>
    </View>
  );
}

const styles = StyleSheet.create({
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
