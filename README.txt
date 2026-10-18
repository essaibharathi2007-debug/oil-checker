=== PHONE APP AA MAATHA (Render free hosting) ===
1. github.com la free account create panni, new repository create pannunga.
2. Intha folder la ulla ellam (".env" thavira) GitHub ku upload pannunga ("uploading an existing file" option use pannalam).
3. render.com la GitHub la login pannunga -> New > Web Service -> unga repository select pannunga.
   Build Command: npm install
   Start Command: npm start
   Plan: Free
4. Environment Variables la add pannunga:  MONGODB_URI = (unga Atlas connection string)
5. Deploy mudinjathum oru link kidaikkum (example: https://bus-oil-log.onrender.com)
6. Phone la Chrome la andha link open panni: Menu (3 dots) > "Install app" / "Add to Home screen"
   iPhone Safari: Share > "Add to Home Screen"
7. MongoDB Atlas > Network Access la 0.0.0.0/0 allow irukkanum (Render ku venum).

Note: Free plan la 15 min use pannala na server thoongum, first open ku 30-50 sec aagum. Data safe ah Atlas la irukkum.

=== LOCAL (computer la mattum) ===
npm install, .env.example -> .env, npm start, http://localhost:3000
