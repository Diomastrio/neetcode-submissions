class Solution {

    encode(strs) {
        let result = "";

        for (const str of strs) {
        result += str.length + "#" + str;
        }    
        let encoded_string = result;
        return encoded_string;    
    }
    decode(str) {
        let i = 0;
        let s = str;
        const result = [];

        while (i < str.length) {
            let j = i;

            while (s[j] !== "#") {
                j++;
            }

            const length = Number(s.slice(i, j));

            const word = s.slice(j + 1, j + 1 + length);

            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }
}
