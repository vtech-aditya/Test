var should = require('chai').should(),
logger = require('../routes/index'),
log = logger.log,
title = 'my title',
data = 'my data';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    console.log("title : "+title);
    console.log("data : "+ data);
    var output = logger.log(title, data);
    console.log(output);
    expect(output).toBe("my titlemy data");
  });
});

