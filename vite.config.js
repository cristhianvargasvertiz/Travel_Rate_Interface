import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Travel_Rate_Interface_App/',  // Añadir esta línea con el nombre del repositorio
  server: {
    port: 5500, // Cambia este valor al puerto que prefieras
}
})
