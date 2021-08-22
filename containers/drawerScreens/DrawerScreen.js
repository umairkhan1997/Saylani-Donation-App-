import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text, Image, TouchableOpacity, Linking, Share
} from 'react-native';

import Saylani from '../../assets/image/Saylani-logo.png'

import share from '../../assets/image/share.png'
import money from '../../assets/image/money.png'

const DrawerContent = (props) => {
    const shareOptions = {
        title: 'Title',
        message: 'https://play.google.com/store/apps/details?id=com.saylani.salma.myapplication', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'https://www.saylaniwelfare.com/',
        subject: 'Saylani Welfare App'
    };

    const onSharePress = () => Share.share(shareOptions);
    return (
        <>
            <SafeAreaView style={{ backgroundColor: 'white', height: '100%', marginTop: 22, width: '100%' }}>
                <Image source={Saylani} style={{ height: 50, width: '80%', marginLeft: '10%', marginTop: 40 }} />
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View style={{}}>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Aboutus')}>
                                <View style={styles.listOneStl}>
                                    <Image source={{ uri: "" }} style={{ height: 30, width: 50, marginRight: 0 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5 }}>WHO WE ARE</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={{ borderBottomWidth: 2, borderBottomColor: '#1371b8', width: '78%' }} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Services')}>
                                <View style={styles.listView}>
                                    <Image source={{ uri: "" }} style={{ height: 30, width: 50, marginRight: 0 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5 }}>WHAT WE DO</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={styles.bbb} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Bankdetail')}>
                                <View style={styles.listView}>
                                    <Image source={{ uri: "" }} style={{ height: 30, width: 50, marginRight: 0 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5 }}>BANK DETAILS</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={styles.bbb} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('NetworkBranch')}>
                                <View style={styles.listView}>
                                    <Image source={{ uri: "" }} style={{ height: 25, width: 45, marginRight: 0 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5, marginLeft: 6 }}>OUR NETWORK</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={styles.bbb} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => onSharePress()}>
                                <View style={styles.listView}>
                                    <Image source={share} style={{ height: 22, width: 22, marginRight: 20, marginLeft: 10 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5 }}>SHARE</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={styles.bbb} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Donation')}>
                                <View style={styles.listView}>
                                    <Image source={money} style={{ height: 22, width: 22, marginRight: 20, marginLeft: 10 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5 }}>DONATE NOW</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={styles.bbb} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 40 }}>
                        <View>
                            <TouchableOpacity onPress={() => { Linking.openURL('https://www.saylaniwelfare.com/') }}>
                                <View style={styles.listView}>
                                    <Image source={{ uri: "" }} style={{ height: 30, width: 50, marginRight: 0 }} />
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1371b8', marginTop: 5 }}>VISIT OUR WEBSITE</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', width: '90%' }}>
                                    <View style={styles.bbg} />
                                    <View style={styles.bbb} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    listView: { marginLeft: 20, flexDirection: 'row', marginTop: 20 },
    listOneStl: { marginLeft: 20, flexDirection: 'row', marginTop: 50 }, bbg: { borderBottomWidth: 2, borderBottomColor: '#8DC63F', width: '18%' },
    bbb: { borderBottomWidth: 2, borderBottomColor: '#1371b8', width: '78%' }
});

export default DrawerContent;
