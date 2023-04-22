import { Image, StyleSheet, Text, View } from "react-native";

export function FoodList({ item }){

    return(
        <View style={styles.container}>
            <Image source={{ uri: item.cover }} style={styles.containerImg} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: "#fff",
        height: 200,
        marginBottom: 14,
        width: '100%',
    },

    containerImg: {
        borderRadius: 14,
        height: "100%",
        width: "100%",
    }
})