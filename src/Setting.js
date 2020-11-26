import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Setting =()=>{
        return (
            <>
                <View style={styles.conyainer}>
                    <Text>Setting Screens</Text>
                </View>
            </>
        )
    }

const styles =StyleSheet.create({
    conyainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default Setting;