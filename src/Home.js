import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home=()=>{
        return (
            <>
                <View style={styles.conyainer}>
                     <Text>Home Screens</Text>
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

export default Home;