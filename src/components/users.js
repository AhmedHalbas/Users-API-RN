import React, { useEffect, useContext, useState } from 'react';
import { FlatList } from 'react-native';
import {
  View,
  Button,
  Text,
  Right,
  Left,
  Icon,
  ListItem,
  Spinner,
  Thumbnail,
} from 'native-base';
import { context } from '../context/context';
import { getUsers } from '../actions/users';

const Users = ({ navigation }) => {
  const { state, dispatch } = useContext(context);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const resolvePromise = async () => {
      dispatch(await getUsers(page));
    };
    resolvePromise();
  }, [page]);

  if (state.list) {
    return (
      <View>
        <FlatList
          data={state.list}
          renderItem={({ item }) => {
            return (
              <ListItem>
                <Left>
                  <Thumbnail
                    source={{ uri: item.avatar }}
                    style={{ marginRight: 20 }}
                  />
                  <Text>{item.first_name}</Text>
                </Left>
                <Right>
                  <Icon
                    name='eye'
                    onPress={() => {
                      navigation.navigate('UserDetails', { id: item.id });
                    }}
                  />
                </Right>
              </ListItem>
            );
          }}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={EmptyList}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            onPress={() => {
              if (page == 1) return;
              setPage(page - 1);
            }}
            rounded
            light>
            <Text>Prev</Text>
          </Button>
          <Text>{page}</Text>
          <Button
            onPress={() => {
              if (page == state.pages) return;
              setPage(page + 1);
            }}
            rounded
            light>
            <Text>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
  return <Spinner color='black' />;
};
export default Users;
const EmptyList = () => {
  return <Text style={{ textAlign: 'center' }}> No Users Yet!</Text>;
};

const ItemSeparator = () => {
  return <ListItem itemDivider></ListItem>;
};
