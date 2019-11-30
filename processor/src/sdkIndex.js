'use strict'

const { TransactionProcessor } = require('sawtooth-sdk/processor')
const SupplyHandler = require('./js/SupplyHandler')

// npm run start tcp://localhost:4004
const address = "tcp://localhost:4004";

const transactionProcessor = new TransactionProcessor(address)

transactionProcessor.addHandler(new SupplyHandler())

transactionProcessor.start()
