import { TrieNode } from './trieNode'

export class LinkTrie {
    private root: TrieNode;

    private createNode(): TrieNode {
        return { children: new Map<string, TrieNode>(), isEndOfPath: false };
    }

    /**
     * Creates an instance of LinkTrie.
     * @param {string[]} paths - An array of paths to initialize the trie with (optional).
     */
    constructor(paths: string[] = []) {
        this.root = this.createNode();
        paths.forEach(path => this.insert(path));
    }

    /**
     * Inserts a path into the trie.
     * @param {string} path - The path to insert.
     */
    insert(path: string) {
        const parts = path.split('/').filter(Boolean);
        let curr = this.root;

        for (const part of parts) {
            if (curr.children.has('*')) {
                break;
            }
            if (!curr.children.has(part)) {
                curr.children.set(part, this.createNode());
            }
            curr = curr.children.get(part)!;
        }

        curr.isEndOfPath = true;
    }

    /**
     * Searches for a path in the trie.
     * @param {string} path - The path to search for.
     * @returns {boolean} True if the path exists, false otherwise.
     */
    search(path: string) : boolean {
        const parts = path.split('/').filter(Boolean);
        let curr = this.root;

        for (const part of parts) {
            if (curr.children.has('*')) {
                return true;
            }
            if (!curr.children.has(part)) {
                return false;
            }
            curr = curr.children.get(part)!;
        }

        return curr.isEndOfPath;
    }

    /**
     * Checks if a path is a prefix of any path in the trie.
     * @param {string} path - The path to check.
     * @returns {boolean} True if the path is a prefix, false otherwise.
     */
    isPrefix(path: string): boolean {
        const parts = path.split('/').filter(Boolean);
        let curr = this.root;

        for (const part of parts) {
            if (curr.children.has('*')) {
                return true;
            }
            if (!curr.children.has(part)) {
                return false;
            }
            curr = curr.children.get(part)!;
        }

        return true; 
    }
}