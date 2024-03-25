import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_700Bold, Inter_300Light } from '@expo-google-fonts/inter';
import { useState } from 'react';

const TimeInfo = ({ label, value }) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  )
}


export default function App() {

  const [seeMore, setSeeMore] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  let [fontsLoaded] = useFonts({
    'Inter-Black': Inter_900Black,
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
    'Inter-Light': Inter_300Light
  });

  if (!fontsLoaded) {
    return (<ActivityIndicator />)
  }

  return (
    <ImageBackground
      source={lightMode ? require('./assets/light-bg.png') : require('./assets/bg1.png')}
      style={{ flex: 1 }}>
      {/* Parent */}
      <View style={styles.parent}>

        {/* UpperView */}
        {
          !seeMore && (
            <View style={styles.upperView}>
              <View>
                <Text style={{ fontFamily: 'Inter-Regular', color: '#fff', fontSize: 12, lineHeight: 22 }}>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</Text>
                <Text style={{ fontFamily: 'Inter-Bold', color: '#fff', fontSize: 12, lineHeight: 22 }}>Ada Lovelace</Text>
              </View>

              <View>
                <Image source={require('./assets/refresh.png')}></Image>
              </View>
            </View>
          )}

        {/* LowerView */}
        <View style={styles.LowerView}>

          {/* greetings */}
          <View style={styles.greeting}>
            <TouchableOpacity onPress={() => setLightMode(!lightMode)}>
              <Image
                source={lightMode ? require('./assets/sun.png') : require('./assets/Path.png')}
                style={styles.greetingImage}>
              </Image>
            </TouchableOpacity>

            <Text style={styles.greetingsText}>Good Evening</Text>
          </View>

          {/* Time */}
          <View style={styles.time}>
            <Text>
              <Text style={styles.timeBig}>23:14</Text>
              <Text style={styles.timeSmall}>BST</Text>
            </Text>
          </View>

          {/* Location */}
          <View>
            <Text style={styles.location}>In London, uk</Text>
          </View>

          {/* Button */}
          <View>
            <TouchableOpacity onPress={() => setSeeMore(!seeMore)} style={styles.button}>
              <Text style={styles.buttonText}>
                {!seeMore ? 'More' : 'Less'}
              </Text>
              <Image
                source={seeMore ? require('./assets/Group 3(1).png') : require('./assets/Group 3.png')}>
              </Image>
            </TouchableOpacity>
          </View>

        </View>

      </View>
      {/* Expanded view */}
      {
        seeMore && (
          <View style={styles.expandedView}>
            <TimeInfo label={'current timezone'} value={'Europe/London'}></TimeInfo>
            <TimeInfo label={'day of the year'} value={'295'}></TimeInfo>
            <TimeInfo label={'day of the week'} value={'5'}></TimeInfo>
            <TimeInfo label={'week number'} value={'42'}></TimeInfo>
          </View>
        )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parent: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 26
  },
  upperView: {
    flexDirection: 'row'
  },
  LowerView: {
    marginTop: 100
  },
  // Greetings
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16
  },
  greetingImage: {
    width: 22,
    height: 24,
    marginTop: 1
  },
  greetingsText: {
    color: '#fff',
    fontFamily: 'Inter-Regular',
    letterSpacing: 3,
    lineHeight: 25
  },
  // Time
  time: {
    marginTop: 16
  },
  timeBig: {
    fontFamily: 'Inter-Bold',
    fontSize: 100,
    letterSpacing: -2.5,
    lineHeight: 100,
    color: '#fff'
  },
  timeSmall: {
    fontFamily: 'Inter-Light',
    fontSize: 15,
    color: '#fff'
  },
  // Location
  location: {
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: 3,
    fontSize: 15,
    fontFamily: 'Inter-Bold'
  },
  // Button
  button: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    width: 115,
    height: 39,
    borderRadius: 20,
    justifyContent: 'space-around',
    marginVertical: 48
  },
  buttonText: {
    paddingLeft: 10,
    textTransform: 'uppercase',
    fontFamily: 'Inter-Bold',
    letterSpacing: 3,
    fontSize: 12,
    color: 'rgba(0, 0, 0, .5)'
  },
  // ExpandedView
  expandedView: {
    paddingHorizontal: 26,
    paddingVertical: 48,
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  infoRow: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoLabel: {
    fontFamily: 'Inter-Regular',
    color: '#fff',
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  infoValue: {
    fontFamily: 'Inter-Bold',
    color: '#fff',
    fontSize: 20
  }

});
