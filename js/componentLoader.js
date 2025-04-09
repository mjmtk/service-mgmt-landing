// Component Loader for ManaakiTech Landing Page
class ComponentLoader {
  constructor() {
    this.loadedComponents = 0;
    this.totalComponents = 0;
  }

  async loadComponent(elementId, componentKey) {
    this.totalComponents++;
    try {
      // Fetch the component HTML from the components directory
      const response = await fetch(`components/${componentKey}.html`);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentKey}`);
      }
      
      const html = await response.text();
      document.getElementById(elementId).innerHTML = html;
      this.loadedComponents++;
      
      if (this.loadedComponents === this.totalComponents) {
        // All components loaded, initialize any scripts
        this.initializeScripts();
      }
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }

  initializeScripts() {
    // Re-initialize any scripts that need to run after components are loaded
    document.dispatchEvent(new Event('componentsLoaded'));
  }
}

// Create a global instance
window.componentLoader = new ComponentLoader();

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load all components with 'data-component' attribute
  const componentElements = document.querySelectorAll('[data-component]');
  componentElements.forEach(element => {
    const componentName = element.getAttribute('data-component');
    const elementId = element.id;
    if (componentName && elementId) {
      window.componentLoader.loadComponent(elementId, componentName);
    }
  });
});
