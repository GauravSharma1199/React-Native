import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBgColor, setRandomBgColor] = useState('#000000');
  const [square1Color, setSquare1Color] = useState('#ffffff');
  const [square2Color, setSquare2Color] = useState('#ffffff');
  const [square3Color, setSquare3Color] = useState('#ffffff');
  const [square4Color, setSquare4Color] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColorForAll = () => {
    setRandomBgColor(generateColor());
    setSquare1Color(generateColor());
    setSquare2Color(generateColor());
    setSquare3Color(generateColor());
    setSquare4Color(generateColor());
  };
  return (
    <>
      <StatusBar backgroundColor={randomBgColor} />
      <View style={[styles.container, {backgroundColor: randomBgColor}]}>
        <View style={styles.figures}>
          <View
            style={[styles.square1, {backgroundColor: square1Color}]}></View>
          <View
            style={[styles.square2, {backgroundColor: square2Color}]}></View>
          <View
            style={[styles.square3, {backgroundColor: square3Color}]}></View>
          <View
            style={[styles.square4, {backgroundColor: square4Color}]}></View>
        </View>

        <View>
          <TouchableOpacity onPress={() => generateColorForAll()}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press me</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
  actionBtn: {
    // flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A1B4D',
    // width: 100,
    // height: 100,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  actionBtnTxt: {
    fontSize: 24,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  figures: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  square1: {
    width: 100,
    height: 100,
    // backgroundColor: 'white',
  },
  square2: {
    width: 100,
    height: 100,
    // backgroundColor: 'white',
  },
  square3: {
    width: 100,
    height: 100,
    // backgroundColor: 'white',
  },
  square4: {
    width: 100,
    height: 100,
    // backgroundColor: 'white',
  },
});
