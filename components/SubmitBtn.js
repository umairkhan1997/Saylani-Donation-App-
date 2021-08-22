

import React from 'react';
import {
    Text
} from 'react-native';
import { Button } from 'native-base';





const InputField = (props) => {
    const { onPress,
        btnStyle,
        txtStl } = props;
    return (
        <Button
            onPress={onPress}
            style={btnStyle}>
            <Text style={txtStl}>Submit</Text>
        </Button>

    )
}
export default InputField

