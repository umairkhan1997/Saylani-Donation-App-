import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image, FlatList, Dimensions
} from 'react-native';
import { Spinner } from 'native-base';
import { connect } from "react-redux";
import { saylaniNewsGet } from "../../config/Redux/actions/newsAction";


const News = (props) => {


    useEffect(() => {
        props.saylaniNewsGet();

    }, []);

    useEffect(() => {
        setDataArr(props.saylaninewsDatas)
    }, [props.saylaninewsDatas]);

    const [dataArr, setDataArr] = useState([])
    const [ltUpArr, setltUpArr] = useState([{ img: { uri: '' }, date: '02-14-2021', head: 'President AJK Sardar Masood Khan Visited Saylani Welfare' },
        , { img: { uri: '' }, date: '01-14-2021', head: '40 military officers from 12 different countries visited the Saylani Welfare' }
        , { img: { uri: '' }, date: '03-14-2021', head: 'Federal Minister Asad Umar visited Saylani Welfare International Trust' }
    ])

    return (

        <View style={{ marginTop: 20 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    dataArr.length === 0 ?
                        <View style={{ marginLeft: Dimensions.get('window').width / 2.5 }}>
                            <Spinner color='green' />
                        </View>
                        :
                        <FlatList
                            numColumns={3}
                            keyExtractor={(item, index) => index.toString()}
                            style={{ flex: 1 }}
                            data={dataArr}
                            renderItem={({ item, index }) => {
                                return (<View style={{ marginHorizontal: 10, width: 320, }} key={index}>
                                    <Image source={{ uri: item.multiple_image[0] }} style={{ width: '100%', height: 160 }} />
                                    <View style={{ width: '100%', backgroundColor: 'white', padding: 10 }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 2, color: 'black', }}>{item.name}</Text>
                                    </View>

                                </View>
                                )

                            }}
                        />
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    defTxt: { width: '90%', alignSelf: 'center' }, ltUp: { marginTop: 20, backgroundColor: '#cee3fb', height: 280 },
    ltTxt: { color: '#61BB46', marginLeft: '2.5%', marginTop: 10, fontWeight: 'bold', fontSize: 18 },
    wwaStl: { color: '#61BB46', marginLeft: '2.5%', fontWeight: 'bold', fontSize: 18 }
});
function mapStateToProp(state) {
    // console.log(state, "state state state ")
    return {
        saylaninewsDatas: state.newReducer.saylaninewsData
    };
}
function mapDispatchToProp(dispatch) {
    return {
        saylaniNewsGet: () => {
            dispatch(saylaniNewsGet());
        }
    };
}
export default connect(mapStateToProp, mapDispatchToProp)(News);
