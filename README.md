# eslint-config-skype

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/a-tarasyuk/eslint-config-skype/blob/master/LICENSE.md) [![npm version](https://img.shields.io/npm/v/eslint-config-skype.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-skype) [![npm downloads](https://img.shields.io/npm/dm/eslint-config-skype.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-skype)
> Shared ESLint config for TypeScript projects produced by Skype Team

## Installation

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-skype
```

Create `.eslintrc` in your project root directory and copy the following into the file:

```json
{
  "extends": ["eslint-config-skype"],
}
```

#### React

```bash
npm install --save-dev eslint eslint-plugin-react eslint-config-skype
```
Create `.eslintrc` in your project root directory and copy the following into the file:

```json
{
  "extends": ["eslint-config-skype", "eslint-config-skype/react"],
}
```

## Reference
- [ESlint Configuring](https://eslint.org/docs/user-guide/configuring)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

## License and Copyright
This software is released under the terms of the [MIT license](https://github.com/a-tarasyuk/eslint-config-skype/blob/master/LICENSE.md).