// /client/prettier.config.js
export default {
    plugins: ["prettier-plugin-tailwindcss"], // Must be loaded last
    tailwindFunctions: ["clsx", "cva", "cn"], // Add functions that use Tailwind classes
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: "es5",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
  };
  
  