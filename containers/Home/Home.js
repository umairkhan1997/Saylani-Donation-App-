import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, FlatList, Image, TouchableOpacity, Dimensions
} from 'react-native';
import menu from '../../assets/image/menu.png';
import Saylanilogo from '../../assets/image/logo.png'
import { SliderBox } from "react-native-image-slider-box";
import { connect } from "react-redux";
import { homeSliderGet } from "../../config/Redux/actions/homeAction";
import { bankDetailGet } from "../../config/Redux/actions/bankAction";
import News from './NewsScreen'
import { Spinner } from 'native-base';
const Home = (props) => {


    useEffect(() => {
        props.homeSliderGets();
        props.bankDetailGetss();
    }, []);
    useEffect(() => {
        let imgs = []
        for (let hsData of props.homeSliderDatas) {
            imgs.push(hsData.imgUrl)

        }
        setDataArr(imgs)
        imgs = []
    }, [props.homeSliderDatas]);

    const [dataArr, setDataArr] = useState([])
    const openDrawer = () => {
        props.navigation.openDrawer();
    };
    const closeDrawer = () => {
        props.navigation.closeDrawer();
    };

    return (

        <View style={{ flex: 1, marginBottom: 70, }}>
            <StatusBar translucent backgroundColor='#8dc63f' />
            <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#e8e8e9', }}>

                    <TouchableOpacity onPress={() => openDrawer()} style={{}}>
                        <Image source={menu} style={{ height: 25, width: 25, marginLeft: -10, marginTop: 20 }} />
                    </TouchableOpacity>
                    <Image source={Saylanilogo} style={{ height: 50, width: 200, marginTop: 5 }} />
                    <View />
                </View>
                <View style={{ height: '100%', backgroundColor: '#e8e8ea' }} >
                    <ScrollView showsHorizontalScrollIndicator={false}>

                        <View style={{ flex: 1, height: 170 }}>
                            {
                                dataArr.length === 0 ?
                                    <View style={{ marginLeft: Dimensions.get('window').width / 40 }}>
                                        <Spinner color='green' />
                                    </View>
                                    :
                                    <SliderBox
                                        images={dataArr}
                                        autoplay
                                        ImageComponentStyle={{ width: '100%', height: 200 }}
                                        dotColor="#61BB46"
                                        inactiveDotColor="#90A4AE"
                                        // disableOnPress={true}
                                        resizeMode={'contain'}
                                    />
                            }
                        </View>
                        <View style={{ marginTop: 20, }}>
                            <Text style={styles.wwaStl}>
                                WHO WE ARE
                     </Text>
                            <Text style={styles.defTxt}>
                                Alhamdo-llilah! By the grace of Allah, this organization is serving the poor and
                                the distressed people of our society since 5th May 1999. We are a part of a society where the
                                majority of the people residing in villages and
                                towns are living below the poverty line and even deprived of the basic necessities of life.
                     </Text>
                            <Text style={styles.defTxt}>
                                Now let us take a look at the life of the people living in cities, where unfortunately
                                living conditions are not much different. If we examine their family size, we find a very
                                painful situation, where in a
                                small rented house the husband and the wife with their four children survive with a very low earning.
                     </Text>
                        </View>
                        <View style={styles.ltUp}>
                            <Text style={styles.ltTxt}>
                                LATEST UPDATE
                     </Text>
                            <News />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    defTxt: { width: '90%', alignSelf: 'center', lineHeight: 20 }, ltUp: { marginTop: 20, backgroundColor: '#cee3fb', height: 320 },
    ltTxt: { color: '#61BB46', marginLeft: '2.5%', marginTop: 10, fontWeight: 'bold', fontSize: 18 },
    wwaStl: { color: '#61BB46', marginLeft: '2.5%', fontWeight: 'bold', fontSize: 18 }, drawer: { height: 40, width: 40, marginLeft: 5 }
});
function mapStateToProp(state) {
    // console.log(state, "state state state ")
    return {
        homeSliderDatas: state.homeReducer.homeSliderData
    };
}
function mapDispatchToProp(dispatch) {
    return {
        homeSliderGets: () => {
            dispatch(homeSliderGet());
        },
        bankDetailGetss: () => {
            dispatch(bankDetailGet());
        },
    };
}
export default connect(mapStateToProp, mapDispatchToProp)(Home);
