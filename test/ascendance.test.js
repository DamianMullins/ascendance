import test from 'ava';
import { ascendance } from '../src/ascendance';


test('ascendance() has to be a function', t => {
    t.is(typeof ascendance, 'function');
});

test('ascendance() has to return an object', t => {
    const instance = ascendance();

    t.is(typeof instance, 'object');
});

test('.setup() has to be a function', t => {
    const instance = ascendance();

    t.is(typeof instance.setup, 'function');
});
