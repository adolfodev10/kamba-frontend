import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const conversations = [
  {
    id: "1",
    name: "Ricki Krause",
    message: "Vou fingir que acredito.",
    time: "18:05",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    seen: true,
  },
  {
    id: "2",
    name: "Sidney Meredith",
    message: "Irmão, como estás?.",
    time: "18:04",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    seen: true,
  },
  {
    id: "3",
    name: "Tona Pipkin",
    message: "Tenho que colocar PIN nesta conversa.",
    time: "17:57",
    avatar: "https://randomuser.me/api/portraits/women/20.jpg",
    seen: true,
  },
  {
    id: "4",
    name: "Dominique Lash",
    message: "Tenho que colocar PIN nesta conversa.",
    time: "17:43",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    seen: false,
  },
  {
    id: "5",
    name: "Lily Hatfield",
    message: "Tenho que colocar PIN nesta conversa.",
    time: "17:41",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    seen: true,
  },
  {
    id: "6",
    name: "Kim Grant",
    message: "Está bem.",
    time: "17:37",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    seen: false,
  },
  {
    id: "7",
    name: "Adela Haugen",
    message: "",
    time: "17:35",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    seen: false,
  },
];

export default function ConversationsScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/favicon.png")}
          style={styles.logo}
        />
        <View style={styles.headerIcons}>
          <Ionicons
            name="camera-outline"
            size={24}
            color="#fff"
            style={styles.icon}
          />
          <Feather
            name="more-vertical"
            size={24}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#999"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          placeholder="Pesquisar..."
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* List */}
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push("/feed")}
            style={styles.chatRow}
          >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.chatInfo}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
              <View style={styles.chatMessageRow}>
                {item.seen ? (
                  <MaterialIcons
                    name="done-all"
                    size={18}
                    color="#4EF4C2"
                    style={{ marginRight: 4 }}
                  />
                ) : (
                  <MaterialIcons
                    name="done"
                    size={18}
                    color="#999"
                    style={{ marginRight: 4 }}
                  />
                )}
                <Text style={styles.chatMessage} numberOfLines={1}>
                  {item.message}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Tabs */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home-outline" size={22} color="#fff" />
          <Text style={styles.tabText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="aperture-outline" size={22} color="#fff" />
          <Text style={styles.tabText}>Estados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItemActive}>
          <Ionicons name="chatbubble-ellipses" size={22} color="#4EF4C2" />
          <Text style={[styles.tabText, { color: "#4EF4C2" }]}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="call-outline" size={22} color="#fff" />
          <Text style={styles.tabText}>Chamadas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F3D3D",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 40,
    paddingBottom: 20,
    paddingTop: 20,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#555",
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    color: "#fff",
  },
  chatRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#555",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
    justifyContent: "center",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    color: "#4EF4C2",
    fontSize: 16,
    fontWeight: "600",
  },
  chatTime: {
    color: "#aaa",
    fontSize: 12,
  },
  chatMessageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  chatMessage: {
    color: "#fff",
    fontSize: 14,
    flexShrink: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2f2d2d",
    paddingVertical: 20,
    paddingBottom: 90,
    borderTopWidth: 0.5,
    borderTopColor: "#444",
  },
  tabItem: {
    alignItems: "center",
    margin: "auto",
  },
  tabItemActive: {
    alignItems: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
  },
});
