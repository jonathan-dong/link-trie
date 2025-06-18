# link-trie

[Trie](https://en.wikipedia.org/wiki/Trie) data structure built to process link paths ([npm]((https://www.npmjs.com/package/link-trie)))

## Installation

```bash
npm install link-trie
```

## Usage

The trie can be initialized with a list of paths or as an empty trie.

```javascript
const trie = new LinkTrie();
const trie = new LinkTrie(['/path1', '/path2']);
```

This package provides `insert`, `search`, and `isPrefix` methods.

- `insert(path)`: inserts a new path into the trie
- `search(path)`: returns `true` if the given path is in the trie
- `isPrefix(path)`: returns `true` if the given path is a prefix in the trie

Links are expected to be in the form `/path/to/page` or `path/to/page` and may include wildcards in the form `/path/to/multiple/*`.

Wildcards may only occur at the end of a path, extra segments after the wildcard are ignored.

```javascript
const trie = new LinkTrie();

trie.insert('/example/*')
trie.search('/example/1') // returns true
trie.search('/example/1/2') // also returns true
```
