import React, {useState, useEffect} from 'react';
import { View, ScrollView } from 'react-native';
import colors from '../../values/colors';
import values from '../../values/values';
import Label from '../components/generic/Label'; 
import Spacer from '../components/generic/Spacer';
import UserListItem from '../components/specific/UserListItem';

export default function Home({navigation}) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers();
  }, [navigation])

  const getUsers = async () => {
    setLoading(true)
    setError(null)
    try {
      /*
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      let json = await response.json()
      json = json.map(user => {
        return {
          ...user,
          avatar: values.test.image_avatar, //user.avatar
        }
      })
      */
      const json = require('../../values/test_data.json')
      setUsers(json.users)     
    } catch (error) {
      console.log(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading && <Label text={'Loading...'} size={values.text_size.subtitle}/>}
      {error && <Label text={JSON.stringify(error)} size={values.text_size.subtitle} color={colors.error}/>}
      {!loading && !error && 
        <ScrollView style={{flex: 1, width: '100%',}}>
          {
            users.map((user, index) => {              
              return <UserListItem key={index} user={user} 
                onSelectUser={() => 
                  navigation.navigate('User', {user})}/>
            })
          }
          <Spacer style={{height: 40}}/>
        </ScrollView>
      }
    </View>
  );
}
