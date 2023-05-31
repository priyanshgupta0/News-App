// React Native Counter Example using Hooks!

import React, { useState, useEffect } from 'react';
import { View, FlatList, Modal, ScrollView, Text, Button, StyleSheet, ActivityIndicator, Dimensions, Switch, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import styles from '../Styles/stylesheet';


const mobileW = Dimensions.get("screen").width;



const Test = ({ route }) => {

    const [Name, setName] = useState(route.params.name);
    const [Author, setAuthor] = useState(route.params.author);
    const [Title, setTitle] = useState(route.params.title);
    const [Description, setDescription] = useState(route.params.description);
    const [Url, setUrl] = useState(route.params.url);
    const [UrlToImage, setUrlToImage] = useState(route.params.urlToImage);
    const [PublishedAt, setPublishedAt] = useState(route.params.publishedAt);
    const [Content, setContent] = useState(route.params.content);

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={[styles.viewStyle]}>
                    <Text style={[styles.Textstyle, { backgroundColor: "cyan" }]} >{Name}</Text>
                    {UrlToImage ?
                        <Image
                            source={{
                                uri:
                                    UrlToImage,
                            }}
                            style={[styles.SinglePageImageStyle]}
                        />
                        : null
                    }
                    <Text style={[styles.SinglePageTextStyle, { fontSize: mobileW * .06 }]} >{Title}</Text>
                    <Text style={[styles.SinglePageTextStyle, { alignSelf: 'flex-end' }]} >By : {Author}</Text>
                    <Text style={[styles.SinglePageTextStyle, { fontWeight: '400' }]} >{Description}</Text>
                    <Text style={[styles.SinglePageTextStyle, { alignSelf: 'flex-end' }]} >Published At : {PublishedAt}</Text>
                    <Text style={[styles.SinglePageTextStyle, { alignSelf: 'flex-start', fontSize: mobileW * .05 }]} >Content</Text>
                    <Text style={[styles.SinglePageTextStyle, { fontWeight: '400' }]} >{Content}</Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default Test;