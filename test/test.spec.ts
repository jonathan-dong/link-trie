import { LinkTrie } from '../src/index';

test('Insert and search', () => {
  const trie = new LinkTrie();
  
  trie.insert('/a/b/c');
  trie.insert('/a/b/d');
  trie.insert('/x/y/z');

  expect(trie.search('/a/b/c')).toBe(true);
  expect(trie.search('/a/b/d')).toBe(true);
  expect(trie.search('/x/y/z')).toBe(true);

  expect(trie.search('/a/b')).toBe(false);
  expect(trie.search('/a/b/e')).toBe(false);
  expect(trie.search('/x/y/a')).toBe(false);
  expect(trie.search('/a/b/c/d')).toBe(false);
});

test('Insert and search with wildcards', () => {
  const trie = new LinkTrie();
  
  trie.insert('/a/b/*');
  trie.insert('/x/y/z/*');

  expect(trie.search('/a/b/c')).toBe(true);
  expect(trie.search('/a/b/c/d')).toBe(true);
  expect(trie.search('/x/y/z/a')).toBe(true);
  expect(trie.search('/x/y/z/a/b')).toBe(true);

  expect(trie.search('/a')).toBe(false);
  expect(trie.search('/a/b')).toBe(false);
  expect(trie.search('/x/y/a')).toBe(false);
});

test('Insert and search without leading slashes', () => {
  const trie = new LinkTrie();
  
  trie.insert('a/b/c');
  trie.insert('/x/y/z');

  expect(trie.search('/a/b/c')).toBe(true);
  expect(trie.search('a/b/c')).toBe(true);
  
  expect(trie.search('/x/y/z')).toBe(true);
  expect(trie.search('x/y/z')).toBe(true);
});

test('Insert and prefix search', () => { 
  const trie = new LinkTrie();
  
  trie.insert('/a/b/c');
  trie.insert('/a/b/d');
  trie.insert('/x/y/z');

  expect(trie.isPrefix('/a')).toBe(true);
  expect(trie.isPrefix('/a/b')).toBe(true);
  expect(trie.isPrefix('/a/b/c')).toBe(true);
  expect(trie.isPrefix('/x/y')).toBe(true);
  expect(trie.isPrefix('/x/y/z')).toBe(true);

  expect(trie.isPrefix('/x/y/a')).toBe(false);
  expect(trie.isPrefix('/a/b/c/d')).toBe(false);
});