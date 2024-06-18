import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../constants";
import { Stack, useRouter } from "expo-router";
import HeaderButton from "../components/shared/HeaderButton";
import Welcome from "../components/home/Welcome";
import Popular from "../components/home/Popular";
import Nearby from "../components/home/Nearby";

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <HeaderButton icon={icons.menu} dimension="60%" />,
          headerRight: () => (
            <HeaderButton icon={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.scrollView}>
          <Welcome
            searchTerm={search}
            setSearchTerm={setSearch}
            handleClick={() => {
              if (search) {
                router.push(`/search/${search}`);
              }
            }}
          />
          <Popular />
          <Nearby />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollView: {
    flex: 1,
    padding: SIZES.medium,
  },
});
export default Home;
