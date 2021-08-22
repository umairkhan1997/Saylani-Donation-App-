import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity, Image, ImageBackground
} from 'react-native';



const Aboutus = (props) => {
    return (
        <>

            <SafeAreaView style={{ backgroundColor: '#e8e8ea' }}>
                <ScrollView>

                    <View style={{ position: 'absolute', top: 36, left: 16, zIndex: 3, backgroundColor: 'white', height: 30, width: 30, borderRadius: 30, }}>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TabNavigator')} style={{ position: 'absolute', top: 20, left: 20, zIndex: 3, }}>
                        <Image source={require('../../assets/image/arrow-green.png')} style={{ height: 22, width: 22, marginTop: 20 }} />
                    </TouchableOpacity>
                    <View >
                        <ImageBackground source={{ uri: 'https://res.cloudinary.com/di3ippvmb/image/upload/v1621948489/2018-30-111543574214_mpebp4.jpg' }} style={{ width: '100%', height: 300, resizeMode: 'cover' }}>

                        </ImageBackground>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: '5%', marginTop: 10, fontSize: 16 }}>
                            ABOUT SAYLANI WELFARE
</Text>
                        <Text style={styles.txtStl}>
                            Saylani Welfare International Trust is one of the leading NGO of Pakistan, operating with an aim to provide free and the best in quality services in the areas such as Education, Health Care, Food & Social Welfare, and Supply of Clean Drinking Water to the deserving and distressed. More than 250,000 people are served by Saylani every day with rich food with dignity and grace, thousands of ailing people are given hope of life through medical proficiency, thousands of deviated people are enlightened through spiritual guidance, thousands of orphans and widows are facilitated in different spheres of life. From dawn to dusk, Saylani’s team of about 4,500 employees at more than 250 branches worldwide, is striving for the deprived without discrimination..
</Text>
                    </View>

                    <View >
                        <ImageBackground source={{ uri: 'https://res.cloudinary.com/di3ippvmb/image/upload/v1621859379/maulana-bashir-farooqi-qadri_gzdbdc.jpg' }} style={{ width: '100%', height: 300 }}>
                        </ImageBackground>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: '5%', marginTop: 10, fontSize: 16 }}>
                            FROM THE DESK OF CHAIRMAN
</Text>
                        <Text style={styles.txtStlSec}>
                            Should be noted that Allah, who is in need of no one and nothing. Instills upon his men to give Qarz-e-Hasna because it is in man’s nature to be frugal whilst spending his wealth. Allah speaks about Qarz because it is returned and Allah promises that he will return the goodly loan by 70 folds. Allah conveys his message to the Muslim Ummah through the Holy Prophet Muhammad ﷺ prompting Muslims to spend their wealth in a certain way. He says Oh children of Adam! Trust me with your wealth. If you do so, no fire, flood or thieves will be able to rob you off your money. Instead, you will be endowed with your wealth when you most need it. He further says that the poor and weak will not remain hungry and naked except due to the negligence of the rich. Who should not be stingy in spending their money on those worse off than themselves? Allah will not only take strict accountability from those people but he will also punish them accordingly. On the day of Judgment. The rich will be humiliated because they did not help the needy. The needy will complain to Allah and say that all those men on whom you graciously bestowed the rights of wealth showed negligence in its proper use. They were busy spending on themselves and forgot about us. The ones who needed it. Allah will reply to this and say: “I swear on my respect and glory! I will bring you closer to me and push them further away.”
</Text>
                        <Text style={styles.txtStl}>
                            Alhamdulillah! Allah has accorded Saylani Welfare with the highest favor by sending those people our way who follow the teachings of the Holy Quran and Hadith. Give Zakat, Fidyah, Khairat and other donations to help us help those is need. The purpose of sending this message to you is so that you not only spread this message to others but also play your part in helping us to continue serving and helping the needy till the day of judgment.
</Text>
                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    txtStlSec: { marginBottom: 10, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: 'black', fontSize: 14, marginTop: 10, textAlign: 'justify', lineHeight: 20 },
    txtStl: { marginBottom: 50, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: 'black', fontSize: 14, marginTop: 10, textAlign: 'justify', lineHeight: 20 },
    txtsStl: { marginBottom: 0, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: '#777777', fontSize: 14, marginTop: 20 },
    abtStl: { width: '95%', marginTop: 35, borderRadius: 10, marginLeft: '2.5%', backgroundColor: '#fff' }, deskStl: { color: '#1371b8', fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }
});

export default Aboutus;
