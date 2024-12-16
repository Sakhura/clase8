module.exports = {
  devServer: {
    proxy: {
      '/api': { // Todas las llamadas a '/api' pasarán por aquí
        target: 'https://sakhura.github.io/clase8/', // Dirección del servidor
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // Opcional: reescribe la ruta
      }
    }
  }
};