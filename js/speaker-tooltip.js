// Speaker Tooltip Functionality
function initializeSpeakerTooltips() {
    const speakerProfiles = document.querySelectorAll('.speaker-profile:not([data-tooltip-initialized])');
    
    if (speakerProfiles.length === 0) {
        return;
    }
    
    speakerProfiles.forEach((profile) => {
        const tooltip = profile.querySelector('.speaker-tooltip');
        
        if (!tooltip) {
            return;
        }
        
        // Mark as initialized to prevent duplicate processing
        profile.setAttribute('data-tooltip-initialized', 'true');
        
        // Ensure tooltip is hidden initially
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
        tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
        
        // Show tooltip on hover
        profile.addEventListener('mouseenter', function() {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
            tooltip.style.transform = 'translateX(-50%) translateY(0)';
        });
        
        // Hide tooltip when mouse leaves
        profile.addEventListener('mouseleave', function() {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
            tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Let import.js handle initialization after content loads
}); 