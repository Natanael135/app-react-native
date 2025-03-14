import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  const STORAGE_KEY = "@participants";

  //lendo os participantes salvos na memoria
  useEffect(() => {
    async function loadParticipants() {
      const storedParticipants = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedParticipants) {
        setParticipants(JSON.parse(storedParticipants));
      }
    }
    loadParticipants();
  }, []);
  //salvando participantes na memoria
  useEffect(() => {
    async function saveParticipants() {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
    }
    saveParticipants();
  }, [participants]);

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      setParticipantName("");
      return Alert.alert("Adicionar", "Esse Participante já foi adicionado");
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) => [
            ...prevState.filter((participants) => participants !== name),
          ]),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 14 de Março de 2025</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
