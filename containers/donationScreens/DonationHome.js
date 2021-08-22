
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar, ImageBackground, FlatList, Image, TouchableOpacity, PermissionsAndroid, Platform, AsyncStorage
} from 'react-native';
import Saylanilogo from '../../assets/image/logo.png'
import menu from '../../assets/image/menu.png';
import { currencyGet } from "../../config/Redux/actions/donaAction";
import { connect } from "react-redux";
const DonationHome = (props) => {
    const [posts, setposts] = useState([
        { view: true, name: 'DONATION', img: { uri: "" }, routeName: 'DonationForm', wid: 40, hei: 40, mrtp: 10, meth: 'single', type: 'donation', firItem: 'Donation', val: 1, ind: 0 },
        { view: true, name: 'SADQA\nSERVICE', img: { uri: '' }, routeName: 'Sadqa', wid: 60, hei: 50, mrtp: 0, meth: 'multi', type: 'sadqa', firItem: 'Goat (5500)', val: 5500, ind: 1 },
        { view: true, name: 'AQIQA\nSERVICE', img: { uri: '' }, routeName: 'Aqiqa', wid: 60, hei: 50, mrtp: 0, meth: 'multi', type: 'aqiqa', firItem: 'Goat (8000)', val: 8000, ind: 2 },
        { view: false, name: 'COVID-19', img: { uri: '' }, routeName: 'Covid', wid: 60, hei: 40, mrtp: 10, meth: 'multi', type: 'covid', firItem: 'Covid-19 Rashan Bag Rs.(1500)', val: 1500, ind: 3 },
        // // LEFT
        { view: false, name: 'RAMADAN\nSEHRI & IFTARI', img: { uri: '' }, routeName: 'RamadanSehri', wid: 60, hei: 50, mrtp: 0, meth: 'multi', type: 'ramSehri', firItem: 'Sehri (70)', val: 70, ind: 4 },
        { view: false, name: 'RAMADAN\nRATION', img: { uri: '' }, routeName: 'RamadanRation', wid: 50, hei: 50, mrtp: 0, meth: 'multi', type: 'ramRation', firItem: 'Ramadan Package (4500)', val: 4500, ind: 5 },
        { view: true, name: 'ZAKAT', img: { uri: '' }, routeName: 'Zakat', wid: 50, hei: 50, mrtp: 0, meth: 'single', type: 'zakat', firItem: 'Zakat', val: 1, ind: 6 },

        { view: true, name: 'EDUCATION', img: { uri: '' }, routeName: 'Education', wid: 50, hei: 50, mrtp: 0, meth: 'single', type: 'education', firItem: 'Education', val: 1, ind: 7 },
        // LEFT
        { view: true, name: 'KAFALAT', img: { uri: '' }, routeName: 'Kafalat', wid: 40, hei: 40, mrtp: 10, meth: 'single', type: 'kafalat', firItem: 'Rashan', val: 1, ind: 8 },
    ]);
    useEffect(() => {
        props.currencyGet()
    }, []);

    const openDrawer = () => {
        props.navigation.openDrawer();
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: '' }} style={styles.image}>
                    <StatusBar translucent backgroundColor='#8dc63f' />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#024da1', }}>

                        <TouchableOpacity onPress={() => openDrawer()} style={{ backgroundColor: '#024da1', }}>
                            <Image source={menu} style={{ height: 25, width: 25, marginLeft: -10, marginTop: 45 }} />
                        </TouchableOpacity>
                        <Image source={Saylanilogo} style={{ height: 50, width: 200, marginTop: 35 }} />
                        <View />
                    </View>
                    <View style={styles.headView}>
                        <Text style={styles.donateHead}>DONATE</Text>
                        <Text style={styles.donateHeadTwo}>and make a difference</Text>
                    </View>
                    <View style={styles.dtView}>
                        <View style={styles.dtViewTwo}>

                            <View style={styles.dtList}>
                                <FlatList
                                    numColumns={3}
                                    keyExtractor={(item, index) => index.toString()}
                                    style={{ flex: 1, marginBottom: 80 }}
                                    data={posts}
                                    renderItem={({ item, index }) => {
                                        return item.view ? <View style={{ width: '33%', height: 70, alignItems: 'center', marginTop: 20 }} key={index}>
                                            <TouchableOpacity
                                                onPress={() => props.navigation.navigate('DonationForm', { val: item.val, type: item.type, meth: item.meth, firItem: item.firItem, ind: item.ind })}

                                            >
                                                <Image source={item.img} style={{ width: item.wid, height: item.hei, alignSelf: 'center', marginTop: item.mrtp }} />
                                                <Text style={{ color: '#61BB46', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>

                                            </TouchableOpacity>
                                        </View>
                                            : null
                                    }}
                                />
                            </View>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};


const mapStateToProps = state => {
    return {
        currencyData: state.donaReducer.currencyData,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        currencyGet: () => dispatch(currencyGet()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DonationHome);

// export default DonationHome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    headView: { flex: 1.5, backgroundColor: '#024da1', borderBottomRightRadius: 100, justifyContent: 'center', alignItems: 'center' },
    donateHead: { fontSize: 36, color: '#61BB46', fontWeight: 'bold' }, donateHeadTwo: { fontSize: 24, color: '#61BB46', fontWeight: 'bold' },
    dtView: { flex: 3, backgroundColor: '#e8e8e9', borderTopLeftRadius: 100 }, dtViewTwo: { marginTop: 50, width: '90%', alignSelf: 'center' }, dtList: { flexDirection: 'row', flexWrap: "wrap", }
});
