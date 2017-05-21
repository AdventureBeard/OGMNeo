'use strict';

const test = require('blue-tape');
const ORMNeoIndex = require('../lib/ormneo-index');

test('Test create Index', (assert) => {    
   ORMNeoIndex.create('object', ['name']).then((result) => {
        assert.notEqual(result, null);
        assert.end();
   });
});

test('Test create Index fail', (assert) => {    
    ORMNeoIndex.create(null, ['name','tes']).catch((error) => {
         assert.equals(error.message, 'You must provide and label and an array with at least one field name');
         assert.end();
    });
});

test('Test create index fail by parameters', (assert) => {
    ORMNeoIndex.create('object', []).catch((error) => {
         assert.equals(error.message, 'You must provide an array with at least one field name string');
         assert.end();
    });
});

test('Test drop Index', (assert) => {    
    ORMNeoIndex.drop('object', ['name']).then((result) => {
        assert.notEqual(result, null);
        assert.end();
    })
});