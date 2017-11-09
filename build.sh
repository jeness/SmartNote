
cd smart-note 
# npm install 
# npm install simplemde --save  
# npm install angular-highlightjs --save
# npm install -g mocha
# npm install chai
# npm install supertest --save-dev

mkdir -p /data/db
chown -R `id -un` /data/db

cd server
npm install
npm run dev

cd ..
npm run test
#mongod & npm run dev

#cd ..

#npm run start &