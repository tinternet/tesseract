wasm-pack build --release
cd www
npm run build
cd ..
rm -rf docs
cp -r www/dist docs
