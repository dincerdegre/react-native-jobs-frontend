import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { COLORS, FONT, SIZES, icons, jobTypes } from "../../constants";
import { WelcomeProps } from "../../types/interfaces";

const Welcome: React.FC<WelcomeProps> = ({
  searchTerm,
  setSearchTerm,
  handleClick,
}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dincer</Text>
        <Text style={styles.welcome}>Find your Next Step</Text>
      </View>
      <View style={styles.search}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.nativeEvent.text)}
            placeholder="What are you Looking For?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={tabStyles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={tabStyles.tabText(activeJobType, item)}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
          }}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcome: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
});

const tabStyles = StyleSheet.create<StyleSheetList | any>({
  tab: (activeJobType: string, item: string) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.primary : COLORS.gray2,
  }),
  tabText: (activeJobType: string, item: string) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default Welcome;
