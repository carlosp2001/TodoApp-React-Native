import React, {Component} from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableHighlight,
} from 'react-native';

const userImage = require('./user.png');

const data = [
  {
    image: userImage,
    name: 'Carlos Pineda',
    occupation: 'React Native Developer',
    description:
      'Carlos is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true,
  },
  {
    image: userImage,
    name: 'Carlos Pineda',
    occupation: 'React Native Developer',
    description:
        'Carlos is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.',
    showThumbnail: true,
  },
];

const ProfileCard = props => {
  const {image, name, occupation, description, onPress, showThumbnail} = props;
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data,
    };
  }

  handleProfileCardPress = index => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [index]: {showThumbnail: {$set: showThumbnail}},
      }),
    });
  };

  render() {
    const list = this.state.data.map(function (item, index) {
      const {image, name, occupation, description, showThumbnail} = item;
      return (
        <ProfileCard
          key={'card-' + index}
          image={image}
          name={name}
          occupation={occupation}
          description={description}
          showThumbnail={showThumbnail}
          onPress={this.handleProfileCardPress.bind(this, index)}
        />
      );
    }, this);

    return <View style={styles.container}>{list}</View>;

    // return (
    //   <View style={styles.container}>
    //     <View style={styles.cardContainer}>
    //       <View style={styles.cardImageContainer}>
    //         <Image style={styles.cardImage} source={require('./user.png')} />
    //       </View>
    //       <View>
    //         <Text style={styles.cardName}>Carlos Pineda</Text>
    //       </View>
    //       <View style={styles.cardOccupationContainer}>
    //         <Text style={styles.cardOccupation}>React Native Developer</Text>
    //       </View>
    //       <View>
    //         <Text style={styles.cardDescription}>
    //           Carlos is a really great JavaScript developer. He loves using JS
    //           to build React Native applications for iOS and Android.
    //         </Text>
    //       </View>
    //     </View>
    //   </View>
    // );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  cardThumbnail: {
    transform: [{scale: 0.2}],
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    // transform: [{translateX: -150}, {rotateY: '-60deg'}, {translateX: 150}],
    // backfaceVisibility: 'hidden', // Especifica si la parte posterior del elemento es visible cuando el elemento está girado
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    alignItems: 'center',
    // position: 'absolute',
    // left: 0,
    // top: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    // Especificando el radio del borde
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15,
      },
    }),
  },
  // Especificando el tamaño de la imagen
  cardImage: {
    width: 80,
    height: 80,
  },
  cardName: {
    color: 'white',
    marginTop: 30,
    fontWeight: 'bold', // Especifica el ancho de las letras
    fontSize: 24, // Especifica el tamaño de las letras
    textShadowColor: 'black', // Especifica el color de la sombra del texto
    textShadowOffset: {
      height: 2,
      width: 2,
    }, // Especifica el desplazamiento de la sombra del texto
    textShadowRadius: 3, // Especifica el radio de la sombra del texto
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3,
  },
  cardOccupation: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
});
