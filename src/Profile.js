import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile=()=>{
        return (
            <>
                <View style={styles.conyainer}>
                    <Text>Profile Screens</Text>
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

export default Profile;