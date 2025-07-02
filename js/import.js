fetch("pages/program.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("program").innerHTML = data;

    // Initialize speaker tooltips after content is loaded
    if (typeof initializeSpeakerTooltips === 'function') {
      setTimeout(() => {
        try {
          initializeSpeakerTooltips();
        } catch (error) {
          console.error('Error calling initializeSpeakerTooltips:', error);
        }
      }, 100);
    }
  })
  .catch(error => {
    console.error('Error loading program content:', error);
  });