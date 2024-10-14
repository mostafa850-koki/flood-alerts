document.getElementById('loadMore').addEventListener('click', () => {
    const alerts = [
        {
            region: 'Blue Nile',
            level: 'High',
            message: 'Heavy flooding expected in Blue Nile region.'
        },
        {
            region: 'Khartoum',
            level: 'Moderate',
            message: 'Moderate flooding risk in Khartoum region.'
        },
        {
            region: 'Northern State',
            level: 'Low',
            message: 'Low risk of flooding in Northern State.'
        }
    ];

    alerts.forEach(alert => {
        const newAlert = document.createElement('div');
        newAlert.innerHTML = `<strong>Region:</strong> ${alert.region} <strong>Level:</strong> ${alert.level}<br><strong>Message:</strong> ${alert.message}`;
        newAlert.style.padding = '10px';
        newAlert.style.marginBottom = '10px';
        newAlert.style.border = '1px solid #ccc';
        document.getElementById('alert-container').appendChild(newAlert);
    });
});