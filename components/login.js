import{View, Text, Image, TextInput, Button, Linking, ScrollView,} from 'react-native';
import TILogin from './TILogin';


const login = ({ navigation }) => {
  return(
    <View style={{alignItems:'center',backgroundColor:'WHITE'}}>
    <Image 
        style={{width:120, height:120, borderRadius:50, marginTop:150,marginBottom:20,marginLeft:0}} 
        source={require('../assets/aku.jpg')}
    />
    <Text style={{marginLeft:50,fontWeight:'bold', fontSize:23,textAlign:'left', color:'black',marginBottom:5}}>
      Selamat Datang di Xeyuraa!
    </Text>
    <Text style={{marginLeft:30,marginTop:0,marginBottom:20,fontWeight:'medium', fontSize:15,textAlign:'left', color:'#808080'}}>
      Silahkan masuk untuk melanjutkan
    </Text>  
    
    <TILogin/>

    <Text style={{marginTop:-20,padding:20,fontWeight:'medium', fontSize:15,textAlign:'right', color:'#72a4d4'}}>
      Forgot Pasword?
    </Text>
    <View style={{padding:80, marginTop:-60,}}>
    </View>
    <Text style={{marginTop:-90,padding:20,fontWeight:'medium', fontSize:15,textAlign:'center', color:'black'}}>
    </Text>  
    <View style={{padding:80, marginTop:-100,}}>
    <Button title="Login" color='pink' onPress={() => navigation.navigate('Porto')}/>
    </View>
     <View style={{padding:80, marginTop:-150,}}>
    <Button title="Register" color='pink' onPress={() => navigation.navigate('Register')}/>
    </View>
    <Text style={{marginTop:-70,padding:20,fontWeight:'medium', fontSize:15,textAlign:'center', color:'#808080'}}>
      Belum punya akun? <Text style={{color:'#72a4d4',fontWeight:'Bold'}}>Daftar Sekarang!</Text>
    </Text>  

  </View>  
  )
}

export default login;