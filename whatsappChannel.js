// Whatsapp Channel class for sending Whatsapp notifications
class WhatsappChannel {
    // Method to send an Whatsapp with the provided message
    send(message) {
        // Log a message indicating the intent to send an Whatsapp
        console.log(`Whatsapp Notification: ${message}`);
    }
}

// Export the Whatsapp Channel class for use in other modules
module.exports = WhatsappChannel;