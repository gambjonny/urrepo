# Urrepo

## in every new package:

- tsconfig.json should extend from base
- composite prop must be equal to true
- add a new 'reference' in in root tsconfig pointing to new package
- use defineProject instead of defineConfig in vitestconfig
- prefer using versions of packages from catalog:
- add eslint.config.js and import a config file from @urrepo/eslint-config package
