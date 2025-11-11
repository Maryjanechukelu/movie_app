import { Text, View, Image } from "react-native";
import { images } from "@/constants/images";

export default function Index() {
  return (
    <View className="flex-1 bg-secondary">
      <Image source={images.bg} className="w-full absolute z-0" />
    </View>
  );
}
