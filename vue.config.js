module.exports = {
  devServer: {
    proxy: {
      '/api': { // Todas las llamadas a '/api' pasarán por aquí
        target: 'https://github.com/Sakhura/clase8', // Dirección del servidor
        changeOrigin: true,
        pathRewrite: { '^/api': '' } // Opcional: reescribe la ruta
      }
    }
  }
};