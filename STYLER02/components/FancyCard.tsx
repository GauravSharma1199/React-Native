import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Place</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  card: {
    width: 365,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 14
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2
    }
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
  },
  cardDescription: {
    color: '#000000',
    fontSize: 13,
    marginBottom: 6
  },
  cardFooter: {
    color: '#000000',
    fontSize: 13
  },
});