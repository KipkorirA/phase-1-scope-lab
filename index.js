
window.customerName = "bob";

function upperCaseCustomerName() {
    return window.customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer(newBestCustomer){
    bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'john';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'jane';
}