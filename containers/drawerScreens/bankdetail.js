import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, Linking,
    TouchableOpacity, Image, Button, Dimensions, FlatList, TouchableWithoutFeedback
} from 'react-native';
import Modal from 'react-native-modal';
import FitImage from 'react-native-fit-image';
import { connect } from "react-redux";
import { bankDetailGet } from "../../config/Redux/actions/bankAction";
import imgOne from '../../assets/image/cancel.png'
import { Spinner } from 'native-base';
const Bankdetail = (props) => {



    useEffect(() => {
        setDataArr(props.bankDetails)
    }, [props.bankDetails]);

    const [isModalVisible, setModalVisible] = useState(false);
    const [dataArr, setDataArr] = useState([])
    const [ind, setInd] = useState('null');
    const toggleModal = (i) => {
        setModalVisible(!isModalVisible);
        setInd(i)
        // console.log(i)
    };



    // console.log(dataArr, "props.bankDetailprops.bankDetail")
    return (
        <View style={styles.views} >
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TabNavigator')}>
                        <Image source={require('../../assets/image/arrow-green.png')} style={{ height: 22, width: 22, marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Image source={{ uri: "" }} style={{ height: 100, width: 100, marginTop: 10, marginLeft: '27%' }} />
                </View>
                <Text style={{ textAlign: 'center', color: '#024da1', textDecorationLine: 'underline', fontSize: 26, marginTop: -20 }}>BANK DETAILS</Text>
                <Text style={{ textAlign: 'center', color: '#024da1', textDecorationLine: 'underline', fontSize: 14, marginTop: 20 }}>Click on Bank for more Detail</Text>



                <Modal isVisible={isModalVisible}
                    onBackdropPress={() => { toggleModal({}) }}
                    style={{
                        borderRadius: 20
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => { toggleModal({}) }}>
                            <Image source={imgOne} style={{ height: 20, width: 20, margin: 5 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{

                        backgroundColor: ind.bgColor ? ind.bgColor : '#fffff', borderRadius: 20
                    }}>
                        <Image source={{ uri: ind.img }} style={{ height: 100, width: 200, marginVertical: 20, borderRadius: 20 }}
                        />
                        <View style={{ marginBottom: 10 }}>

                            {ind.detail && ind.detail.map((items, ind) => {
                                return <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 2 }}>
                                    <Text style={{ color: 'white', width: '25%', fontSize: 12 }}>{items.name}</Text>
                                    <View style={{ width: '73%', marginLeft: 2 }}>
                                        <Text style={{ color: 'white', fontSize: 12 }}>{items.value}</Text>
                                    </View>
                                </View>
                            })}
                        </View>
                    </View>

                </Modal>

                <View style={{ marginTop: 20, width: '90%', alignSelf: 'center' }}>


                    <View style={styles.mainView}>
                        {
                            dataArr.length === 0 ?
                                <View style={{ marginLeft: Dimensions.get('window').width / 2.5 }}>
                                    <Spinner color='green' />
                                </View>
                                :
                                <FlatList
                                    numColumns={3}
                                    keyExtractor={(item, index) => index.toString()}
                                    style={{ flex: 1, marginBottom: 80 }}
                                    data={dataArr}
                                    initialNumToRender={10}
                                    renderItem={({ item, index }) => {
                                        const { postImages } = item;
                                        return (<View style={styles.icons} key={index}>
                                            <TouchableOpacity
                                                onPress={() => toggleModal(item)}
                                            >
                                                <Image source={{ uri: item.icon }} style={styles.iconImg} />
                                            </TouchableOpacity>
                                        </View>
                                        )
                                    }}
                                />
                        }
                    </View>
                </View>
                <TouchableOpacity style={{ width: 200, height: 100 }}

                >
                    <Image source={require('../../assets/image/paypal.png')} style={styles.imagePaypal} resizeMode={'contain'} />
                </TouchableOpacity>
                <View style={{ width: 200, height: 100, marginBottom: 50 }}>
                    <Image source={require('../../assets/image/contact.png')} style={styles.imagePaypal} resizeMode={'contain'} />
                    {/* </TouchableOpacity> */}
                </View>
            </ScrollView>

        </View>
    );
};
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    imagePaypal: {
        flex: 1,
        alignSelf: 'stretch',
        width: win.width,
        height: win.height,
    },
    icons: { width: '33%', alignItems: 'center', marginTop: 20 }, mainView: { flex: 1, flexDirection: 'row', flexWrap: 'wrap' },
    iconImg: { width: 100, height: 90, alignSelf: 'center' }, views: { flex: 1, backgroundColor: '#e8e8e9', height: '100%' }
});
function mapStateToProp(state) {
    // console.log(state, "state state state ")
    return {
        bankDetails: state.bankReducers.bankDetail,
    };
}
function mapDispatchToProp(dispatch) {
    return {
        // bankDetailGetss: () => {
        //     dispatch(bankDetailGet());
        // },
    };
}
export default connect(mapStateToProp, mapDispatchToProp)(Bankdetail);
