import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constant";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100"></View>
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100"></View>
      </View>

      <CustomButton
        title="Log In with Google"
        className="mt-5 w-full shadow-none"
        bgVariant="outline"
        textVariant="primary"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
