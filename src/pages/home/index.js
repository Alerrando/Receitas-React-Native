import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Logo } from "../../components/Logo";
import { useEffect, useState } from "react";
import { FoodList } from "../../components/FoodList";
import api from '../../services/api'

export function Home() {
  const [inputValue, setInputValue] = useState("");
  const [foods, setFoods] = useState([])

  useEffect(() => {
    (async function(){
      try {
        const response = await api.get("/foods");
        setFoods(response.data)
      } catch (error) {
        console.log(error)
      }
    })();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>Que combine com vc</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite o nome da comida..."
          style={styles.input}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" color="#4CBE6C" size={28} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerReceita}>
        <FlatList
          data={foods}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FoodList item={item} />}
        />
      </View>

    </SafeAreaView>
  );
}

function handleSearch() {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FF",
    flex: 1,
    height: 'auto',
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 36,
  },

  containerReceita: {
    display: 'flex',
    height: "auto",
    flexDirection: "column",
  },

  form: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ECECEC",
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    marginTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
    width: "100%",
  },

  input: {
    height: 54,
    maxWidth: "90%",
    width: "90%",
  },

  title: {
    color: "#0E0E0E",
    fontSize: 26,
    fontWeight: "bold",
  },
});
