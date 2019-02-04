export const required = value => (value ? undefined : 'Required');

export const lengthRequirements = length => value => {
    if(length.min && length.min > value.length){
        return `Must be greater than ${length.min} characters`;
    }
    if(length.max && length.max < value.length){
        return `Must be less than ${length.max} characters`;
    }
    return undefined;
} 

export const noWhiteSpace = value => {
    let testValue = value.trim();
    return testValue === value ? undefined : 'No whitespace at beginning or end'
};