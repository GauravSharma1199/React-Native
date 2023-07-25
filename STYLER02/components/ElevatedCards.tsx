import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more..</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>just more</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8

    },
    cardElevated: {
        // backgroundColor: '#9A9CA2',
        elevation: 4,
        shadowOffset : {
            width: 1,
            height: 1
        },
        shadowColor: 'red',
        shadowOpacity: 0.4,
        shadowRadius: 4
    }
})