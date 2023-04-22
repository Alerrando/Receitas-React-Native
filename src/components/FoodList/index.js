import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export function FoodList({ item }){
    const navigation = useNavigation();

    return(
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handleNavigate}>
            <Image source={{ uri: item.cover }} style={styles.containerImg} />

            <View style={styles.containerInfos}>
                <Text style={styles.containerInfosTextH1}>{item.name}</Text>
                
                <View style={styles.containerInfosIngredients}>
                    <Text style={styles.containerInfosText}>{`${item.ingredients.length + 1} ingredientes`}</Text>
                    <Text style={styles.containerInfosText}>|</Text>
                    <Text style={styles.containerInfosText}>{`${item.time} min`}</Text>
                </View>
            </View>

            <LinearGradient 
                style={styles.gradient} 
                colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']} 
            />

        </TouchableOpacity>
    )

    function handleNavigate(){
        navigation.navigate('Detail')
    }
}

const styles = StyleSheet.create({
    container: {
        color: "#fff",
        height: 200,
        marginBottom: 14,
        position: "relative",
        width: '100%',
    },

    containerImg: {
        backgroundColor: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        borderRadius: 14,
        height: "100%",
        width: "100%",
    },

    containerInfos: {
        bottom: 0,
        padding: 31,
        position: 'absolute',
        zIndex: 100,
    },

    containerInfosIngredients: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 9,
        width: 161,
    },

    containerInfosText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "400",
    },

    containerInfosTextH1: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "bold",
    },

    gradient: {
        borderRadius: 14,
        bottom: 0,
        height: "55%",
        left: 0,
        right: 0,
        position: "absolute",
    },
})