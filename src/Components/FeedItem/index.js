import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

class FeedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            iconLike: this.props.data.likeada ?
                require('../../../assets/likeada.png') :
                require('../../../assets/like.png')
        }


    }

    render() {
        const like = () => {
            let state = this.state.data;

            this.setState({
                data: {
                    ...state,
                    likers: state.likeada ? state.likers - 1 : state.likers + 1,
                    likeada: !state.likeada
                },
                iconLike: state.likeada ?
                    require('../../../assets/like.png') :
                    require('../../../assets/likeada.png')
            })
        }

        return(
            <View style={styles.body}>
                <View style={styles.userArea}>
                    <Image style={styles.userAvatar} source={{ uri: this.state.data.imgperfil}}/>
                    <Text style={styles.userName}> {this.state.data.nome} </Text>
                </View>

                <Image
                    resizeMode='cover'
                    style={styles.publication}
                    source={{uri: this.state.data.imgPublicacao}}
                />

                <View style={styles.actionArea}>
                    <TouchableOpacity onPress={() => like()}>
                        <Image style={styles.iconLike} source={this.state.iconLike}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image style={styles.iconSend} source={require('../../../assets/send.png')}/>
                    </TouchableOpacity>
                </View>


                {
                    this.state.data.likers.toFixed(0) > 0 ?
                        <View style={styles.imageLikersSection}>
                            <Text style={styles.imageLikers}>
                                {this.state.data.likers.toFixed(0) + (this.state.data.likers > 1 ? ' Likes' : ' Like')}
                            </Text>
                        </View>
                            :
                        null
                }


                <View style={styles.descriptionArea}>
                    <Text style={styles.userNameInDescription}>{this.state.data.nome}</Text>
                    <Text style={styles.imageDescriptionText}>{this.state.data.descricao}</Text>
                </View>

            </View>
        );
    }
}

export default FeedItem;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingVertical: 10
    },
    userArea: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 5
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userName: {
        fontSize: 22,
        textAlign: 'left',
        color: 'black'
    },
    publication: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    actionArea: {
        gap: 10,
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconLike: {
        width: 25,
        height: 25
    },
    iconSend: {
        width: 25,
        height: 25
    },
    descriptionArea: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    userNameInDescription: {
        paddingRight: 10,
        fontWeight: 'bold',
        fontSize: 14
    },
    imageDescriptionText: {
        fontSize: 16
    },
    imageLikersSection: {
        flex: 1,
        paddingLeft: 5,
        paddingVertical: 2
    },
    imageLikers: {
        fontWeight: 'bold'
    }
});