import react from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Linking,
  ScrollView,
} from 'react-native';

const contactme = 'https://www.instagram.com/_jeongjaehyun/?hl=id';

const App = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: '#FFFDD0',
        padding: '100',
        alignItems: 'center',
      }}>
      <Image
        style={{ width: 250, height: 200, borderRadius: 20, margin: 20 }}
        source={require('../assets/aku.jpg')}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: '1000',
          textAlign: 'center',
          color: 'black',
        }}>
        Aura Livia Nevaninda
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'gray',
          padding: 20,
        }}>
        {' '}
        Saya suka _jeongjaehyun ❤{' '}
      </Text>
      <Button
        title="Contact Me"
        color="green"
        onPress={() => Linking.openURL(contactme)}
      />

      <Text
        style={{
          padding: 20,
          fontWeight: 'bold',
          fontSize: '500',
          textAlign: 'center',
          color: 'black',
        }}>
        My Recent Project
      </Text>
      <Image
        style={{ width: 300, height: 200, borderRadius: 10 }}
        source={require('../assets/guci.jpg')}
      />
      <View style={{ marginTop: 10, marginLeft: -185 }}>
        <Text
          style={{
            fontWeight: 'Bold',
            fontSize: '500',
            textAlign: 'Left',
            color: 'black',
          }}>
          Figma Design
        </Text>
        <Text
          style={{
            fontWeight: 'medium',
            fontSize: '500',
            textAlign: 'Left',
            color: 'gray',
          }}>
          Mobile UI Design
        </Text>
      </View>

      <View
        style={{
          marginTop: -40,
          marginLeft: 160,
        }}>
        <Button
          title="Check this out!"
          color="black"
          onPress={() => Linking.openURL()}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Image
          style={{ width: 300, height: 200, borderRadius: 10 }}
          source={require('../assets/goodreads.jpg')}
        />
      </View>

      <View style={{ marginTop: 10, marginLeft: -185 }}>
        <Text
          style={{
            fontWeight: 'Bold',
            fontSize: '500',
            textAlign: 'Left',
            color: 'black',
          }}>
          Good Reads
        </Text>
        <Text
          style={{
            fontWeight: 'medium',
            fontSize: '500',
            textAlign: 'Left',
            color: 'gray',
          }}>
          Mobile UI Design
        </Text>
      </View>

      <View
        style={{
          marginTop: -40,
          marginLeft: 160,
        }}>
        <Button
          title="Check this out!"
          color="black"
          onPress={() => Linking.openURL()}
        />
      </View>
    </View>
  );
};

export default App;
