import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList, StatusBar} from 'react-native';
import { Component } from 'react';
import FeedItem from './src/Components/FeedItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Mais um dia de muitos bugs, e é isso que faço no meu dia a dia nesta empresa maravilhosa que eu amo tanto :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: true,
          likers: 1
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Bora trabalhar Haha',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        }
      ]
    }
  }

  render() {
    return (
        <View style={styles.container}>
        <StatusBar />
          <View style={styles.header.common}>
            <TouchableOpacity>
              <Image style={styles.header.logo} source={require('./assets/logofariasgram.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={styles.header.sendIcon} source={require('./assets/send.png')}/>
            </TouchableOpacity>
          </View>

          <FlatList
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              data={this.state.feed}
              renderItem={({item}) => <FeedItem data={item}/>}
          />

        </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginBottom: 15
  },
  header: {
    common: {
      height: 55,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      paddingBottom: 10,
      borderBottomWidth: 0.2,
      shadowColor: 'black',
      elevation: 1
    },
    logo: {
      width: 140,
      height: 50
    },
    sendIcon: {
      width: 23,
      height: 23,
    }
  },

});
