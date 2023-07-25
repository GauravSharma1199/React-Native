import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the
            client side for webpage behavior,[10] often incorporating
            third-party libraries. All major web browsers have a dedicated
            JavaScript engine to execute the code on users' devices.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://medharva.com/')}
            
            >
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://medharva.com/')}
          
            >
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    marginHorizontal: 8,
    fontWeight: 'bold'
  },
  card: {
    width: 365,
    height: 360,
    borderRadius: 6, 
    marginVertical: 12,
    marginHorizontal: 14
  },
  elevatedCard: {
    backgroundColor: '#758283',
    borderRadius: 10,
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowColor: '#333',
    shadowOpacity: 0.4
  },
  headingContainer: {
    height: 40,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700'
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    margin: 8,
  },
  bodyText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '400'
  },
  footerContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10
  },
  socialLinks: {
    fontSize: 16,
    color: '#19234D',
    backgroundColor: '#E0E4F5',
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontWeight: '600',
    borderRadius: 6,
    shadowColor: '#333',
    shadowOpacity: 0.8,
    elevation: 5,
    shadowOffset: {
        width: 2,
        height: 2
    }
  }
});
