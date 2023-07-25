import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Card 4</Text>
        </View>
      </View>
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
        flex: 1,
        flexDirection: 'row',
        padding: 8
    },
    card: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '21%',
        height: 100,
        margin: 8,
        borderRadius: 4,
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    }
})