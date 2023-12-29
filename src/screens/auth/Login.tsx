import React from 'react';
import {Keyboard, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../theme/appTheme';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS, ROUTES} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useForm} from '../../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const Login = ({navigation}: Props) => {
  const {email, password, onChange} = useForm({email: '', password: ''});
  const onLogin = () => {
    console.log({email, password});
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Text style={styles.brandName}>QuizJer</Text>
          </View>
          <Text style={styles.loginContinueTxt}>Login in to continue</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={value => onChange(value, 'email')}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.loginBtnWrapper}>
            <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{y: 0.0, x: 0.0}}
              end={{y: 1.0, x: 0.0}}>
              <TouchableOpacity
                onPress={onLogin}
                activeOpacity={0.7}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace(ROUTES.REGISTER)}>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
