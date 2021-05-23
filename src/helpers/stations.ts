const stations = ['Test1', 'Test2', 'Test3', 'Test4', 'Test5']
export const getStations = (state: string, type: string) => {
    return stations.filter(x => type === 'to' ? x!== state : x!== state);
}