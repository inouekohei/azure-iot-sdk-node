// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

var assert = require('chai').assert;
var Message = require('azure-iot-common').Message;
var AmqpMessage = require('./amqp_message.js');

describe('AmqpMessage', function () {
  describe('#fromMessage', function () {
    it('throws if message is falsy', function () {
      assert.throws(function () {
        AmqpMessage.fromMessage(null);
      }, ReferenceError, 'message is \'null\'');
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_001: [The fromMessage method shall create a new instance of AmqpMessage.]*/
    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_006: [The generated AmqpMessage object shall be returned to the caller.]*/
    it('creates an AmqpMessage object', function () {
      var amqpMessage = AmqpMessage.fromMessage(new Message());
      assert.instanceOf(amqpMessage, AmqpMessage);
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_002: [The created AmqpMessage object shall have a property of type Object named properties.]*/
    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_003: [If the message argument has a to property, the properties property of the AmqpMessage object shall have a property named to with the same value.]*/
    it('maps message.to to amqpMessage.properties.to', function () {
      var to = 'destination';
      var message = new Message();
      message.to = to;
      var amqpMessage = AmqpMessage.fromMessage(message);
      assert.equal(amqpMessage.properties.to, to);
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_003: [If the message argument has a to property, the properties property of the AmqpMessage object shall have a property named to with the same value.]*/
    it('does not set amqpMessage.properties.to if message.to isn\'t set', function () {
      var message = new Message();
      var amqpMessage = AmqpMessage.fromMessage(message);
      assert.notDeepProperty(amqpMessage, 'properties.to');
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_004: [If the message argument has an expiryTimeUtc property, the properties property of the AmqpMessage object shall have a property named absoluteExpiryTime with the same value.]*/
    it('maps message.expiryTimeUtc to amqpMessage.properties.absoluteExpiryTime', function () {
      var ts = Date.now() + 60000; // one minute from now
      var message = new Message();
      message.expiryTimeUtc = ts;
      var amqpMessage = AmqpMessage.fromMessage(message);
      assert.equal(amqpMessage.properties.absoluteExpiryTime, ts);
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_004: [If the message argument has an expiryTimeUtc property, the properties property of the AmqpMessage object shall have a property named absoluteExpiryTime with the same value.]*/
    it('does not set amqpMessage.properties.absoluteExpiryTime if message.expiryTimeUtc isn\'t set', function () {
      var message = new Message();
      var amqpMessage = AmqpMessage.fromMessage(message);
      assert.notDeepProperty(amqpMessage, 'properties.absoluteExpiryTime');
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_005: [If message.getData() is truthy, the AmqpMessage object shall have a property named body with the value returned from message.getData().]*/
    it('copies Message body', function () {
      var body = 'hello';
      var message = new Message(body);
      var amqpMessage = AmqpMessage.fromMessage(message);
      assert.equal(amqpMessage.body, body);
    });

    /*Tests_SRS_NODE_IOTHUB_AMQPMSG_05_005: [If message.getData() is truthy, the AmqpMessage object shall have a property named body with the value returned from message.getData().]*/
    it('does not set amqpMessage.body if message does not have a body', function () {
      var message = new Message();
      var amqpMessage = AmqpMessage.fromMessage(message);
      assert.notProperty(amqpMessage, 'body');
    });
  });
});