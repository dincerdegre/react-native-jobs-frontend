import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { TabButtonProps } from "../../types/interfaces";
import { COLORS, SHADOWS, SIZES } from "../../constants";

const TabButton: React.FC<TabButtonProps> = ({
  name,
  activeTab,
  onHandleSearchType,
}) => {
  return (
    <TouchableOpacity
      style={otherStyles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={otherStyles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const otherStyles = StyleSheet.create<StyleSheetList | any>({
  btn: (name: string, activeTab: string) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name: string, activeTab: string) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.small,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
});

export default TabButton;
