import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";
import { SpecificTabContentProps } from "../../types/interfaces";

const SpecificTabContent: React.FC<SpecificTabContentProps> = ({
  title,
  points,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points &&
          points.map((point, index) => (
            <View style={styles.pointWrapper} key={index}>
              <View style={styles.pointDot} />
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: SIZES.medium,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  pointsContainer: {
    marginVertical: SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6,
  },
  pointText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  },
});

export default SpecificTabContent;
