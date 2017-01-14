import regexes from './boxRegex'; 

export function extractBoxWithIndices(text) {
    if (!text || !text.match(regexes.boxSigns)) {
        return [];
    }

    let tags = [];

    text.replace(regexes.validBox, (match, before, plus, boxText, offset, chunk) => {
        const after = chunk.slice(offset + match.length);
        if (after.match(regexes.endBoxMatch)) {
            return;
        }
        const startPosition = offset + before.length;
        const endPosition = startPosition + boxText.length + 1;

        tags.push({
            box: boxText,
            indices: [startPosition, endPosition]
        })
    });

    return tags;
}
