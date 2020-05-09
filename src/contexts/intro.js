import React, { 
  createContext, 
  useState, 
  useEffect,
  useContext
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

const IntroContext = createContext();

export function IntroProvider({ children }) {
  const [ username, setUsername ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    async function loadStoragedData() {
      const storagedUsername = await AsyncStorage.getItem('@Geneall:username');

      if (storagedUsername) {
        setUsername(storagedUsername);
        setLoading(false);
      } else if (!storagedUsername) {
        setLoading(false);
      }
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
      loading,
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