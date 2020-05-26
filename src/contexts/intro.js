import React, { 
  createContext, 
  useState, 
  useEffect,
  useContext
} from 'react';

import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

const IntroContext = createContext();

export function IntroProvider({ children }) {
  const [ username, setUsername ] = useState(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUsername = await AsyncStorage.getItem('@Geneall:username');

      if (storagedUsername) {
        setUsername(storagedUsername);
      } 

      // Additional timeout of 300 ms to make sure that IntroRoutes will not be diplayed (flash) before AppRoutes
      await new Promise (resolve => setTimeout(resolve, 300));
      SplashScreen.hide();
    }
    
    loadStoragedData();
  }, []);

  async function setStoragedUsername(username) {
    try {
      await AsyncStorage.setItem('@Geneall:username', username);
      setUsername(username);
    } catch (error) {
      alert(`Oops...\nErro ao inserir o nome.\nPor favor, tente novamente.`)
    }
  }

  return (
    <IntroContext.Provider value={{ 
      username, 
      hasUsername: !!username,
      setStoragedUsername
    }}>
      { children }
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);

  return context;
}