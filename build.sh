
cd smart-note 
npm install 
npm install simplemde --save  
npm install angular-highlightjs --save
npm install -g mocha
npm install chai
npm install supertest --save-dev


brew update
brew install mongodb
mkdir -p /data/db
chown -R `id -un` /data/db

cd server
npm install
mongod & npm run dev
