var logger = require('../index'),
log = logger.log,
title = 'my title',
data = 'my data';



describe('#log', function  () {
  it('converts & into &amp;', function() {
    log(title, data).should.equal('my titlemy data');
});
