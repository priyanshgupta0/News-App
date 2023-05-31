// React Native Counter Example using Hooks!

import React, { useState, useEffect } from 'react';
import { View, FlatList, Modal, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles/stylesheet';




const Test = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [info, setinfo] = useState();


    const getAPIData = async () => {
        try {
            const url = "https://newsapi.org/v2/everything?q=keyword&apiKey=a162607396ac47fba7412cf03f9dac77";
            let result = await fetch(url);
            result = await result.json();
            console.log(result);
            setData(result);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAPIData();
        // console.log("data");
    }, []);

    useEffect(() => {
        console.log(data)
        console.log("useeffect")
    }, [data])

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "black",
                }}
            />
        );
    }

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.CardStyle]}>
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ flex: 1 }}>
                        {item.urlToImage ?
                            <Image
                                source={{
                                    uri:
                                        item.urlToImage,
                                }}
                                style={[styles.CardImageStyle]}
                            /> : <Image
                                source={{
                                    uri: data.articles[0].urlToImage,
                                }}
                                style={[styles.CardImageStyle]}
                            />
                        }
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.CardTitleStyle]}>{item.title}</Text>
                        <Text style={[styles.CardTitleStyle, { fontWeight: 'bold' }]}>{"By " + item.author}</Text>
                        <Text style={[styles.CardTitleStyle, { fontWeight: 'bold' }]}>{"Published At : "}</Text>
                        <Text style={[styles.CardTitleStyle, { fontWeight: '500', fontSize: Dimensions.get("screen").width * 0.03 }]}>{item.publishedAt}</Text>
                    </View>
                </View>
                <View>
                    <Text style={[styles.CardTitleStyle, { fontWeight: '400' }]}>{item.description}</Text>
                </View>
            </View >
        );
    };

    return (

        <SafeAreaView style={{ flex: 1 }}>

            <View style={[styles.viewStyle]}>
                <Text style={[styles.Textstyle, { backgroundColor: "cyan" }]} >Daily Tech NEWS!</Text>
                {/* {
            data ? <View>
              <Image
                source={{
                  uri:
                    data.articles[0].urlToImage,
                }}
                style={{ width: Dimensions.get("window").width * .8, height: Dimensions.get("window").width * .8, margin: Dimensions.get("window").width * .1 }}
              />
              <Text style={[styles.Textstyle]} >{data.totalResults}</Text>
              <Text style={[styles.Textstyle]} >{data.articles[0].author}</Text>
              <Text style={[styles.Textstyle]} >{data.articles[0].title}</Text>
              <Text style={[styles.Textstyle]} >{data.articles[0].description}</Text>
              <Text style={[styles.Textstyle]} >{data.articles[0].url}</Text>
              <Text style={[styles.Textstyle]} >{data.articles[0].publishedAt}</Text>
              <Text style={[styles.Textstyle]} >{data.articles[0].content}</Text>

            </View> : null
          } */}

                {
                    data ?
                        <FlatList
                            data={data.articles}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.url}
                            ItemSeparatorComponent={FlatListItemSeparator}
                        />
                        : <View style={[styles.ActivityIndViewstyle]}>
                            <ActivityIndicator
                                color="cyan"
                                size="large"
                            />
                        </View>
                }
            </View>
        </SafeAreaView>
    );
};


export default Test;