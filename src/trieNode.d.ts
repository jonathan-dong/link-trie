export interface TrieNode {
    children: Map<string, TrieNode>;
    isEndOfPath: boolean;
}