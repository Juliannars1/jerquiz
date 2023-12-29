import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../../theme/appTheme';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS, ROUTES} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useForm} from '../../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

const Register = ({navigation}: Props) => {
  const {name, email, password, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });
  const onLogin = () => {
    console.log({name, email, password});
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <View style={styles.wFull}>
            <View style={styles.row}>
              <Text style={styles.brandName}>QuizJer</Text>
            </View>
            <Text style={styles.loginContinueTxt}>Register in to continue</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={value => onChange(value, 'name')}
              value={name}
            />
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
                  <Text style={styles.loginText}>Register</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={[COLORS.gradientForm, COLORS.primary]}
          style={styles.linearGradientRegister}
          start={{y: 0.0, x: 0.0}}
          end={{y: 1.0, x: 0.0}}>
          <TouchableOpacity
            onPress={() => navigation.replace(ROUTES.LOGIN)}
            activeOpacity={0.7}
            style={styles.registerBtn}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </LinearGradient>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default Register;
