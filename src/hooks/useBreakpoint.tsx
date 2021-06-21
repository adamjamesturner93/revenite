import { useMediaQuery } from "react-responsive";
// import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../../tailwind.config";

export const useBreakpoint = (breakpoint: string) => {
  // const Tailwind = resolveConfig(tailwindConfig);

  const sizes: Record<string, string> = {
    sm: "640px",
  };
  return useMediaQuery({
    query: `(min-width: ${sizes[breakpoint]})`,
  });
};
