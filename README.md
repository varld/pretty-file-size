# Pretty File Size

A tiny file-size formatter, with no dependencies.

It's based on the SI definition of file sizes, so `1 kB = 1024 B`

## Install

```bash
# yarn
yarn add pretty-file-size

# npm
npm install --save pretty-file-size
```

## Usage 

```typescript
import formatFileSize from 'pretty-file-size';

prettyFileSize(34892075);
// > 33.3 MB

prettyFileSize(245)).toEqual('245 B')
```

## API

### `prettyFileSize(size: number, points: number)`

#### `size: number`

The number of bytes.

#### `points: number`

The number of decimal points. 

Default: `1`

## License

MIT © [Tobias Herber](https://herber.space)
