import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Rubik from './texts/Rubik';
import Philosopher from './texts/Philosopher';
import RupiahFormat from './texts/RupiahFormat';
import { IMG_URL } from '../../config/api.config';

const CardProduct = props => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={props.action}>
        <View style={styles.imgWrapper}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: IMG_URL + props.cover_image }}
          />
        </View>
        <View style={styles.cardBody}>
          <View style={{ flex: 1, height: 40 }}>
            <Philosopher
              textBreakStrategy="simple"
              style={styles.prName}
              numberOfLines={2}
            >
              {props.name}
            </Philosopher>
          </View>
          <RupiahFormat style={{ flex: 1 }} text={props.price} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.5,
    paddingHorizontal: width * .02,
    paddingVertical: height * .005
  },
  card: {
    flexDirection: 'column',
    width: '100%',
    height: height * 0.3,
    paddingHorizontal: width * .018,
  },
  imgWrapper: {
    flexDirection: 'row',
    height: height * 0.18,
    marginBottom: 3
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  cardBody: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 5,
    margin: 0,
    height: height * 0.12
  },
  prName: {
    alignSelf: 'stretch',
    fontSize: 16
  }
});

export default CardProduct;
