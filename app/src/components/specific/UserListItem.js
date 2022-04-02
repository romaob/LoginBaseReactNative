import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';
import Card from '../generic/Card';
import Label from '../generic/Label';

export default function UserListItem({user, onSelectUser}) {

  return (
    <Card style={{margin: values.margin.listitem}}>
        <TouchableOpacity onPress={onSelectUser}
            style={{flexDirection: 'row', alignItems: 'center',}}
        >
            <Image source={{uri: user.avatar}}   
            style={{width: 70, height: 70, borderRadius: 999}} />
            <View style={{flex: 1, padding: values.padding.default}}>
                <Label text={user ? user.name : 'User'} size={values.text_size.subtitle} bold={'500'} color={colors.accent}/>                
                <Label text={user ? user.user : 'User'} size={values.text_size.default} bold={'500'} color={colors.secondary}/>

                <Label text={`Size: ${user ? user.size : '- -'} km`} />
                <Label text={`Distance: ${user ? user.distance : '- -'} km`} />
                
            </View>        
        </TouchableOpacity>
    </Card>
  );
}
