import { Image, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center bg-green-500 py-10 px-5">
      <View className="flex-1">
        <Image
          source={require("@/assets/logo.png")}
          className="h-10 w-28 mt-4"
        />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartQuantityItems > 0 && (
        <Link href="/cart" asChild>
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-blue-500 w-6 h-6 rounded-full items-center justify-center top-2 z-10 -right-3.5">
              <Text className="text-white font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>

            <Feather name="shopping-bag" color={colors.white} size={32} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
