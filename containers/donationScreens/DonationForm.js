import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, ImageBackground, Image, KeyboardAvoidingView, Keyboard, AsyncStorage
} from 'react-native';
import backImg from '../../assets/image/back2.png'
import { Item, Toast, Spinner } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { trandId } from "../../config/Redux/actions/authActions";
import { orderId } from "../../config/Redux/actions/authActions";
import { connect } from "react-redux";
import { checkField, validateEmail } from '../../validation/validation'
import { Picker } from '@react-native-picker/picker';
import InputField from '../../components/InputField';
import SubmitBtn from '../../components/SubmitBtn';
import dontList from '../../components/donationList'
const DonationForm = (props) => {
    const [username, setUsername] = useState('');
    const [amount, setAmount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [email, setEmail] = useState('');
    const [phNumber, setPhNumber] = useState('');
    const [webView, setWebView] = useState(false);
    const [donUrl, setDonUrl] = useState('');
    const [transId, setTransId] = useState(null);
    const [ordId, setOrdId] = useState(null);
    const [selectedValues, setSelectedValue] = useState(props.route.params.val);
    const [donationName, setDonationName] = useState(props.route.params.firItem);
    const [loading, setloading] = useState(false);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [currency, setCurrency] = useState(1);
    const [totalVal, setTotalVal] = useState('')
    const [currencyIcon, setCurrencyIcon] = useState(["Rs", "$", "SAR", "AED", "£", "C$"]);
    const [currencyIconInd, setCurrencyIconInd] = useState(0)
    const _getData = async () => {
        try {
            const firstName = await AsyncStorage.getItem("firstName");
            const email = await AsyncStorage.getItem("email");
            const contact = await AsyncStorage.getItem("contact");
            setUsername(firstName != null ? firstName : '');
            setEmail(email != null ? email : '');
            setPhNumber(contact != null ? contact : '');
        } catch (error) {
            console.log(error, 'error')
        }
    };


    useEffect(() => {
        _getData()
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                // console.log('One')
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                // console.log('Two')
                setKeyboardVisible(false); // or some other action
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    // const Item = Picker.Item;
    const postForm = (path, params, id) => {
        setWebView(true);
    }

    const handleWebViewNavigationStateChange = () => {
        setWebView(false);

    }

    const donationSubmit = async () => {
        setloading(true)
        if (checkField(props.route.params.meth == "single" ? amount : quantity)) {
            Toast.show({
                text: 'Amount or Quantity is required',
                buttonText: 'Okay'
            })
            setloading(false);
        }
        else if (checkField(username)) {
            Toast.show({
                text: 'First and Last Name required',
                buttonText: 'Okay'
            })
            setloading(false);
        }
        else if (checkField(email)) {
            Toast.show({
                text: 'Email is required',
                buttonText: 'Okay'
            })
            setloading(false);
        }
        else if (checkField(phNumber)) {
            Toast.show({
                text: 'Phone Number is required',
                buttonText: 'Okay'
            })
            setloading(false);
        }
        else if (!validateEmail(email.replace(/\s+/g, ''))) {
            Toast.show({
                text: 'Email is Invalid',
                buttonText: 'Okay'
            })
            setloading(false);
        }
        else if (phNumber.length > 11 || phNumber.length < 11) {
            Toast.show({
                text: 'Phone Number must be Eleven Numbers',
                buttonText: 'Okay'
            })
            setloading(false);
        }
        else {
            console.log('asdasdasdsad')
            let finAmt = (props.route.params.meth == "single" ? Math.round(Number(amount) * Number(currency)) : Number(quantity) * Number(selectedValues))
            let getMonth = (new Date().getMonth() + 1 < 10) ? "0" + (new Date().getMonth() + 1) : new Date().getMonth() + 1;
            // console.log(getMonth, "getMonthgetMonth")
            await AsyncStorage.setItem("firstName", username);
            await AsyncStorage.setItem("email", email);
            await AsyncStorage.setItem("contact", phNumber);


            const objDatabase = {

            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Headers": "*",
                    "Accept": "application/json",
                    "Access-Control-Allow-Credentials": 'true'
                },
                data: objDatabase,
                url: "",
            };
            axios(options)
                //.then((res) => res.json())
                .then((response) => {
                    setloading(true);

                })
                .catch((err) => {
                    console.log(err.message, 'err');
                    setloading(false);
                })


        }
    }

    return (
        <View style={styles.container}>
            {webView ?
                <WebView
                    style={{ width: '98%', height: '100%', marginTop: 30, alignContent: 'center' }}
                    source={{
                        html: `<html><body onload="document.forms[0].submit();"><form action=${} method="post"><input type='Hidden' name='TransactionID' value=${} />
                        <input type="submit" value="Submit" hidden>
                        </form></html>`}}

                />
                :
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <ImageBackground source={backImg} style={styles.image}>
                            <ScrollView style={{ flex: 1 }}>

                                <TouchableOpacity onPress={() => props.navigation.navigate('DonationHome')} style={{ marginTop: 60, marginBottom: 20 }}>
                                    <Image source={require('../../assets/image/left-arrows.png')} style={{ height: 22, width: 22, marginLeft: 20 }} />
                                </TouchableOpacity>

                                <View style={{
                                    justifyContent: 'center',
                                    // marginTop: isKeyboardVisible ? 100 : -50
                                }}>
                                    <Item style={styles.itemOne}>
                                        <Image source={require('../../assets/image/dollar.png')} style={{ height: 22, width: 22, marginRight: 10, marginBottom: 10 }} />
                                        <Picker
                                            note
                                            mode="dropdown"
                                            style={{ width: '95%', height: 50, marginBottom: 5, color: 'white', }}
                                            itemStyle={{ width: '95%', height: 40, marginBottom: 5, color: 'white', backgroundColor: "white", fontFamily: "Ebrima", fontSize: 17 }}
                                            selectedValue={currency}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setCurrency(itemValue);
                                                setCurrencyIconInd(itemIndex)
                                                setTotalVal(Math.ceil((Number(quantity) * Number(selectedValues)) / Number(itemValue)));
                                                // setAmountTotalVal(Math.round(Number(amount) / Number(itemValue)))
                                            }
                                            }
                                            textInputProps={{ numberOfLines: 1 }}
                                        >
                                            {props.currencyData.map((val, ind) => {
                                                return <Picker.Item label={val.label} value={val.value} />
                                            })}

                                        </Picker>
                                    </Item>


                                </View>

                            </ScrollView>
                        </ImageBackground >
                    </View >
                </SafeAreaView >
            }
        </View>

    );
};
// 599838390
// b6z8hadf

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
    },
    itemOne: { width: '80%', marginLeft: '10%', borderBottomColor: 'white', borderBottomWidth: 2, marginVertical: 10 },
    imgUser: { height: 22, width: 22, marginRight: 10 },
    inpStl: { fontSize: 16, color: 'white' },
    signBtn: { height: 50, width: '80%', marginLeft: '10%', backgroundColor: 'white', marginTop: 20, borderRadius: 25, justifyContent: 'center' },
    signTxt: { color: '#1371b8', fontSize: 18, fontWeight: 'bold' },
});

const mapStateToProps = state => {
    return {
        currencyData: state.donaReducer.currencyData,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        trandId: (id) => dispatch(trandId(id)),
        orderId: (id) => dispatch(orderId(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DonationForm);
