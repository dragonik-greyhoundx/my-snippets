export default function getListValuesFromListOfObjects ( listOfObjects : Array<Object> , valueKey: string ) : Array<any> {
    let listOfValues : any[] = [];
    listOfObjects.forEach((obj) => {
        if ( obj[valueKey] != undefined && obj[valueKey] != null ) {
            listOfValues.push(obj[valueKey]);
        };
    });
    return listOfValues;
};