import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Linking,
  ScrollView,
} from 'react-native';

const register = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'WHITE' }}>
      <Image
        style={{
          width: 120,
          height: 120,
          borderRadius: 50,
          marginTop: 150,
          marginBottom: 20,
          marginLeft: 100,
        }}
        source={require('../assets/aku.jpg')}
      />
      <Text
        style={{
          marginLeft: 90,
          fontWeight: 'bold',
          fontSize: 30,
          textAlign: 'left',
          color: 'black',
          marginBottom: 5,
        }}>
        Welcome,
      </Text>
      <Text
        style={{
          marginLeft: 60,
          marginTop: 0,
          marginBottom: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'left',
          color: '#808080',
        }}>
        Silahkan daftar terlebih dahulu...
      </Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={{
          margin: 20,
          textAlign: 'left',
          color: 'black',
          borderColor: 'gray',
          backgroundColor: 'pink',
          padding: 20,
          borderRadius: 10,
        }}
      />
      <TextInput
        placeholder="Username"
        style={{
          margin: 20,
          marginTop: 0,
          textAlign: 'left',
          color: 'black',
          borderColor: 'gray',
          backgroundColor: 'pink',
          padding: 20,
          borderRadius: 10,
        }}
      />
      <TextInput
        placeholder="Password"
        style={{
          margin: 20,
          marginTop: 0,
          textAlign: 'left',
          color: 'black',
          borderColor: 'gray',
          backgroundColor: 'pink',
          padding: 20,
          borderRadius: 10,
        }}
      />
      <TextInput
        placeholder="Ulangi Password"
        style={{
          margin: 20,
          marginTop: 0,
          textAlign: 'left',
          color: 'black',
          borderColor: 'gray',
          backgroundColor: 'pink',
          padding: 20,
          borderRadius: 10,
        }}
      />
      <View style={{ padding: 80, marginTop: -60 }}>
        <Button
          title="Daftar"
          color="pink"
          onPress={() => navigation.navigate('Porto')}
        />
      </View>
      <Text
        style={{
          marginTop: -90,
          padding: 20,
          fontWeight: 'medium',
          fontSize: 15,
          textAlign: 'center',
          color: '#808080',
        }}>
        Udah punya akun?{' '}
        <Text style={{ color: '#72a4d4', fontWeight: 'Bold' }}>register</Text>
      </Text>
    </View>
  );
};

export default register;
