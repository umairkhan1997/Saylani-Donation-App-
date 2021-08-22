import React, { useState, useEffect } from 'react';
import {
    Image, Text
} from 'react-native';
import { Item, Input } from 'native-base';





const InputField = (props) => {
    const { keyboardType, inpStl, onChangeText, value, source, itemStyle, imgStl, placeholder, disabled, currencyIcon } = props;

    return (
        <Item style={itemStyle}>
            <Image source={source} style={imgStl} />
            <Text style={inpStl}>{currencyIcon}</Text>
            <Input placeholder={placeholder} value={value} keyboardType={keyboardType}
                onChangeText={onChangeText} placeholderTextColor='white' style={inpStl} selectionColor='white' disabled={disabled} />
        </Item>
    )
}
export default InputField