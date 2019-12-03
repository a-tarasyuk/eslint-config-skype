# eslint-config-skype

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/eslint-config-skype/blob/master/LICENSE.md) [![npm version](https://img.shields.io/npm/v/eslint-config-skype.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-skype) [![npm downloads](https://img.shields.io/npm/dm/eslint-config-skype.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-skype)

> Shared ESLint config for TypeScript projects produced by Skype Team

## Installation

```bash
npm install eslint-config-skype @typescript-eslint/eslint-plugin --save-dev
```

Create `.eslintrc` in your project root directory and copy the following into the file:

```json
{
  "extends": ["skype"]
}
```

#### React

```bash
npm install eslint-plugin-react --save-dev
```

Create `.eslintrc` in your project root directory and copy the following into the file:

```json
{
  "extends": ["skype", "skype/react"]
}
```

## Reference

- [ESlint Configuring](https://eslint.org/docs/user-guide/configuring)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

## License and Copyright

This software is released under the terms of the [MIT license](https://github.com/a-tarasyuk/eslint-config-skype/blob/master/LICENSE.md).
