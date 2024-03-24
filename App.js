import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Black': Inter_900Black,
    'Inter-Bold': Inter_700Bold
  });

  if (!fontsLoaded) {
    return (<ActivityIndicator />)
  }

  return (
    <ImageBackground source={require('./assets/bg1.png')} style={{ flex: 1 }}>
      {/* Parent */}
      <View style={styles.parent}>

        {/* UpperView */}
        <View style={styles.upperView}>
          <View>
            <Text style={{ fontFamily: 'Inter-Regular', color: '#fff', fontSize: 12, lineHeight: 22 }}>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</Text>
            <Text style={{ fontFamily: 'Inter-Bold', color: '#fff', fontSize: 12, lineHeight: 22 }}>Ada Lovelace</Text>
          </View>

          <View>
            <Image source={require('./assets/refresh.png')}></Image>
          </View>
        </View>

        {/* LowerView */}
        <View style={styles.LowerView}>

          {/* greetings */}
          <View style={styles.greeting}>
            <Image
              source={require('./assets/Path.png')}
              style={styles.greetingImage}>
            </Image>

            <Text style={styles.greetingsText}>Good Evening</Text>
          </View>

          {/* Time */}
          <View>

          </View>

          {/* Location */}
          <View>

          </View>

          {/* Button */}
          <View>

          </View>

        </View>

        {/* Expanded part
        <View>

        </View> */}
      </View>
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
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 26
  },
  upperView: {
    flexDirection: 'row'
  },
  LowerView: {

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
  }
});
