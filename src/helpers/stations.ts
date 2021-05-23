const stations = [
    'Adlershof', 
    'Altlandsberg', 
    'Arkenberge', 
    'Babelsberg', 
    'Basdorf',
    'Beelitz-Heilstätten',
    'Charlottenburg',
    'Dahlewitz',
    'Ferch-Lienewitz'
]
export const getStations = (state: string, type: string) => {
    return stations.filter(x => type === 'to' ? x!== state : x!== state);
}