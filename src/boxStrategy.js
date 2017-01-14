import { extractBoxWithIndices } from './utils'

export default (contentBlock, callback) => { 
    const text = contentBlock.getText(); 
    const results = extractBoxWithIndices(text); 

    results.forEach((box) => { 
        callback(box.indices[0], box.indices[1]);
    })
}