// CommunicationManager class manages communication channels
class CommunicationManager {
    // Constructor initializes an empty channels object
    constructor() {
        this.availableChannels = {};
    }

    // Register a communication channel with a given name
    register(channelName, channel) {
        this.availableChannels[channelName] = channel;
    }

    // Send a message through the specified communication channel
    transmit(channelName, message) {
        // Retrieve the channel based on the provided name
        const communicationChannel = this.availableChannels[channelName];

        // Check if the channel exists
        if (!communicationChannel) {
            // Log an error message if the channel is not found
            console.error(`Communication channel ${channelName} not found.`);
            return;
        }

        // Send the message through the communication channel
        communicationChannel.send(message);
    }
}

// Export the CommunicationManager class for use in other modules
module.exports = CommunicationManager;