// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     middleware: {
//       '/assets': {
//         handle: (req, res) => {
//           const file = req.url.split('/')[3];
//           if (file.endsWith('.css')) {
//             res.setHeader('Content-Type', 'text/css');
//           }
//           res.sendFile(`path/to/${file}`);
//         }
//       }
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: {
      '/assets': {
        handle: (req, res) => {
          const file = req.url.split('/')[3];
          if (file.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
          }
          res.sendFile(`path/to/${file}`);
        }
      }
    }
  }
})




