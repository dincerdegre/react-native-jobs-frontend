import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONT, SIZES } from "../../constants";
import { useRouter } from "expo-router";
import PopularJobCard from "../shared/Cards/PopularJobCard";
import useFetch from "../../hooks/useFetch";
import { JobData } from "../../types/interfaces";
import { WithExtras } from "../../types/types";

const Popular = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });
  const [selectedJob, setSelectedJob] = useState<string | undefined>(undefined);

  const handleCardPress = (item: WithExtras<JobData>) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.button}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }: { item: WithExtras<JobData> }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item: WithExtras<JobData>) => item.job_id.toString()}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  button: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default Popular;
