/**
 * Service helpers for managing LocalStorage state (No Backend)
 */

export function getStorageData(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading key "${key}" from localStorage:`, error);
    return defaultValue;
  }
}

export function setStorageData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing key "${key}" to localStorage:`, error);
  }
}

export function removeStorageData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing key "${key}" from localStorage:`, error);
  }
}
