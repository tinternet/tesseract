wasm-pack build --release
cd www
npm run build
cp -r dist/* ../docs/
cd ..
