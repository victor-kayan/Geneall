import React, { useState } from 'react';
import { 
  StatusBar,
  ScrollView, 
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import { useNavigation, useRoute } from '@react-navigation/native';

import openLink from '../InAppBrowser';
import Colors from '../../../assets/colors';
import { 
  Container,
  Modal,
  IconContainer,
  Header,
  Content,
  Title,
  Row,
  Description,
  Definition,
  LinksContainer,
  Link,
  ListDot,
} from './styles';

export default function ConceptModal() {
  const navigation = useNavigation();
  const route = useRoute();
  const [ isClosing, setIsClosing ] = useState(false);

  const { concept, definition, trustableSites } = route.params;

  return (
    <Container>
      <StatusBar backgroundColor='#14242c' />
      
      <Modal
        isOpen
        useNativeDriver
        position={'bottom'}
        animationDuration={350}
        onClosed={() => { navigation.goBack() }}
        onClosingState={state => { setIsClosing(state) }}
      >
        <IconContainer>
        { isClosing 
          ? <MaterialIcon 
              name='chevron-down'
              color='#FFF'
              size={30}
              style={{ marginTop: -20 }}
            />
          : <OcticonsIcon 
              name='dash'
              color='#FFF'
              size={30}
              style={{ marginTop: -20 }}
            /> 
        }
        </IconContainer>

        <Header>
          <Title>{concept}</Title>
        </Header>
        
        <Content>
          <Row>
            <MaterialIcon 
              name='book-outline'
              size={24}
              color={ Colors.PRIMARY_GREEN }
              />
            <Description>DEFINIÇÃO:</Description>
          </Row>
          <ScrollView 
            directionalLockEnabled={true}
            style={{ maxHeight: '70%', height: 'auto' }}
          >
            <TouchableWithoutFeedback>
              <Definition>{definition}</Definition>
            </TouchableWithoutFeedback>
          </ScrollView>
          
          <Row>
            <MaterialIcon 
              name='link-variant'
              size={24}
              color={ Colors.PRIMARY_GREEN }
              />
            <Description>APRENDA MAIS:</Description>
          </Row>

          <LinksContainer>
            { trustableSites.map(site => 
              <TouchableOpacity 
                key={site.url} 
                onPress={ () => openLink(site.url) } 
              >
                <Link><ListDot>• </ListDot>{site.url}</Link> 
              </TouchableOpacity>
            )}
          </LinksContainer>
        </Content>
      </Modal>
    </Container>
  );
}
