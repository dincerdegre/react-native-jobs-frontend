import {TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { HeaderButtonProps } from "../../types/interfaces";
import { COLORS, SIZES } from "../../constants";

const HeaderButton: React.FC<HeaderButtonProps> = ({
  icon,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={icon}
        resizeMode="cover"
        style={buttonStyles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

const buttonStyles = StyleSheet.create<StyleSheetList | any>({
  btnImg: (dim: string) => ({
    width: dim,
    height: dim,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default HeaderButton;
