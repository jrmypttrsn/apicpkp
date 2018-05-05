/*
    LibreTaxi, free and open source ride sharing platform.
    Copyright (C) 2016-2017  Roman Pushkin

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* eslint-disable no-new */
import test from 'ava';
import TextResponse from '../../src/responses/text-response';
import checkNotNullTest from '../helpers/check-not-null.js';

checkNotNullTest('message', (args) => { new TextResponse(args); });

test('can be constructed with default parameters', t => {
  const r = new TextResponse({ message: 'my message' });
  t.falsy(r.important);
  t.pass();
});

test('should save props and have text type', t => {
  const r = new TextResponse({ message: 'my message', important: true });
  t.is(r.message, 'my message');
  t.is(r.important, true);
  t.is(r.type, 'text');
});
