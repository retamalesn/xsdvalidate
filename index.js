var xsd = require('libxml-xsd');

const xml = require('fs').readFileSync('test.xml', 'utf-8')
 
xsd.parseFile('matrXmlSchema.xsd', function(err, schema){
  schema.validate(xml, function(err, validationErrors){
  		if(validationErrors != null)
  			console.log(validationErrors);
  		else
  			console.log('No hay errores');
  });  
});