import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";
import { JobData, PopularJobCardProps } from "../../../types/interfaces";
import { WithExtras } from "../../../types/types";
import { checkURL } from "../../../utils";

const PopularJobCard: React.FC<PopularJobCardProps> = ({
  item,
  selectedJob,
  handleCardPress,
}) => {
  return (
    <TouchableOpacity
      style={otherStyles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={otherStyles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkURL(item.employer_logo)
              ? item.employer_logo
              : "https://via.placeholder.com/150",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={otherStyles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

const otherStyles = StyleSheet.create<StyleSheetList | any>({
  container: (selectedJob: string, item: WithExtras<JobData>) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === item?.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  logoContainer: (selectedJob: string, item: WithExtras<JobData>) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item?.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  jobName: (selectedJob: string, item: WithExtras<JobData>) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  publisher: (selectedJob: string, item: WithExtras<JobData>) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
});

export default PopularJobCard;
