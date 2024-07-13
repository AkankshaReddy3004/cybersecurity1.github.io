document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var incidentType = document.getElementById('Phishing','malware attack','DDos attacks','IoT attacks').value;
  
    // Check incidentType (dummy check)
    if (incidentType === 'Phishing','malware attack','DDos attacks','IoT attacks' ) {
      alert('Report sent succesfully');
      // Redirect to another page or do something else
    } else {
      alert('Incorrect incidentType or report!!!');
    }
  // Code to handle form submission and report incident
});

// Placeholder code for interactive data visualization using a charting library like Chart.js
// This will require including the Chart.js library in the HTML file
