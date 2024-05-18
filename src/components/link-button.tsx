import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
  title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link className="text-slate-500 text-center text-sm font-bold" {...rest}>
      {title}
    </Link>
  );
}
