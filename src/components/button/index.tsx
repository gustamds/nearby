import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/theme";
import { IconProps as TabletIconProps } from "@tabler/icons-react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
}

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity disabled={isLoading} style={[s.container, style]} activeOpacity={0.8} {...rest}>
      {isLoading ?  <ActivityIndicator size="small" color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>
}

type IconProps = {
  icon: React.ComponentType<TabletIconProps>;
}

function Icon({icon: Icon}: IconProps){
  return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title;
Button.Icon = Icon;
export { Button };
