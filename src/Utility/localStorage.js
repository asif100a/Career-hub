const getItem = () => {
    const storedItems = localStorage.getItem('job-application');
    if(storedItems){
        return JSON.parse(storedItems);
    }
    return [];
};

const saveToLS = (id) => {
    const storedJobItems = getItem();
    const exists = storedJobItems.find(itemId => itemId === id);
    if(!exists){
        storedJobItems.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobItems));
    }
};

export {getItem, saveToLS};