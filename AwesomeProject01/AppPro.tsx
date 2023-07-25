import React from 'react';

import {SafeAreaView, StyleSheet, Text, View, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    // <View
    //   style={[
    //     styles.container,
    //     {
    //       // Try setting `flexDirection` to `"row"`.
    //       flexDirection: 'column',
    //     },
    //   ]}>
    //   <View style={{flex: 1, backgroundColor: 'red'}} />
    //   <View style={{flex: 2, backgroundColor: 'darkorange'}} />
    //   <View style={{flex: 3, backgroundColor: 'green'}} />
    // </View>
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{}}>
        <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "green",
        padding: 20,
        // margin: 10,
        // // flex: 1,
        alignItems: 'center'
    },
    whiteText: {
        backgroundColor: "black",
        color: '#FFFFFF'
    },
    darkText: {
        backgroundColor: "white",
        color: '#000000'
    }
})

export default AppPro;
