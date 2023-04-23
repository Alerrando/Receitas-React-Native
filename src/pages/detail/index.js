import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import { Instructions } from '../../components/Instructions';
import { Ingredients } from '../../components/Ingredients';

export function Detail(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ 
            title: route.params?.item ? route.params?.item.name : 'Detalhes da receita',
            headerRight: () => (
                <Pressable onPress={() => {}}>
                    <Entypo name='heart' size={28} color={"#f41"} />
                </Pressable>
            )
    })
    }, [route.params?.item, navigation])

    

    return(
        <ScrollView style={styles.container}>
            <Pressable onPress={() => {}}>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={44} color="#FAFAFA" />
                </View>
                <Image source={{ uri: route.params?.item.cover }} style={styles.containerImg} />
            </Pressable>

            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.textH1}>{route.params?.item.name}</Text>
                    <Text style={styles.text}>{`ingredientes (${route.params?.item.ingredients.length + 1})`}</Text>
                </View>

                <Pressable>
                    <Feather name='share-2' size={24} color="#121" />
                </Pressable>
            </View>

            <Ingredients />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 20,
    },
    
    containerImg: {
        borderRadius: 14,
        height: 200,
        width: "100%",
    },

    playIcon: {
        alignItems: "center",
        bottom: 0,
        justifyContent: "center",
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 100,
    },

    headerDetails: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 14,
    },

    textH1: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 4,
    },

    text: {
        fontSize: 18,
        fontWeight: "400",
    },
})