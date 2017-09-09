// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

/**
 * The `azure-iot-amqp-base` module contains AMQP support code common to the Azure IoT Hub Device and Service SDKs.
 *
 * @private
 * @module azure-iot-amqp-base
 */

module.exports = {
  Amqp: require('./lib/amqp.js').Amqp,
  AmqpMessage: require('./lib/amqp_message.js').AmqpMessage,
  AmqpReceiver: require('./lib/amqp_receiver.js').AmqpReceiver,
  translateError: require('./lib/amqp_common_errors.js').translateError
};