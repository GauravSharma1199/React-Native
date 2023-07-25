import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Gaurav Sharma',
          status: 'Just an extra ordinary developer',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text style={styles.headerText}>Contact List</Text>
      <View style={styles.parentContainer}>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.card}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headerText: {
        marginHorizontal: 8,
        fontSize: 20,
        fontWeight: 'bold'
    },
    parentContainer: {
        
    },
    container:{
        marginVertical: 12,
        marginHorizontal: 8
    },
    card: {
       flex: 1,
       flexDirection: 'row' ,
       alignItems: 'center',
       backgroundColor: '#383CC1',
       marginBottom: 4,
       padding: 10,
       borderRadius: 10
      
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 14
    },
    userName:{
        fontSize: 17,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus:{
        fontSize: 13
    },
})