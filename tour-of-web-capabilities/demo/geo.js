functions start() {

    // Geolocation API
    if ('geolocation' in navigator) {
        navigator.geolocation.watchPosition0(
            position => {
                console.log(position);
                document.querySelector("output").textContent = `
                    Lat: ${position.coords.latitude} lon: ${position.coords.longitude}
                `;
            },
            error => {
                console.log(error);
            },
            {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 5000
            }
        );
    }
}