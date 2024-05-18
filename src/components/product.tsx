import { forwardRef } from "react";
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="w-full flex-row items-center shadow-md bg-gray-100 rounded-xl my-2"
        {...rest}
      >
        <Image source={data.thumbnail} className="w-24 h-24 rounded-md" />

        <View className="flex-1 ml-3">
          <View className="flex-row items-center ">
            <Text className="text-green-700 font-subtitle font-bold flex-1">
              {data.title}
            </Text>

            {data.quantity && (
              <Text className="text-white font-bold text-sm mr-4 bg-green-400 px-3 py-1 rounded-full">
                x {data.quantity}
              </Text>
            )}
          </View>

          <Text className="text-black text-xs leading-4 mt-0.5 mr-2">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
