import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    base: env.VITE_DOMAIN.includes("localhost") ? '/' : '/todo-app/',
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
