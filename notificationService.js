// NotificationService class handles sending notifications through the CommunicationManager
class NotificationService {
    // Constructor initializes the service with a CommunicationManager instance
    constructor(communicationManager) {
        // Store the provided CommunicationManager instance
        this.communicationManager = communicationManager;
    }

    // Send notifications to specified channels with a given message
    sendNotification(message, channels) {
        // Iterate through each channel in the provided list
        channels.forEach(channel => {
            // Use the CommunicationManager to transmit the message through the current channel
            this.communicationManager.transmit(channel, message);
        });
    }
}

// Export the NotificationService class for use in other modules
module.exports = NotificationService;