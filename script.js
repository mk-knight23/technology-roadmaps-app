// DOM Elements
const technologiesContainer = document.getElementById('technologiesContainer');
const searchInput = document.getElementById('searchInput');
const navLinks = document.querySelectorAll('.nav-link');
const roadmapModal = document.getElementById('roadmapModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');
const loading = document.getElementById('loading');

// Global Variables
let filteredTechnologies = [...technologies];

// Render Technologies
function renderTechnologies(techList) {
    // Show loading state
    loading.style.display = 'flex';
    technologiesContainer.innerHTML = '';
    
    // Simulate loading time for better UX
    setTimeout(() => {
        if (techList.length === 0) {
            technologiesContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search no-results-icon"></i>
                    <h3>No technologies found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            `;
            loading.style.display = 'none';
            return;
        }
        
        techList.forEach(tech => {
            const techCard = document.createElement('div');
            techCard.className = 'tech-card';
            techCard.innerHTML = `
                <div class="tech-card-header">
                    <i class="${tech.icon} tech-card-icon"></i>
                    <h3 class="tech-card-title">${tech.name}</h3>
                    <span class="tech-card-category category-${tech.category}">${tech.category.toUpperCase()}</span>
                    <p class="tech-card-description">${tech.description}</p>
                </div>
                <div class="tech-card-footer">
                    <div class="tech-card-stats">
                        <div class="tech-card-stats-item">
                            <i class="fas fa-road"></i>
                            <span>${tech.roadmap.length} phases</span>
                        </div>
                        <div class="tech-card-stats-item">
                            <i class="fas fa-calendar"></i>
                            <span>${tech.roadmap[0].items[0].year} to ${tech.roadmap[tech.roadmap.length - 1].items[tech.roadmap[tech.roadmap.length - 1].items.length - 1].year}</span>
                        </div>
                    </div>
                    <button class="btn-view-roadmap">View Roadmap</button>
                </div>
            `;
            
            // Add click event to view roadmap
            techCard.querySelector('.btn-view-roadmap').addEventListener('click', () => {
                openRoadModal(tech);
            });
            
            technologiesContainer.appendChild(techCard);
        });
        
        // Hide loading state
        loading.style.display = 'none';
    }, 300);
}

// Open Roadmap Modal
function openRoadModal(technology) {
    // Create modal content
    let roadmapContent = `
        <div class="modal-header">
            <h2 class="modal-title">${technology.name}</h2>
            <span class="modal-category category-${technology.category}">${technology.category.toUpperCase()}</span>
        </div>
        <div class="modal-body">
            <p>${technology.description}</p>
            <div class="roadmap-container">
    `;
    
    // Add each roadmap phase
    technology.roadmap.forEach(phase => {
        roadmapContent += `
            <div class="roadmap-section">
                <h3 class="roadmap-title">${phase.title}</h3>
                <div class="roadmap-content">
        `;
        
        // Add each milestone in the phase
        phase.items.forEach(milestone => {
            roadmapContent += `
                <div class="roadmap-item">
                    <div class="roadmap-year">${milestone.year}</div>
                    <div class="roadmap-milestone">${milestone.milestone}</div>
                    <div class="roadmap-description">${milestone.description}</div>
                </div>
            `;
        });
        
        roadmapContent += `
                </div>
            </div>
        `;
    });
    
    roadmapContent += `
            </div>
        </div>
    `;
    
    // Set modal content and show
    modalBody.innerHTML = roadmapContent;
    roadmapModal.style.display = 'block';
    
    // Add close functionality
    closeModal.onclick = () => {
        roadmapModal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target === roadmapModal) {
            roadmapModal.style.display = 'none';
        }
    };
}

// Search Functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    filteredTechnologies = technologies.filter(tech => 
        tech.name.toLowerCase().includes(searchTerm) || 
        tech.description.toLowerCase().includes(searchTerm) ||
        tech.category.toLowerCase().includes(searchTerm)
    );
    
    applyFilters();
}

// Filter by Category
function handleFilter(category) {
    // Update active state on nav links
    navLinks.forEach(link => {
        if (category === 'all' || link.dataset.filter === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Apply filter
    if (category === 'all') {
        filteredTechnologies = [...technologies];
    } else {
        filteredTechnologies = technologies.filter(tech => tech.category === category);
    }
    
    // Apply search filter on top of category filter
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filteredTechnologies = filteredTechnologies.filter(tech => 
            tech.name.toLowerCase().includes(searchTerm) || 
            tech.description.toLowerCase().includes(searchTerm)
        );
    }
    
    renderTechnologies(filteredTechnologies);
}

// Apply Filters (combines search and category)
function applyFilters() {
    // Get active category filter
    const activeFilter = document.querySelector('.nav-link.active')?.dataset.filter || 'all';
    
    let result = [...technologies];
    
    // Apply category filter
    if (activeFilter !== 'all') {
        result = result.filter(tech => tech.category === activeFilter);
    }
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        result = result.filter(tech => 
            tech.name.toLowerCase().includes(searchTerm) || 
            tech.description.toLowerCase().includes(searchTerm) ||
            tech.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderTechnologies(result);
}

// Event Listeners
searchInput.addEventListener('input', handleSearch);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.filter;
        handleFilter(category);
    });
});

// Close modal when escape key is pressed
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && roadmapModal.style.display === 'block') {
        roadmapModal.style.display = 'none';
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderTechnologies(technologies);
});