// Simulated data (to be replaced with actual data from SQL database)
const organizations = ['AIIMS', 'Google', 'Kaseya','Marriot','Cosmos Bank'];
const losses = ['Patients records were inaccessible leading to delay in treatment','Generated 40 million requests per second leading to overwhelming network','70 million dollars was asked to release the software','Data breach which affected around 5.2 million guests','Lost a whopping Rs 94 crore to cybercriminals in just three days'];
const victims = ['Patients', 'Company', 'Employees', 'Customers', 'Customers'];

// Function to display organizations
function displayOrganizations() {
    const orgList = document.getElementById('orgList');
    organizations.forEach(org => {
        const li = document.createElement('li');
        li.textContent = org;
        orgList.appendChild(li);
    });
}

// Function to display losses
function displayLosses() {
    const lossList = document.getElementById('lossList');
    losses.forEach(loss => {
        const li = document.createElement('li');
        li.textContent = loss;
        lossList.appendChild(li);
    });
}

// Function to display victims
function displayVictims() {
    const victimList = document.getElementById('victimList');
    victims.forEach(victim => {
        const li = document.createElement('li');
        li.textContent = victim;
        victimList.appendChild(li);
    });
}

// Call functions to display data
displayOrganizations();
displayLosses();
displayVictims();
