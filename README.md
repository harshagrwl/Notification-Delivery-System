## Overview
This project demonstrates a simple multi-channel Notification Delivery System for channels like SMS, Email, Push, WhatsApp, or any other custom channel.

## Setup Instructions
- Clone the repository
- Navigate to the project root folder
- Ensure that Node.js is installed in the working environment
- run ```node notificationHandler.js```

## Project Architecture
The project contains the following components:
- Notification Handler: Responsible for creating the instances of different components and communicating with Service and Channel Components.
- Notification Service: Responsible for receiving notification requests and dispatching them to appropriate communication channels using the ```sendNotification``` method.
- Communication Manager: Responsible for registering and storing the details of available channels using the ```register``` method and transmitting the message using the ```transmit``` method.
- Push Channel, Email Channel, SMS Channel, WhatsApp Channel, Custom Channel: Responsible for their own implementation of functionalities and sending respective notifications using the ```send``` method.

## Architecture Diagram  
![image](https://github.com/harshagrwl/Notification-Delivery-System/assets/43218240/55f0f476-0660-459c-b83c-4961f642941f)

## Implementation
- Sending notifications to different channels

![image](https://github.com/harshagrwl/Notification-Delivery-System/assets/43218240/23c5c031-8924-4b20-9a52-4f8fca75a994)

- Notifications delivered and printed on the console
  
![image](https://github.com/harshagrwl/Notification-Delivery-System/assets/43218240/dca0d839-9db9-4177-9dac-b1cc8f258100)

- NOTE: This project demonstrates the core idea of handling multi-channel notifications. The actual implementation of sending SMS, Email, Push Notifications, WhatsApp messages, etc will be taken care in the future with the help of respective APIs.

