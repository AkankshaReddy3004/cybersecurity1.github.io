// Sample data of cyber crimes
const cyberCrimes = [
    { company: 'Google', loss: '$10 million', description: 'Data breach compromising user information.' },
    { company: 'AIIMS', loss: '$5 million', description: 'Ransomware attack causing system shutdown.' },
    { company: 'Kaseya', loss: '$20 million', description: 'Supply chain cyber attack affecting multiple clients.' },
    { company: 'Marriott', loss: '$15 million', description: 'Customer data theft from reservation system.' },
    { company: 'Cosmos Bank', loss: '$8 million', description: 'ATM card skimming leading to fraudulent transactions.' }
];

function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const filteredCrimes = cyberCrimes.filter(crime => crime.company.toLowerCase().includes(searchTerm));

    if (filteredCrimes.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        filteredCrimes.forEach(crime => {
            const crimeElement = document.createElement('div');
            crimeElement.classList.add('crime');
            crimeElement.innerHTML = `
                <h3>${crime.company}</h3>
                <p>Loss: ${crime.loss}</p>
                <p>Description: ${crime.description}</p>
            `;
            resultsContainer.appendChild(crimeElement);
        });
    }
}
