// Importing the necessary classes
const NotificationService = require('./notificationService');
const CommunicationManager = require('./communicationManager');
const PushChannel = require('./pushChannel');
const SMSChannel = require('./smsChannel');
const EmailChannel = require('./emailChannel');
const WhatsappChannel = require('./whatsappChannel');
const CustomChannel = require('./customChannel');

// Creating instances of Notification Channel Classes
const pushChannel = new PushChannel();
const smsChannel = new SMSChannel();
const emailChannel = new EmailChannel();
const whatsappChannel = new WhatsappChannel();
const customChannel = new CustomChannel();

// Creating instance of Communication Manager class
const communicationManager = new CommunicationManager();

// Registering the channels with the Communication Manager using their channel name as an unique identifier
communicationManager.register('push', pushChannel);
communicationManager.register('sms', smsChannel);
communicationManager.register('email', emailChannel);
communicationManager.register('whatsapp', whatsappChannel);
communicationManager.register('custom', customChannel);

// Creating an instance of Notification Service Class
const notificationService = new NotificationService(communicationManager);

// Sending notifications to different channels using the notification service instance 
notificationService.sendNotification('Test Notification 1', ['sms', 'whatsapp']);
notificationService.sendNotification('Test Notification 2', ['push', 'sms']);
notificationService.sendNotification('Test Notification 3', ['push', 'email', 'sms', 'custom']);