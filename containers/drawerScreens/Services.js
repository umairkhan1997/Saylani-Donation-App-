import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text, ImageBackground,
    StatusBar, TouchableOpacity, Image
} from 'react-native';



const Services = (props) => {
    return (
        <>
            {/* <StatusBar barStyle="dark-content" /> */}
            <SafeAreaView style={{ backgroundColor: '#e8e8ea' }}>
                <ScrollView>
                    <View style={{ position: 'absolute', top: 36, left: 16, zIndex: 3, backgroundColor: 'white', height: 30, width: 30, borderRadius: 30, }}>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('TabNavigator')} style={{ position: 'absolute', top: 20, left: 20, zIndex: 3, }}>
                        <Image source={require('../../assets/image/arrow-green.png')} style={{ height: 22, width: 22, marginTop: 20 }} />
                    </TouchableOpacity>

                    {/* //SAYLANI MASS/// */}
                    <View >
                        <ImageBackground source={{ uri: '' }} style={{ width: '100%', height: 300 }}>

                        </ImageBackground>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: '5%', marginTop: 10, fontSize: 16 }}>
                            SAYLANI MASS I.T. TRAINING PROGRAM
</Text>
                        <Text style={styles.txtStl}>
                            Saylani Welfare International Trust is one of the leading NGO’s of Pakistan serving more than 125,000 persons daily in the areas of health, education, provision of food and drinking water, disaster relief etc. Our vision is to make Pakistan a global software development hub with the greatest IT minds. To achieve this goal Saylani launched its Saylani Mass I.T Training (SMIT) Program. We have more than 5,000 students currently enrolled with SMIT in Karachi and Faisalabad. A variety of courses is offered at SMIT completely free of charge. We aim to produce 10,000 software developers on a national level. Not only this will generate numerous job opportunities but will inadvertently boost Pakistan economy by USD 1 billion.
</Text>
                    </View>

                    {/* //EDUCATION/// */}
                    <View >
                        <ImageBackground source={{ uri: '' }} style={{ width: '100%', height: 300 }}>
                            {/* <Text style={{ position: 'absolute', bottom: 10, left: 20, zIndex: 3, color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                                EDUCATION
</Text> */}
                        </ImageBackground>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: '5%', marginTop: 10, fontSize: 16 }}>
                            EDUCATION
</Text>
                        <Text style={styles.txtStlSec}>
                            Supporting around 180,000 Students annually.
</Text>
                        <Text style={styles.txtStl}>
                            Education is the road to empowering children and adults to achieve their full potential and building a future that is prosperous. It is a catalyst that has the power to transform economies and change societies. Saylani’s Objective is to break barriers and help people pursue an education and be a productive part of the society. We realize its importance as a gateway to earning a living. Becoming a better human being and leading a better life. Saylani Educational services focus on providing the best learning and training programs for free. With the objective of developing minds and helping people stand on their feet.
</Text>
                    </View>


                    {/* //HEALTH CARE/// */}
                    <View >
                        <ImageBackground source={{ uri: '' }} style={{ width: '100%', height: 300 }}>
                            {/* <Text style={{ position: 'absolute', bottom: 10, left: 20, zIndex: 3, color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                                HEALTH CARE
</Text> */}
                        </ImageBackground>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: '5%', marginTop: 10, fontSize: 16 }}>
                            HEALTH CARE
</Text>
                        <Text style={styles.txtStlSec}>
                            525,000 patients treated annually.
</Text>
                        <Text style={{ marginBottom: 5, lineHeight: 20, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: 'black', fontSize: 14, marginTop: 10 }}>
                            Bridging the needs of quality healthcare is a top priority for us. The goal of Saylani Health Care Services is to build a healthy society and outreach medically underserved and neglected communities not only through provision of high quality free of cost health services & supplies but also by acting as a bridge between marginalized deserving patients and health institutions.
</Text>
                        <Text style={styles.txtStl}>To strengthen our primary healthcare system. Clinics have been set up at various Saylani Branches that provide free OPD Services, Medicines and medical equipment, specialist consultants, experienced Doctors, Physicians and Para-Medical staff are available 24/7 at the Saylani Medical & Diagnostic Centre to provide specialized treatment and medical assistance to the ailing. Specialized clinical facilities for treatment of diseases including tuberculosis, diabetes, Hepatitis and Cancer are also available.
</Text>
                    </View>


                    {/* //EDUCATION/// */}
                    <View >
                        <ImageBackground source={{ uri: '' }} style={{ width: '100%', height: 300 }}>
                            {/* <Text style={{ position: 'absolute', bottom: 10, left: 20, zIndex: 3, color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                                FOOD
</Text> */}
                        </ImageBackground>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: '5%', marginTop: 10, fontSize: 16 }}>
                            FOOD
</Text>
                        <Text style={styles.txtStlSec}>
                            100,000 people fed daily.
</Text>
                        <Text style={styles.txtStl}>
                            Determined to alleviate the burden of hunger for the poor, we have set up a Saylani Dastarkhuwan at various Saylani branches across Pakistan, where the needy are fed twice a day, every day. Although this is a very small contribution, it is our small way of removing the fear of uncertainty for the poor who often do not know whether they will have a meal to eat next or not. With our service, they know that there is always a place where they can eat 365 days a year, and no one needs to sleep hungry at night
</Text>
                    </View>


                </ScrollView>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    txtStl: { marginBottom: 50, lineHeight: 20, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: 'black', fontSize: 14, marginTop: 10 },
    txtStlSec: { marginBottom: 5, lineHeight: 20, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: 'black', fontSize: 14, marginTop: 10 },
    viewTwo: { width: '95%', marginTop: 15, borderRadius: 10, marginLeft: '2.5%', backgroundColor: '#fff' }, viewMIt: { width: '95%', marginTop: 35, borderRadius: 10, marginLeft: '2.5%', backgroundColor: '#fff' },
    mainHead: { color: '#1371b8', fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }, maintxt: { marginBottom: 0, fontFamily: 'Helvetica', width: '90%', marginLeft: '5%', color: '#777777', fontSize: 14, marginTop: 20 }

});

export default Services;
