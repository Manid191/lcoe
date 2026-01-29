/**
 * LCOE & PPA Calculator - Constants
 * Centralized configuration for fixed values and environmental factors.
 */

// Environmental Impact Factors
window.ENV_FACTORS = {
    // Thailand Average Grid Emission Factor (kgCO2/kWh)
    // Ref: TGO
    CO2_FACTOR: 0.485,

    // CO2 Absorption per tree per year (kgCO2/tree/year)
    // Ref: Average for perennial trees
    TREE_FACTOR: 9
};

// Application Constants
window.APP_CONSTANTS = {
    DEFAULT_PROJECT_COUNT: 3,
    VERSION: '2.10',
    VIEW_MODES: {
        OVERVIEW: 'overview',
        BREAKDOWN: 'breakdown'
    }
};
