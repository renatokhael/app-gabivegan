import { Pressable, PressableProps, Text } from "react-native";
import { clsx } from "clsx";

type CategoryProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      className={clsx(
        "bg-gray-100 px-4 justify-center rounded-full h-8 mt-4",
        isSelected && "bg-green-500"
      )}
      {...rest}
    >
      <Text
        className={clsx(
          "text-slate-500 font-subtitle text-xs",
          isSelected && "text-white"
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
