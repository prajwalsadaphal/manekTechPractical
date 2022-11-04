import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import {moderateScale, verticalScale} from '../../helpers/metric';
import { loginUser } from '../../store/actions/actions';

export default function Login() {
    const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [usernameError,setUsernameError] = useState(false)
    const [disableLoginBtn,setDisableLoginBtn] = useState(true)


  const handleLogin = ()=>{
    dispatch(loginUser(username,password))
  }


  const handleUsernameValidation = (text)=>{
    setUsername(text)
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(regex.test(text)){
        setUsernameError(false)
    }else{
        setUsernameError(true)
    }
    
  }

  const checkCredentialValidation = ()=>{
    return usernameError || username.length===0 || password.length===0
  }

  useEffect(()=>{
    setDisableLoginBtn(checkCredentialValidation())
  },[username,password])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{width: '80%'}}>
        <Text
          style={{
            fontSize: moderateScale(40),
            color: '#14dc8d',
            fontWeight: '800',
            marginBottom: verticalScale(10),
            fontFamily:"Open Sans",
            letterSpacing:moderateScale(5)
          }}>
          Login
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder='admin@gmail.com'
            autoCapitalize="none"
            value={username}
            onChangeText={text => handleUsernameValidation(text)}
            style={[styles.input,usernameError?{borderColor: '#ff0000'}:{borderColor: '#848586'}]}
            selectionColor="#14dc8d"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder='admin'
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            selectionColor="#14dc8d"
          />
        </View>
        <TouchableOpacity
            disabled={disableLoginBtn}
            onPress={handleLogin} style={[styles.button,disableLoginBtn?{backgroundColor: '#848586'}:{backgroundColor: '#14dc8d',}]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: verticalScale(10),
  },
  label: {
    fontWeight: '800',
    fontFamily:"Open Sans"
  },
  input: {
    height: verticalScale(40),
    width: '100%',
    borderBottomWidth: moderateScale(2),
    borderColor: '#848586',
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14dc8d',
    height: moderateScale(40),
    marginVertical: verticalScale(10),
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: moderateScale(15),
    fontFamily:"Open Sans"
  },
});
