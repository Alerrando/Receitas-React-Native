import { View, Text, StyleSheet } from 'react-native'

export function Logo(){
    return (
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
    logo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoArea: {
        alignSelf: 'flex-start',
        backgroundColor: "#4CBE6C",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
        marginBottom: 8,
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
    },
})