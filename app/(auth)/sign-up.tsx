import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const banner = "https://dummyimage.com/750x464/000/fff.png";

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="">
          <Image source={{ uri: banner }} className="z-0 w-full h-[250px]" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
