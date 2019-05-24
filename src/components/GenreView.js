import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card, CardItem } from 'native-base';


export const GenreCard = props => {
    return(
        <Card transparent style={{borderWidth: .78, borderColor: '#333', backgroundColor: '#bde'}}>
            <CardItem button onPress={() => alert('works')}>
                <Text>{props.name}</Text>
            </CardItem>
        </Card>
    )
}

const GenreView = props => {
    return(
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={props.data}
                keyExtractor={(item, index) => 'key ' + index}
                renderItem={({item}) => <GenreCard name={item.name} />}
            />
        </View>
    )
}

export default GenreView;