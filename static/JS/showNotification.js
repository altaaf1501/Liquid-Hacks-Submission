       
function showNotification() {
    const notification = new Notification("New message from Liquid Health!", {
            body: "Hey Buddy, time to drink water!",
            icon: src="/static/images/LiquidHealth-logo.png"
    });
}

console.log(Notification.permission);

if (Notification.permission === "granted") {
    showNotification();
}
else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotification();
        }
    });
}
    
