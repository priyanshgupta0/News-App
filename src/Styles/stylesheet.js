import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'white',
        flex: 1,
    },
    Textstyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: mobileW * 0.08,
    },
    ActivityIndViewstyle: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
    },
    CardStyle: {
        // height: mobileW * .6,
        mobileW: mobileW * .08,
        margin: mobileW * .02
    },
    CardTitleStyle: {
        color: 'black',
        fontWeight: '600',
        textAlign: 'left',
        justifyContent: 'center',
        fontSize: mobileW * 0.04,
        marginBottom: mobileW * .02    // flex: 6,
    },
    CardImageStyle: {
        height: mobileW * .4,
        width: mobileW * .4,
        // flex: 4,
        marginRight: mobileW * .03
    },
})

export default styles;