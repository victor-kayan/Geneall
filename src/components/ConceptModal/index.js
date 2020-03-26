import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { WebView } from 'react-native-webview'; 
import { useNavigation, useRoute } from '@react-navigation/native';

import Colors from '../../../assets/colors';
import { 
  Container,
  Box,
  Header,
  Title,
  CloseModalButton, 
  Row,
  Description,
  Definition,
  Link,
  ListDot,
} from './styles';

export default function ConceptModal() {
  const navigation = useNavigation();
  const route = useRoute();

  const { concept, definition, trustableSites } = route.params;

  // useEffect(() => {
  //   trustableSites.map(site => {
  //     console.log(site.url);
  //   })
  // }, [])

  return (
    <Container>
      <Box>
        <Header>
          <View style={{ width: 30 }} />
          {/* 
          TODO: FIT THE TEXT IN IT'S CONTAINER (HEADER) 
          */}
          <Title>{ concept }</Title>
          <CloseModalButton onPress={ () => navigation.goBack() }>
            <Icon 
              name='close'
              size={30}
              color='#FFF'
            />
          </CloseModalButton>
        </Header>
        
        <Row>
          <Icon 
            name='book-outline'
            size={24}
            color={ Colors.PRIMARY_GREEN }
          />
          <Description>DEFINIÇÃO:</Description>
        </Row>
        <Definition>{ definition }</Definition>
        
        <Row>
          <Icon 
            name='link-variant'
            size={24}
            color={ Colors.PRIMARY_GREEN }
          />
          <Description>APRENDA MAIS:</Description>
        </Row>

        { trustableSites.map(site => 
          <Link key={site.url}><ListDot>• </ListDot>{ site.url }</Link> 
        )}
      </Box>
    </Container>
  );
}
