import React, { useContext, useEffect } from 'react';
import {
  Text,
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Icon,
  Spinner,
} from 'native-base';
import { Image } from 'react-native';
import { context } from '../context/context';
import { getUserDetailsByID, clearUserDetails } from '../actions/users';

const UserDetails = ({ route }) => {
  const { state, dispatch } = useContext(context);

  const id = route.params.id;
  console.log(id);
  useEffect(() => {
    const resolvePromise = async () => {
      dispatch(await getUserDetailsByID(id));
    };
    resolvePromise();

    return () => {
      dispatch(clearUserDetails());
    };
  }, []);
  if (state.details) {
    return (
      <Container>
        <Card>
          <CardItem bordered>
            <Body style={{ alignItems: 'center' }}>
              <Text
                style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 20 }}>
                {`${state.details.first_name} ${state.details.last_name}`}
              </Text>
              <Image
                style={{
                  width: 200,
                  height: 200,

                  borderRadius: 50,
                }}
                source={{ uri: state.details.avatar }}
              />
              <Text>Email: {state.details.email}</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
  return <Spinner color='black' />;
};
export default UserDetails;
