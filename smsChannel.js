// SMS Channel class for sending SMS notifications
class SMSChannel {
    // Method to send an SMS with the provided message
    send(message) {
        // Log a message indicating the intent to send an SMS
        console.log(`SMS Notification: ${message}`);
    }
}

// Export the SMS Channel class for use in other modules
module.exports = SMSChannel;