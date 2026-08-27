class Solution {
    encode(strs) {
        // Array + join avoids repeated string reallocation from +=
        const parts = new Array(strs.length);
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            parts[i] = str.length + "#" + str;
        }
        return parts.join("");
    }

    decode(str) {
        const result = [];
        const n = str.length;
        let i = 0;

        while (i < n) {
            // Find the '#' delimiter
            let j = i;
            while (str.charCodeAt(j) !== 35) { // 35 === '#'
                j++;
            }

            const length = Number(str.slice(i, j));
            const start = j + 1;
            const end = start + length;

            result.push(str.slice(start, end));

            i = end;
        }

        return result;
    }
}