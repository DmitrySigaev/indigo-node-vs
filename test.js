/****************************************************************************
 * Copyright (C) 2015-2016 EPAM Systems
 * 
 * This file is part of Indigo-Node binding.
 * 
 * This file may be distributed and/or modified under the terms of the
 * GNU General Public License version 3 as published by the Free Software
 * Foundation and appearing in the file LICENSE.md  included in the
 * packaging of this file.
 * 
 * This file is provided AS IS with NO WARRANTY OF ANY KIND, INCLUDING THE
 * WARRANTY OF DESIGN, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
 ***************************************************************************/

/* declaration of modules  */
var assert = require('assert');
var indigo = require("./indigo-node/indigo");
var IndigoObject = require("./indigo-node/indigoObject");

try {
	var obj = indigo.loadMolecule("AAA~");

} catch (e) {
	console.log(e.message);
}

console.log('Test loadMokecule from stream');
console.log('should return IndigoObject');
console.log(indigo.getVersion());
assert.equal(true, indigo.loadMolecule("COC1=CC2=C(NC(=C2)C(O)(CC2=CN=CC=C2)CC2=CN=CC=C2)C=C1") instanceof IndigoObject);
assert.equal(1, indigo.countReferences());
assert.equal(true, indigo.loadMolecule("COC1=CC2=C(NC(=C2)C(O)(CC2=CN=CC=C2)CC2=CN=CC=C2)C=C1").clone() instanceof IndigoObject);
assert.equal(3, indigo.countReferences());
indigo._setSessionId();
indigo._releaseSessionId();
assert.equal(0, indigo.countReferences());


var obj = indigo.loadMolecule("AAA~");
var cnt = indigo.countReferences();
console.log(cnt);
var newobj = obj.clone();
var cnt = indigo.countReferences();
assert.equal(2, indigo.countReferences());
console.log(cnt);
//printf("%s\n", indigoCanonicalSmiles(m));


indigo._setSessionId();
console.log(indigo.getLastError());
indigo._releaseSessionId();
var cnt = indigo.countReferences();
