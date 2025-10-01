import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const stories = [
  {
    id: "1",
    user: "Pascoal Nzola Tondo",
    avatar: "https://github.com/pascoalnzola.png",
  },
  {
    id: "2",
    user: "Domingas Quissanga",
    avatar: "https://github.com/domingas08quissanga.png",
  },
  {
    id: "3",
    user: "Amarildo Vieira",
    avatar: "https://github.com/amarildovieira1.png",
  },
  {
    id: "4",
    user: "Adolfo Monteiro Manuel",
    avatar: "https://github.com/adolfodev10.png",
  },
];

const posts = [
  {
    id: "1",
    user: "Ricki Krause",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "1h",
    text: "Mesmo que fique bem claro, decidi fingir que acredito.",
    image: "https://picsum.photos/400/300",
    likes: "120",
    comments: "40",
    views: "1M",
  },
  {
    id: "2",
    user: "Dorothea Griffiths",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    time: "3h",
    text: "Tenho que colocar PIN nesta conversa 🔒",
    image: "https://picsum.photos/400/301",
    likes: "20 mil",
    comments: "120",
    views: "1M",
  },
  {
    id: "3",
    user: "Adela Larue",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    time: "5h",
    text: "Curtindo um pouco do sol ☀️",
    image: "https://picsum.photos/400/302",
    likes: "5.3k",
    comments: "800",
    views: "250k",
  },
];

export default function FeedScreen() {
  const router = useRouter();

  const renderPost = ({ item }: any) => (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.user}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Feather name="more-vertical" size={20} color="#FFF" />
      </View>

      {/* Texto */}
      <Text style={styles.postText}>{item.text}</Text>

      {/* Imagem */}
      <Image source={{ uri: item.image }} style={styles.postImage} />

      {/* Ações */}
      <View style={styles.actions}>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Ionicons name="heart-outline" size={20} color="#4EF4C2" />
            <Text style={styles.actionText}>{item.likes}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Ionicons name="chatbubble-outline" size={20} color="#4EF4C2" />
            <Text style={styles.actionText}>{item.comments}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Ionicons name="eye-outline" size={20} color="#4EF4C2" />
            <Text style={styles.actionText}>{item.views}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Feather name="send" size={20} color="#4EF4C2" />
            <Text style={styles.actionText}>Partilhar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Stories */}
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.storyItem}>
            <View style={[styles.avatarWrapper, styles.addStory]}>
              <Ionicons name="add" size={28} color="#4EF4C2" />
            </View>
            <Text style={styles.storyUser}>Stories</Text>
          </View>

          {stories.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <LinearGradient
                colors={["#FFF", "#4EF4C2"]} // IG gradient
                style={styles.gradientBorder}
              >
                <Image
                  source={{ uri: story.avatar }}
                  style={styles.storyAvatar}
                />
              </LinearGradient>
              <Text style={styles.storyUser} numberOfLines={1}>
                {story.user}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.tabBar}>
        <TouchableOpacity
          onPress={() => router.push("/feed")}
          style={styles.tabItem}
        >
          <Ionicons name="grid-outline" size={22} color="#4EF4C2" />
          <Text style={[styles.tabText, { color: "#4EF4C2" }]}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="scan-outline" size={22} color="#fff" />
          <Text style={styles.tabText}>Estados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/conversations")}
          style={styles.tabItemActive}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={22} color="#fff" />
          <Text style={[styles.tabText]}>Conversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="phone-portrait-outline" size={22} color="#fff" />
          <Text style={styles.tabText}>Chamadas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2D2D",
    padding: 10,
  },
  storiesContainer: {
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 40,
  },
  storyItem: {
    alignItems: "center",
    marginRight: 15,
    width: 70,
  },
  gradientBorder: {
    width: 62,
    height: 62,
    borderRadius: 31,
    padding: 2,
  },
  avatarWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    overflow: "hidden",
  },
  storyAvatar: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  addStory: {
    borderColor: "#4EF4C2",
    borderStyle: "dashed",
  },
  storyUser: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
  },
  // === Feed ===
  card: {
    backgroundColor: "#3F3D3D",
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: "#4EF4C2",
    fontWeight: "700",
    fontSize: 15,
  },
  time: {
    color: "#AAA",
    fontSize: 12,
  },
  postText: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 8,
  },
  postImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    color: "#4EF4C2",
    fontSize: 14,
    fontWeight: "600",
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
