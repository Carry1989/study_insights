export const sortUp = (propertyName, stateData) => {
    let sortedArray = stateData.sort((a, b) => a[propertyName].toString().localeCompare(b[propertyName]));
    return sortedArray;
}

export const sortDown = (propertyName, stateData) => {
    let sortedArray = stateData.sort((a, b) => b[propertyName].toString().localeCompare(a[propertyName]));
    return sortedArray;
}