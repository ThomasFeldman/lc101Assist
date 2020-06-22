var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
});

jasmine.execute();


Abbi and I skippin class today to hangout at Alex's before she leaves for Colorado