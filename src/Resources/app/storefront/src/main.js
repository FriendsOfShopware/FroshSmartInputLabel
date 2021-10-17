// Import all necessary Storefront plugins and scss files
import FroshSmartInputLabel from './smart-input-label/smart-input-label';

// Register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('FroshSmartInputLabel', FroshSmartInputLabel);