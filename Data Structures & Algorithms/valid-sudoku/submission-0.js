class Solution {
    isValidSudoku(board) {
    const seen = new Set();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      // Skip empty cells (usually marked as '.')
      if (val === '.') continue;
      // Generate unique keys for row, col, and sub-box
      const boxR = Math.floor(r / 3);
      const boxC = Math.floor(c / 3);
      const rowKey = `r-${r}-${val}`;
      const colKey = `c-${c}-${val}`;
      const boxKey = `b-${boxR}-${boxC}-${val}`;

      // If any identifier already exists, duplicate found
      if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false;
      }

      // Record this digit in all three scopes
      seen.add(rowKey);
      seen.add(colKey);
      seen.add(boxKey);
    }
  }
  return true;

    }
}
