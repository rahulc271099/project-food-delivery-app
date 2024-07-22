import { GLE_API_KEY } from "./constants";

export  const getPlaceDetails = async (lat, lon) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GLE_API_KEY}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK') {
        console.log(data.results);
        const placeName=data.results[0].address_components[1].long_name
        const address = data.results[0].formatted_address;
        const addressComponents = data.results[0].address_components;
        const postalCodeComponent = addressComponents.find(component => component.types.includes('postal_code'));
        const postalCode = postalCodeComponent ? postalCodeComponent.long_name : null;
        
        console.log(`Place name: ${placeName}, Postal code: ${postalCode}`);
        return { placeName, postalCode,address };
      } else {
        console.error('Geocoding API error:', data.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching the place details:', error);
      return null;
    }
  };