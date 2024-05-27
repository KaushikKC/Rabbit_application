import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {hp, wp} from '../utils/ScreenDimension';
import LinearGradient from 'react-native-linear-gradient';
import apple from '../assets/images/apple.png';
import google from '../assets/images/Google.png';
import facebook from '../assets/images/facebook.png';
import {slides} from '../constants/data';
import {Slide} from '../components/Slide';
import {COLORS} from '../constants/color';
import {Ed25519Keypair} from '@mysten/sui.js/keypairs/ed25519';
import {web3auth} from '../../App';
import {LOGIN_PROVIDER} from '@web3auth/react-native-sdk';
import {useAddress} from '../../Context/AddressContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

type storageProp = {
  address: string;
  privateKey: string;
};
const Onboarding = () => {
  var navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [email, setEmail] = useState<string>('');
  const ref = React.useRef<FlatList>(null);
  const {setAddress, setKeypair} = useAddress();
  const scheme = 'web3authrnbareauth0example'; // Or your desired app redirection scheme
  const resolvedRedirectUrl = `${scheme}://openlogin`;
  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / wp(100));
    setCurrentSlideIndex(currentIndex);
  };
  useEffect(() => {
    const init = async () => {
      await web3auth.init();
    };
    init();
  }, []);

  const storeCredentials = async (address: string, privateKey: string) => {
    try {
      await AsyncStorage.setItem('userAddress', address);
      await AsyncStorage.setItem('userPrivateKey', privateKey);
    } catch (error) {
      console.error('Error storing credentials:', error);
    }
  };

  // Function to retrieve user authentication credentials
  const retrieveCredentials = async (): Promise<{
    address: string | null;
    privateKey: string | null;
  }> => {
    try {
      const address = await AsyncStorage.getItem('userAddress');
      const privateKey = await AsyncStorage.getItem('userPrivateKey');
      return {address, privateKey};
    } catch (error) {
      console.error('Error retrieving credentials:', error);
      return {address: null, privateKey: null};
    }
  };

  const login = async () => {
    try {
      if (!web3auth.ready) {
        return;
      }
      if (!email) {
        return;
      }
      await web3auth.login({
        loginProvider: LOGIN_PROVIDER.EMAIL_PASSWORDLESS,
        redirectUrl: resolvedRedirectUrl,
        extraLoginOptions: {
          login_hint: email,
        },
      });

      if (web3auth.privKey) {
        // Create a Uint8Arrray from private key which is in hex format
        const privateKeyUint8Array = new Uint8Array(
          web3auth.privKey
            .match(/.{1,2}/g)!
            .map((byte: any) => parseInt(byte, 16)),
        );

        // Create an instance of the Sui local key pair manager
        const keyPair = Ed25519Keypair.fromSecretKey(privateKeyUint8Array);
        setKeypair(keyPair);

        const address = keyPair.toSuiAddress();
        await storeCredentials(address, web3auth.privKey);
        // console.log('working');
        setAddress(address);
        navigation.navigate('Bottom');
      }
    } catch (e: any) {
      console.error(e.message);
    }
  };

  const checkLoginStatus = async () => {
    try {
      const credentials = await retrieveCredentials();
      if (credentials.address && credentials.privateKey) {
        const privateKeyUint8Array = new Uint8Array(
          credentials.privateKey
            .match(/.{1,2}/g)!
            .map((byte: any) => parseInt(byte, 16)),
        );
        const keyPair = Ed25519Keypair.fromSecretKey(privateKeyUint8Array);

        setKeypair(keyPair);
        setAddress(credentials.address);

        // Optionally navigate to the main screen
        navigation.navigate('Bottom');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  // Call the checkLoginStatus function when the app starts
  useEffect(() => {
    checkLoginStatus();
  }, []);
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#6B73FF', '#000DFF']}
        start={{x: 0, y: 0}}
        end={{x: 0.5, y: 0.5}}
        style={styles.container}
      />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={styles.slideContainer}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />

      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex === index && styles.slideIndex,
            ]}
          />
        ))}
      </View>
      <View style={styles.btnContainer}>
        {/* <ConnectButton /> */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={COLORS.Grey}
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.btn}
          onPress={() => login()}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottomSocial}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccount')}
            style={styles.btnSocial}>
            <Image source={apple} style={styles.socialImg} />
            <Text style={styles.btnText}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSocial}>
            <Image source={google} style={styles.socialImg} />
            <Text style={styles.btnText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSocial}>
            <Image source={facebook} style={styles.socialImg} />
            <Text style={styles.btnText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.terms}>
          By continuing you agree Terms of Services & Privacy Policy{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: hp(100),
    width: wp(100),
  },
  slideContainer: {
    height: hp(100) * 0.6,
    justifyContent: 'center',
    marginTop: 20,
  },
  slideIndex: {
    backgroundColor: 'white',
    width: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  indicator: {
    height: 5,
    width: 5,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 10,
  },
  btnContainer: {
    height: 60,
    marginBottom: 8,
    alignItems: 'center',
    marginTop: hp(5),
  },
  btn: {
    flex: 1,
    height: 100,
    width: wp(100) - 32,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    fontWeight: '600',
    fontSize: wp(100) * 0.04,
    color: '#040415',
    fontFamily: 'Quicksand-Regular',
  },
  bottomSocial: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp(100) - 32,
    height: 40,
  },
  btnSocial: {
    flex: 1,
    height: 36,
    width: 100,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  socialImg: {
    marginRight: 5,
  },
  terms: {
    fontSize: wp(100) * 0.03,
    opacity: 50,
    color: '#AFB4FF',
    marginTop: 10,
    fontFamily: 'Quicksand-Regular',
  },
  input: {
    color: COLORS.white,
    height: 40,
    borderColor: COLORS.Grey,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    fontFamily: 'Quicksand-Regular',
    width: wp(100) - 48,
    marginBottom: 5,
  },
});

export default Onboarding;
