import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground, Image, TouchableOpacity, PermissionsAndroid, Platform, Alert
} from 'react-native';
import axios from 'axios';
import { connect } from "react-redux";
import { trandIdReset } from "../../config/Redux/actions/authActions";
import { Button, Spinner } from 'native-base';
import back from '../../assets/image/back2.png'
import { captureScreen } from 'react-native-view-shot';
import CameraRoll from "@react-native-community/cameraroll";

const DonResult = (props) => {
    const [transaction, setTransaction] = useState('');
    const [approvalCode, setApprovalCode] = useState('');
    const [responseClassDescription, setResponseClassDescription] = useState('');
    const [responseCode, setResponseCode] = useState('');
    const [responseClass, setResponseClass] = useState('');
    const [responseDescription, setResponseDescription] = useState('');
    const [transId, setTransId] = useState(props.transId);
    const [loading, setloading] = useState(true);
    const [imageURI, setImageURI] = useState(
        '',
    );
    const [savedImagePath, setSavedImagePath] = useState('');

    const hasAndroidPermission = async () => {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }
    const showAlert = () =>
        Alert.alert(
            "Donation Image",
            "Has been saved to your Gallery",
            [
                {
                    text: "Ok",
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );
    const savePicture = async (uri) => {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        // console.log('save picture')
        CameraRoll.save(uri, { 'photo': 'jpg', 'album': 'saylanidonation' });
        showAlert()
    };
    const takeScreenShot = () => {
        // To capture Screenshot
        captureScreen({
            // Either png or jpg (or webm Android Only), Defaults: png
            format: 'jpg',
            // Quality 0.0 - 1.0 (only available for jpg)
            quality: 0.8,
        }).then(
            //callback function to get the result URL of the screnshot
            (uri) => {
                // console.log(uri, 'uriiiiiiiiiii')
                setSavedImagePath(uri);
                setImageURI(uri);
                savePicture(uri)
            },
            (error) => console.error('Oops, Something Went Wrong', error),
        );
    };

    useEffect(() => {
        const obj = {

            "donationDataTrans": transId,
            "donationDataTid": props.orderId,

        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers": "*",
                "Accept": "application/json",
                "Access-Control-Allow-Credentials": 'true'
            },
            data: obj,
            url: "",
        };
        axios(options)
            .then(res => {
                const data = res.data
                if (data.ResponseClass == 5) {
                    setloading(false);
                    setApprovalCode('0000');
                    setResponseClassDescription()
                    setResponseCode()
                    setResponseClass()
                    setResponseDescription()
                }
                else if (data.ResponseClass == 0) {
                    setloading(false);

                }
                else if (data.ResponseClass == 51) {
                    setloading(false);

                }
                else if (data.ResponseClass == 91) {
                    setloading(false);

                }
                else {
                    setloading(false);

                }
                // console.log(props.orderId, data.ApprovalCode, "datadatadata", data, "data.Payer.Informationdata.Payer.Information", data.Payer.Information)
                dataUpdate(props.orderId, data.ApprovalCode, data.Payer.Information ? data.Payer.Information : data.Payer, "Successfully Complete")
            })
            .catch(err => {
                console.log(err, '2')
                setloading(false);


            })
    }, [])



    const dataUpdate = (ordId, appCode, pyInfo, status) => {
        console.log(transId, 'transId')
        const obj = {
            orderId: ordId,
            tstatus: status,
            approvalcode: appCode,
            cardno: pyInfo,
            bankTranId: transId
        }
        const options = {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
                "Allow": "GET, POST, OPTIONS, PUT, DELETE"
            },
            data: obj,
            url: "https://swit-app.herokuapp.com/donation/donationDataUpdate",
        };
        axios(options)
            //.then((res) => res.json())
            .then((response) => {
                console.log(response, 'response')
            })
            .catch((err) => {
                console.log('err 2', err)
            })
    }

    const contHome = () => {
        props.trandIdReset()
        props.navigation.navigate('DonationHome')
    }

    return (
        <View style={styles.container}>


            <ImageBackground source={back} style={styles.image}>
                <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                    {
                        loading ?
                            <Spinner color='green' />
                            :
                            <View style={{ backgroundColor: '#f6f6f6', width: '90%', borderRadius: 20 }}>
                                <Text style={styles.txtMessage}>Message : {responseDescription}</Text>
                                <Text style={styles.txtMessage}>ApprovalCode : {approvalCode}</Text>
                                <Text style={styles.txtMessage}>Transaction ID : {transId}</Text>
                                <Button
                                    // onPress={() => props.navigation.navigate('Donation')}
                                    onPress={() => contHome()}
                                    style={styles.signBtn}>
                                    <Text style={styles.signTxt}>Continue to HomePage</Text>
                                </Button>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={takeScreenShot}>
                                    <Text style={styles.buttonTextStyle}>
                                        Take Screenshot
          </Text>
                                </TouchableOpacity>
                            </View>}
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",

    },
    txtMessage: {
        marginTop: 30, textAlign: 'center', color: '#024da1', fontWeight: 'bold'
    },
    signBtn: { height: 50, width: '80%', marginLeft: '10%', backgroundColor: '#1371b8', marginTop: 55, borderRadius: 25, justifyContent: 'center' },
    signTxt: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    buttonStyle: {
        fontSize: 16,
        color: 'black',
        // backgroundColor: 'green',
        padding: 5
        , marginTop: 10,
        minWidth: 250,
    },
    buttonTextStyle: {
        padding: 5,
        color: 'black',
        textAlign: 'center',
    },
});
const mapStateToProps = state => {
    return {
        transId: state.authReducers.transId,
        orderId: state.authReducers.orderId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        trandIdReset: () => dispatch(trandIdReset()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DonResult);
// export default DonResult;
