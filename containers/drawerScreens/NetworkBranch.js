import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, TouchableOpacity, Image, Dimensions, ImageBackground, FlatList, Linking
} from 'react-native';
import { connect } from "react-redux";
import { branchesGet, branchesIntGet } from "../../config/Redux/actions/branchAction";
import { Spinner } from 'native-base';
const NetworkBranch = (props) => {


    const [dataArr, setDataArr] = useState([])
    const [intBranchArr, setIntBranchArr] = useState([])
    useEffect(() => {
        props.branchesGet();
        props.branchesIntGet();
    }, []);
    useEffect(() => {
        setDataArr(props.branchesDatas)
    }, [props.branchesDatas]);
    useEffect(() => {
        setIntBranchArr(props.intBranchesData)
    }, [props.intBranchesData]);


    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8e8e9', flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TabNavigator')}>
                        <Image source={require('../../assets/image/arrow-green.png')} style={{ height: 22, width: 22, marginTop: 50, marginLeft: 20 }} />
                    </TouchableOpacity>
                    <Image source={{ uri: "" }} style={{ height: 150, width: 100, marginTop: 10, marginLeft: '27%' }} />
                </View>


                {/* ????MAIN HEADINNG??? */}
                <Text style={{ color: '#024da1', textAlign: 'center', fontSize: 30, textDecorationLine: 'underline' }}>OUR NETWORK</Text>

                <View style={styles.mainView}>
                    <Text style={styles.ntStl}>National Office</Text>
                    <View style={styles.btmLineOne} />
                </View>
                <View style={styles.listView}>
                    <FlatList
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ flex: 1 }}
                        data={dataArr}
                        renderItem={({ item, index }) => {
                            const { postImages } = item;
                            return (<View style={{ width: '33%', marginTop: 5 }} key={index}>
                                <Text style={styles.cityStl}>{item.city}</Text>
                                <Text style={styles.txtStl}>{item.zone}</Text>
                                <Text style={styles.txtStl}>{item.address}</Text>
                                {/* <TouchableOpacity onPress={() => { Linking.openURL(`tel:${item.ph}`) }}> */}
                                <Text style={styles.txtStl}>{item.ph}</Text>
                                {/* </TouchableOpacity> */}
                                <Text style={styles.txtStl}>{item.fax}</Text>
                                <Text style={styles.txtStl}>{item.charity}</Text>
                            </View>
                            )
                        }}
                    />
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.intStl}>International Offices</Text>
                    <View style={{ width: '51%', borderBottomColor: '#61BB46', borderBottomWidth: 1, }} />
                </View>
                <View style={styles.listView}>
                    {
                        intBranchArr.length === 0 ?
                            <View style={{ marginLeft: Dimensions.get('window').width / 2.5 }}>
                                <Spinner color='green' />
                            </View>
                            :
                            <FlatList
                                numColumns={3}
                                keyExtractor={(item, index) => index.toString()}
                                style={{ flex: 1 }}
                                data={intBranchArr}
                                renderItem={({ item, index }) => {
                                    const { postImages } = item;
                                    return (<View style={{ width: '33%', marginTop: 5 }} key={index}>
                                        <Text style={styles.cityStl}>{item.city}</Text>
                                        <Text style={styles.txtStl}>{item.zone}</Text>
                                        <Text style={styles.txtStl}>{item.address}</Text>
                                        {/* <TouchableOpacity onPress={() => { Linking.openURL(`tel:${item.ph}`) }}> */}
                                        <Text style={styles.txtStl}>{item.ph}</Text>
                                        {/* </TouchableOpacity> */}
                                        <Text style={styles.txtStl}>{item.charity}</Text>
                                        <Text style={styles.txtStl}>{item.link}</Text>
                                    </View>
                                    )
                                }}
                            />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};
const win = Dimensions.get('window');
const styles = StyleSheet.create({
    mainView: { width: '90%', alignSelf: 'center', marginTop: 30, flexDirection: 'row', position: 'relative' },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },
    cityStl: {
        fontSize: 10,
        fontWeight: "bold"
    },
    txtStl: {
        fontSize: 8,
        marginTop: 2
    },
    ntStl: { color: '#61BB46', fontSize: 18, width: '40%', }, btmLineOne: { width: '60%', borderBottomColor: '#61BB46', borderBottomWidth: 1, },
    intStl: { color: '#61BB46', fontSize: 18, width: '49%', }, listView: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', width: '90%', marginLeft: '5%', marginTop: 20 }
});

function mapStateToProp(state) {
    return {
        branchesDatas: state.branchesReducer.branchesData,
        intBranchesData: state.branchesReducer.intBranchesData
    };
}
function mapDispatchToProp(dispatch) {
    return {
        branchesGet: () => {
            dispatch(branchesGet());
        },
        branchesIntGet: () => {
            dispatch(branchesIntGet());
        }
    };
}
export default connect(mapStateToProp, mapDispatchToProp)(NetworkBranch);
