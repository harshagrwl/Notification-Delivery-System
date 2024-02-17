// EmailChannel class for sending email notifications
class EmailChannel {
    // Method to send an email with the provided message
    send(message) {
        // Log a message indicating the intent to send an email notification
        console.log(`Email Notification: ${message}`);
    }
}

// Export the EmailChannel class for use in other modules
module.exports = EmailChannel;