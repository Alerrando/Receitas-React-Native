import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

export function Detail(){
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ 
            title: route.params?.item ? route.params?.item.name : 'Detalhes da receita',
            headerRight: () => (
                <Pressable onPress={() => console.log("Testando")}>
                    <Entypo name='heart' size={28} color={"#f41"} />
                </Pressable>
            )
    })
    }, [route.params?.item, navigation])

    return(
        <View style={styles.container}>
            <Text>{route.params?.item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
    }
})