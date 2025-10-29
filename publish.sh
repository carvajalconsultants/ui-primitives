bun run paraglide

# Makes NPM publish not ignore the directory (because it uses the .gitignore when .npmignore does not exist)
echo > src/paraglide/.npmignore

npm publish
