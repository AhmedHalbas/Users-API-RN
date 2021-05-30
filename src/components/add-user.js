import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { context } from '../context/context';
import { addUser } from '../actions/users';
const AddUser = ({ navigation }) => {
  const { state, dispatch } = useContext(context);

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [job, setJob] = useState('');

  const postUser = async () => {
    if (name == '' || email == '' || job == '') return;

    let user = {
      name: name,
      email: email,
      job: job,
    };

    console.log(user);

    const resolvePromise = async () => {
      dispatch(await addUser(user));
    };
    await resolvePromise();
    //alert('User Created Successfully');
    //at ${await state.user.createdAt}
    Alert.alert(
      'Created',
      `User Created Successfully`,
      [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Users');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Form style={{ margin: 20 }}>
      <Item stackedLabel>
        <Label>Name</Label>
        <Input
          onChangeText={(name) => {
            setName(name);
          }}
        />
      </Item>
      <Item stackedLabel>
        <Label>Email</Label>
        <Input
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
      </Item>

      <Item stackedLabel>
        <Label>Job</Label>
        <Input
          onChangeText={(job) => {
            setJob(job);
          }}
        />
      </Item>
      <Button
        onPress={postUser}
        rounded
        style={{ alignSelf: 'center', marginTop: 20 }}>
        <Text>Add User</Text>
      </Button>
    </Form>
  );
};
export default AddUser;
